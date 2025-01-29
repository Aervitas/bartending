"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="z-30 w-full bg-[#FAF9F7] py-2 md:py-4">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-20 items-center justify-between gap-3 rounded-2xl border border-[#697F6A]/20 px-3">
          {/* Site branding (no nested <a> tags) */}
          <div className="flex flex-1 items-center text-[#3F3F3F] font-semibold hover:text-blue-500">
            <Link href="/" className="inline-flex shrink-0">
              Tipsy Tavern Bartending Co
            </Link>
          </div>

          {/* Hamburger button (visible on mobile) */}
          <button
            aria-label="Toggle mobile menu"
            className="inline-flex items-center justify-center rounded-md p-2 text-[#3F3F3F] transition-all hover:bg-[#697F6A]/10 focus:outline-none md:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? (
              /* "X" icon */
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Desktop navigation (no nested anchors) */}
          <ul className="hidden flex-1 items-center justify-end gap-5 md:flex">
            <li>
              <Link
                href="/quote"
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

      {/* Mobile menu (toggled by hamburger button) */}
      {mobileMenuOpen && (
        <nav className="md:hidden">
          <ul className="mt-2 space-y-2 rounded-b-2xl border border-t-0 border-[#697F6A]/20 bg-[#FAF9F7] py-4 px-6">
            <li>
              <Link
                href="/quote"
                className="block rounded px-3 py-2 text-[#3F3F3F]/80 transition-colors hover:bg-[#697F6A]/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="block rounded bg-[#697F6A] px-3 py-2 text-white transition-colors hover:bg-[#4D6451]"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
