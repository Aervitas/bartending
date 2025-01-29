export const metadata = {
  title: "Sign In - Open PRO",
  description: "Page description",
};

import Link from "next/link";

export default function SignIn() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Get a Price for your Event
            </h1>
          </div>
          {/* Contact form */}
          <form className="mx-auto max-w-[400px]">
            <div className="space-y-5">
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input w-full"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium text-indigo-200/65"
                  htmlFor="email"
                >
                  Phone Number
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input w-full"
                  placeholder="Your email"
                />
              </div>
              <div>
                {/* Label */}
                <div className="mb-1 flex items-center justify-between gap-3">
                  <label className="mb-1 block text-sm font-medium text-indigo-200/65">
                    Party Size
                  </label>
                </div>

                {/* Two numeric inputs side by side */}
                <div className="flex items-center gap-2">
                  {/* Minimum */}
                  <input
                    id="minSize"
                    type="number"
                    className="form-input w-20"
                    placeholder="Min"
                    min={1}
                  />
                  <span className="text-[#3F3F3F]">-</span>
                  {/* Maximum */}
                  <input
                    id="maxSize"
                    type="number"
                    className="form-input w-20"
                    placeholder="Max"
                    min={1}
                  />
                </div>



              </div>
            </div>
            <div className="mt-6 space-y-5">
              <button className="btn w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]">
                Request a Quote
              </button>

            </div>
          </form>


        </div>
      </div>
    </section>
  );
}
