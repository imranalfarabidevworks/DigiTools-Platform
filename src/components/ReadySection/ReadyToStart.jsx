//UiStyle
import { primaryButton, secondaryButton, sectionWidth } from "../uiStyle/uiStyle";

const ReadyToStart = () => {
  return (
    <section className="mt-8 bg-gradient-to-r from-[#5b2ef2] via-[#7f2fff] to-[#be16ff] py-20 text-center text-white md:py-24">
      <div className={sectionWidth}>
        <h2 className="text-[2rem] font-extrabold tracking-[-0.05em] sm:text-[2.4rem] md:text-[3.4rem]">
          Ready To Transform Your Workflow?
        </h2>
        <p className="mx-auto mt-5 max-w-[40rem] text-sm leading-7 text-white/85 sm:text-base">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>

        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href="#products"
            className={`${primaryButton} !bg-white !bg-none !text-[#6f3df4] !shadow-none hover:!scale-105 transition-transform`}
          >
            Explore Products
          </a>
          <a 
            href="#pricing" 
            className={`${secondaryButton} !border-white !text-white hover:!bg-white/10`}
          >
            View Pricing
          </a>
        </div>

        <p className="mt-6 text-xs text-white/70 sm:text-sm">
          14-day free trial - No credit card required - Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default ReadyToStart;