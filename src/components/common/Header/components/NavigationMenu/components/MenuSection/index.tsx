import { Menu } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuSectionProps {
  links: Array<{ title: string; href: string }>;
}

export const MenuSection = ({ links }: MenuSectionProps) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-2 p-2 text-lg">
      {links.map(({ title, href }) => {
        const isActive = pathname === href;

        const style = "rounded-md px-3 py-1 transition hover:bg-slate-200";
        const activeStyle = "rounded-md px-3 py-1 bg-slate-200";

        return (
          <Menu.Item key={href}>
            <Link
              className={isActive ? activeStyle : style}
              href={href}
            >
              {title}
            </Link>
          </Menu.Item>
        );
      })}
    </div>
  );
};
