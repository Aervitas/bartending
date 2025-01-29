import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

export default function Features() {
  return (
    // Use a soft cream background for this entire section
    <section className="relative bg-[#FAF9F7]">
      {/* You can keep the blurred shapes as-is or replace them if you want them recolored */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Adjust the border gradient if desired */}
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,#697F6A_30%,transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-[#697F6A]/40 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-[#697F6A]/40">
              
            </div>

            <h2
              // Replace the multi-color Indigo gradient with your brand gradient
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#697F6A,#CDAF71,#697F6A)] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
            >
              Bringing the Life of the Party
            </h2>
            <p className="text-lg text-[#3F3F3F]/80">
            With expert mixologists, custom drink menus, and an eye for detail, we’ll elevate your celebration—so you can relax and enjoy an unforgettable experience.
            </p>
          </div>

          <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            
          </div>

          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            {/* Example Feature #1 */}
            <article>
              {/* Change icon fill to a muted green */}
              
              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mb-3 w-6 h-6 text-[#4D6451]"  // Adjust size & color
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>


              {/* Heading color set to a dark green or warm gray */}
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-[#3F3F3F]">
                Timely Service
              </h3>
              {/* Text color is a softer warm gray, slightly transparent */}
              <p className="text-[#3F3F3F]/70">
                We arrive on time, set up quickly, and serve your guests with a smile.
              </p>
            </article>

            {/* Repeat for each feature item */}
            <article>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mb-3 w-6 h-6 text-[#4D6451]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
            />
          </svg>

              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-[#3F3F3F]">
                Flexible Payments
              </h3>
              <p className="text-[#3F3F3F]/70">
                We offer a variety of payment options to suit your needs.
              </p>
            </article>

            <article>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mb-3 w-6 h-6 text-[#4D6451]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
            />
          </svg>

              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-[#3F3F3F]">
                Short-Notice Scheduling
              </h3>
              <p className="text-[#3F3F3F]/70">
                We can accommodate your event even on short notice.
              </p>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
}
