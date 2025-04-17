"use client";

import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    // 1) Give the footer a cream background
    <footer className="bg-[#FAF9F7]">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Optional Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 opacity-30 mix-blend-multiply"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>

        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          {/* 1st block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-[#3F3F3F]"><a href="/faq">FAQ</a></h3>
            <ul className="space-y-2 text-sm">
            </ul>
          </div>

          {/* 2nd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-[#3F3F3F]"><a href="/quote">Get a Quote</a></h3>
            <ul className="space-y-2 text-sm">
            </ul>
          </div>

          {/* 3rd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-[#3F3F3F]"></h3>
            <ul className="space-y-2 text-sm">
              <li>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-[#3F3F3F]"></h3>
            <ul className="space-y-2 text-sm">
            </ul>
          </div>

          {/* 5th block */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">

            <div className="text-sm">
              <p className="mb-3 text-[#3F3F3F]/70">
                <a href = "/">tipsytavernbartending.com</a>
                <span className="text-[#4A4A4A]"> · </span>
                <a
                  className="transition text-[#3F3F3F]/70 hover:text-[#697F6A]"
                  href="#0"
                >
                  {/* Link text if you want */}
                </a>
              </p>
              <ul className="inline-flex gap-1">
                <li>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
