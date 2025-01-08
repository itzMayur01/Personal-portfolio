import { ButtonOutline, ButtonPrimary } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-31 ">
      <div className="container items-center lg:grid  lg:grid-cols-2 lg:gap-5">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="public\images\avatar-1.png"
                width={40}
                height={40}
                className="img-cover"
                alt="Mayur Portrait"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>
          <h2 className="headline-1 max-w-[12ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building Scalable Modern Websites for the Future
          </h2>
        </div>
        <div className=" lg:block">
          <figure className="max-w-[400px] max-h-[400px] lg:w-full lg:max-h-[517px] lg:max-w-[376px] ml-auto mr-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden mt-2">
            <img
              src="/images/mayur-portrait-12.png"
              width={656}
              height={700}
              alt="Mayur Kumar"
              className="w-full"
            />
          </figure>
        </div>
        <div className="flex items-center justify-around mt-12 lg:justify-normal lg:gap-3 ">
          <ButtonPrimary
            label="Download CV"
            icon="download"
            href="/mayur-cv.pdf"
            download={true}
          />
          <ButtonOutline
            href="#about"
            label="Scroll down"
            icon="arrow_downward"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
