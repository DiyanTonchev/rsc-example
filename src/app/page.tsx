import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-4">
          <Link
            className="flex max-w-xs flex-col rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="/posts"
          >
            <h3 className="text-2xl font-bold text-center">Posts</h3>
          </Link>
          <Link
            className="flex max-w-xs flex-col rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="/nested"
          >
            <h3 className="text-2xl font-bold text center">Nested</h3>
          </Link>
        </div>
      </div>
    </main>
  );
}
