import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-[1140px] flex-col items-center px-6 py-24 text-center">
      <h1 className="text-4xl font-bold text-[#08173E]">Page not found</h1>
      <p className="mt-4 max-w-xl text-[18px] leading-[1.7] text-[#555555]">
        The page you are looking for is not available.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-[8px] bg-[#08173E] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#0188BF]"
      >
        Return Home
      </Link>
    </main>
  );
}
