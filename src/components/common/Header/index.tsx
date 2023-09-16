import Image from "next/image";

import rose from "@/images/rose.png";

export const Header = () => {
  return (
    <header className="flex items-end justify-center gap-1 p-4 shadow-md">
      <h1 className="text-2xl font-medium">Vege Art</h1>

      <Image
        src={rose}
        alt="Rose"
        className="h-9 w-9"
      />
    </header>
  );
};
