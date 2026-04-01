import userImage from '../../assets/user.png';
import packageImage from '../../assets/package.png';
import rocketImage from '../../assets/rocket.png';

// (UiStyle)
import {
  sectionCopy,
  sectionHeadingWrap,
  sectionTitle,
  sectionWidth,
  surfaceCard,
} from '../uiStyle/uiStyle';

const iconMap = {
  userImage,
  packageImage,
  rocketImage,
};

const Steps = ({ steps }) => {
  return (
    <section className="bg-[#f7f8fc] py-20 md:py-24" id="steps">
      <div className={sectionWidth}>
        <div className={`${sectionHeadingWrap} mx-auto max-w-[40rem] text-center`}>
          <h2 className={sectionTitle}>Get Started In 3 Steps</h2>
          <p className={sectionCopy}>
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps?.map((step, index) => {
            return (
              <article
                key={step.title || index}
                className="animated-border-shell group relative h-full transition duration-300 ease-out hover:-translate-y-2"
              >
                <div
                  className={`${surfaceCard} animated-border-inner relative flex h-full flex-col px-6 py-10 text-center transition duration-300 ease-out group-hover:shadow-[0_22px_48px_rgba(28,30,53,0.10)]`}
                >
                  <span className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#6f3df4] to-[#9c16f7] text-xs font-semibold text-white shadow-sm">
                    0{index + 1}
                  </span>

                  <div className="mx-auto flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-[#f2ebff] text-[#7a38f5] transition duration-300 group-hover:scale-110 group-hover:bg-[#ede4ff]">
                    <img
                      src={iconMap[step.icon]}
                      alt={step.title}
                      className="h-8 w-8 object-contain transition duration-300 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="mt-7 text-[1.5rem] font-bold tracking-[-0.04em] text-[#1d2438] transition duration-300 group-hover:text-[#6f3df4] sm:text-[1.7rem] lg:text-[1.85rem]">
                    {step.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-6 text-[#8b95a9]">
                    {step.text}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Steps;