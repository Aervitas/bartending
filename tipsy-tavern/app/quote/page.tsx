
"use client";

import Link from "next/link";
import PageTransition from "@/components/page-transition";
import emailjs from 'emailjs-com';
import { useRef, useState } from "react";
import { error } from "console";
import Footer from "@/components/ui/footer";

export default function Quote() {

  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs.sendForm(
      'service_43ddtpr',
      'template_1t2zv3y',
      formRef.current,
      'llFHCUOYDW5GRbet6'
    )
    .then((result) => {
      console.log(result.text);
      setIsSubmitted(true);
    })
    .catch((error) => {
      console.log(error.text);
    });
  };

  return (
    <PageTransition>
      {/* Full-screen gradient background */}
      <section className="min-h-screen animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#697F6A,#CDAF71,#697F6A)] bg-[length:200%_auto] flex items-center justify-center p-6">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Form Container - Contrasting Color */}
          <div className="py-12 md:py-20 bg-white shadow-2xl rounded-2xl p-10 max-w-lg mx-auto">
            {/* Section header */}
            
            <div className="pb-6 text-center">
              <h1 className="text-[#3F4E3F] font-nacelle text-4xl font-semibold md:text-5xl">
                Get a Price for Your Event
              </h1>
            </div>
            {/* Check if quote submitted */}
            {isSubmitted ? (
              <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Thank you for your request!
              </h2>
              <p className="text-gray-600">
                We’ve received your information and will get in touch soon.
              </p>
            </div>
            ) : (
            <form ref={formRef} onSubmit={handleSubmit}className="space-y-6">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="form-input w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#CDAF71] bg-gray-100 text-gray-900 placeholder-gray-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="phone">
                  Phone Number (US Only)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                  className="form-input w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#CDAF71] bg-gray-100 text-gray-900 placeholder-gray-500"
                  placeholder="XXXXXXXXXX (no dashes)"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800">Party Size</label>
                <div className="flex items-center gap-2">
                  <input
                    id="minSize"
                    name="minSize"
                    type="number"
                    required
                    className="form-input w-24 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#CDAF71] bg-gray-100 text-gray-900 placeholder-gray-500"
                    placeholder="Min"
                    min={1}
                  />
                  <span className="text-gray-700">-</span>
                  <input
                    id="maxSize"
                    name="maxSize"
                    type="number"
                    required
                    className="form-input w-24 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#CDAF71] bg-gray-100 text-gray-900 placeholder-gray-500"
                    placeholder="Max"
                    min={1}
                  />
                </div>
              </div>
              
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="name">
                  Event Description
                </label>
                <textarea
                  id="event"
                  name="event"
                  required
                  rows={5}              // Controls how tall the textarea appears
                  maxLength={200}       // Limits the number of characters
                  className="form-textarea w-full p-4 rounded-lg border border-gray-300
                            focus:ring-2 focus:ring-[#CDAF71] bg-gray-100 text-gray-900
                            placeholder-gray-500 resize-none"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  type="text"
                  className="form-input w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#CDAF71] bg-gray-100 text-gray-900 placeholder-gray-500"
                />
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button className="w-full bg-gradient-to-t from-[#697F6A] to-[#CDAF71] text-white font-semibold p-3 rounded-lg shadow-md hover:opacity-80 transition duration-300">
                  Request a Quote
                </button>
              </div>
            </form>
            )}
          </div>
        </div>
      </section>
    </PageTransition>

  );
}
