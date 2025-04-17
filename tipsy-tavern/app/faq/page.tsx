
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
      <section className="min-h-screen animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#697F6A,#CDAF71,#697F6A)] bg-[length:200%_auto] flex items-center justify-center p-6 w-full">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Form Container - Contrasting Color */}
          <div className="py-12 md:py-20 bg-white shadow-2xl rounded-2xl p-10 max-w-5xl mx-auto">
            {/* Section header */}
            
            <div className="pb-6 text-center">
              <h1 className="text-[#3F4E3F] font-nacelle text-4xl font-semibold md:text-5xl">
                Frequently Asked Questions
              </h1>
            </div>

            <ul className="list-disc list-inside space-y-7 text-gray-800 text-lg">
                <li>        
                    <strong>Does Tipsy Tavern Bartending provide alcohol?</strong>
                    <span className="block pl-6">
                        No, we do not provide alcohol. However, we make the process easy by giving you a customized shopping list based on your menu and guest count, so you know exactly what to purchase.
                    </span>
                </li>
                <li>
                    <strong>Is Tipsy Tavern Bartending insured?</strong>
                    <span className="block pl-6">
                    Yes! Tipsy Tavern Bartending is fully insured, including liquor liability coverage. All of our bartenders are RBS certified and licensed professionals, so you can feel confident knowing your event is in safe and responsible hands.
                    </span>
                </li>
                <li>
                    <strong>Can I only book the Tipsy Tavern Champagne Tower Service?</strong>
                    <span className="block pl-6">
                    Absolutely! Our Champagne Tower Service is available as a standalone option. We’ll customize the tower to fit your guest count and aesthetic. All you need to do is provide the champagne of your choice, and we’ll take care of the rest—from setup to the perfect pour moment.
                    </span>
                </li>
                <li>
                    <strong>Can we book Tipsy Tavern Bartending for more than 4 hours?</strong>
                    <span className="block pl-6">
                    Yes, you can! Our minimum booking is 4 hours, but you’re welcome to extend your service time. Each additional hour is $250, and we’re happy to accommodate your timeline to keep the good vibes going as long as you need.
                    </span>
                </li>
                <li>
                    <strong>Can Tipsy Tavern Bartending provide mocktails?</strong>
                    <span className="block pl-6">
                        Yes, we do! Whether you’re hosting a dry event or just want fun, alcohol-free options, we’ve got a full menu of handcrafted mocktails that are just as delicious and beautifully presented as our cocktails.
                        </span>
                </li>
            </ul>

          </div>
        </div>
      </section>
    </PageTransition>

  );
}
