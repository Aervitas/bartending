"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="z-30 w-full bg-[#FAF9F7] py-2 md:py-4">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-20 items-center justify-between gap-3 rounded-2xl border border-[#697F6A]/20 px-3">
          {/* Site branding */}
          <div className="flex flex-1 items-center text-[#3F3F3F] font-semibold">
            Tipsy Tavern Bartending Co
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-5">
            <li>
              <Link
                href="/signin"
                className="btn-sm rounded border border-[#697F6A]/20 px-10 py-[5px] text-[#3F3F3F]/80 transition-colors hover:bg-[#697F6A]/10"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="btn-sm rounded bg-[#697F6A] px-10 py-[5px] text-white transition-colors hover:bg-[#4D6451]"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
