import { FiPlay } from 'react-icons/fi';
import groupFive from '../../assets/Group 5.png';

const Banner = ({ heroAssets }) => {
  return (
    <section
      className="mx-auto grid w-[min(1120px,calc(100%-1.5rem))] gap-10 py-12 md:py-20 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-16 lg:py-24"
      id="hero"
    >
      <div className="order-2 max-w-[34rem] text-center lg:order-1 lg:text-left">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#ede8ff] px-3 py-2 text-sm font-semibold text-[#7a38f5] shadow-md sm:px-4 sm:py-3 sm:text-md">
          <img src={groupFive} alt="" className="h-4 w-4 object-contain" />
          New: AI-Powered Tools Available
        </span>

        <h1 className="mt-6 text-[2.2rem] font-extrabold leading-[0.95] tracking-[-0.05em] text-[#20263a] sm:text-[2.8rem] md:text-[3.6rem] lg:text-[4.5rem]">
          Supercharge Your Digital Workflow
        </h1>

        <p className="mx-auto mt-5 max-w-[31rem] text-sm leading-7 text-[#75809a] sm:text-md sm:leading-8 lg:mx-0">
          Access premium AI tools, design assets, templates, and productivity
          software all in one place. Start creating faster today.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
          <a
            href="#products"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-[#6f3df4] to-[#9c16f7] px-6 py-3 text-md font-semibold text-white shadow-[0_10px_30px_rgba(122,56,245,0.22)]"
          >
            Explore Products
          </a>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-[#a35dff] px-6 py-3 text-md font-semibold text-[#7a38f5]"
          >
            <FiPlay className="text-md" />
            Watch Demo
          </button>
        </div>
      </div>

      <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
        <div className="w-full max-w-[15.5rem] overflow-hidden rounded-[0.4rem] bg-[#f5f5f9] shadow-[0_20px_45px_rgba(35,39,58,0.08)] sm:max-w-[18.75rem] md:max-w-[22rem] lg:max-w-[25rem]">
          <img
            src={heroAssets.bannerImage}
            alt="Digital workflow tools"
            className="aspect-[0.82] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;