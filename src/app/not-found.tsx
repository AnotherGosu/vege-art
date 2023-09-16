import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex grow flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-medium">404</h2>

      <p>The page you are requesting does not exist</p>

      <Link
        className="rounded-md bg-slate-100 px-4 py-2 transition hover:bg-slate-200"
        href="/"
      >
        Return Home
      </Link>
    </div>
  );
}
