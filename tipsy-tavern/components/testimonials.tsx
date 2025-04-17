"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";
import Image, { StaticImageData } from "next/image";
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg03 from "@/public/images/testimonial-03.jpg";
import TestimonialImg04 from "@/public/images/testimonial-04.jpg";
import TestimonialImg05 from "@/public/images/testimonial-05.jpg";
import TestimonialImg06 from "@/public/images/testimonial-06.jpg";
import TestimonialImg07 from "@/public/images/testimonial-07.jpg";
import TestimonialImg08 from "@/public/images/testimonial-08.jpg";
import TestimonialImg09 from "@/public/images/testimonial-09.jpg";
import ClientImg01 from "@/public/images/client-logo-01.svg";
import ClientImg02 from "@/public/images/client-logo-02.svg";
import ClientImg03 from "@/public/images/client-logo-03.svg";
import ClientImg04 from "@/public/images/client-logo-04.svg";
import ClientImg05 from "@/public/images/client-logo-05.svg";
import ClientImg06 from "@/public/images/client-logo-06.svg";
import ClientImg07 from "@/public/images/client-logo-07.svg";
import ClientImg08 from "@/public/images/client-logo-08.svg";
import ClientImg09 from "@/public/images/client-logo-09.svg";

const testimonials = [
  {
    img: TestimonialImg01,
    clientImg: ClientImg01,
    name: "Emily R.",
    company: "Los Angeles, CA",
    content:
      "Tipsy Tavern Bartending made our wedding reception unforgettable! The drinks were amazing, the bartenders were professional and friendly, and the champagne tower was such a showstopper. 10/10 would book again!",
    categories: [1, 3, 5],
  },
  {
    img: TestimonialImg02,
    clientImg: ClientImg02,
    name: "Leo G.",
    company: "Burbank, CA",
    content:
      "Highly recommend Tipsy Tavern! Professional, stylish, and they really know how to keep the party going. Plus, the bartenders are all certified and insured, which gave us peace of mind.",
    categories: [1, 2, 4],
  },
  {
    img: TestimonialImg03,
    clientImg: ClientImg03,
    name: "Samantha T.",
    company: "Glendale, CA",
    content:
      "From start to finish, Tipsy Tavern Bartending was on point. Their team showed up early, set up a beautiful bar, and served the best espresso martinis I’ve ever had. Our guests were obsessed!",
    categories: [1, 2, 5],
  },
  {
    img: TestimonialImg04,
    clientImg: ClientImg04,
    name: "Sam M.",
    company: "Northridge, CA",
    content:
      "I hired Tipsy Tavern for my birthday party and they crushed it. The mocktails were just as good as the cocktails, and they helped us plan everything out perfectly—including what alcohol to buy. Super smooth experience.",
    categories: [1, 4],
  },

  {
    img: TestimonialImg07,
    clientImg: ClientImg07,
    name: "David J.",
    company: "Pasadena, CA",
    content:
      "Highly recommend Tipsy Tavern! Professional, stylish, and they really know how to keep the party going. Plus, the bartenders are all certified and insured, which gave us peace of mind.",
    categories: [1, 2, 5],
  },
];
export default function Testimonials() {
  const masonryContainer = useMasonry();
  const [category, setCategory] = useState<number>(1);

  return (
    // Outer container ensures full-page cream background
    <div className="bg-[#FAF9F7] min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Simple muted green top border instead of a gradient */}
        <div className="border-t border-[#697F6A]/20 py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#697F6A,#CDAF71,#697F6A)] 
                         bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold 
                         text-transparent md:text-4xl"
            >
              Still have doubts?
            </h2>
            <p className="text-lg text-[#3F3F3F]/80">
              Hear what our customers have to say about our services.
            </p>
          </div>

          {/* Cards */}
          <div
            className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
            ref={masonryContainer}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <Testimonial testimonial={testimonial} category={category}>
                  {testimonial.content}
                </Testimonial>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonial({
  testimonial,
  category,
  children,
}: {
  testimonial: {
    img: StaticImageData;
    clientImg: StaticImageData;
    name: string;
    company: string;
    content: string;
    categories: number[];
  };
  category: number;
  children: React.ReactNode;
}) {
  return (
    <article
      className={`relative rounded-2xl bg-[#FAF9F7] p-5 border border-[#697F6A]/20 transition-opacity ${
        !testimonial.categories.includes(category) ? "opacity-30" : ""
      }`}
    >
      <div className="flex flex-col gap-4">
        
        <p className="text-[#3F3F3F]/80 before:content-['“'] after:content-['”']">
          {children}
        </p>
        <div className="flex items-center gap-3">
          <Image
            className="inline-flex shrink-0 rounded-full"
            src={testimonial.img}
            width={36}
            height={36}
            alt={testimonial.name}
          />
          <div className="text-sm font-medium text-[#3F3F3F]">
            <span>{testimonial.name}</span>
            <span className="text-[#4A4A4A]"> - </span>
            <a
              className="text-[#3F3F3F]/70 transition-colors hover:text-[#697F6A]"
              href="#0"
            >
              {testimonial.company}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}