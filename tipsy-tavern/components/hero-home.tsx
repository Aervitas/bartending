import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import Logo from "./ui/logo";
export default function HeroHome() {
  return (
    // Set a soft cream background
    <section className="bg-[#FAF9F7]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="flex justify-center">
            <Logo />
        </div>
        <div className="py-12 md:py-5">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              // Change gradient to muted greens & subtle gold
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#697F6A,#CDAF71,#697F6A)] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Bartenders on the Move
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                // Change the text color to a dark, warm gray
                className="mb-8 text-xl text-[#3F3F3F]"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Tipsy Tavern Bartending Co. is a mobile bartending service that
                provides a unique and memorable experience for your guests.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    // Button gradient: from deep green to a lighter green
                    className="btn group mb-4 w-full bg-gradient-to-t from-[#4D6451] to-[#697F6A] bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Get a Quote
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Modal video section */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="videos//video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}
