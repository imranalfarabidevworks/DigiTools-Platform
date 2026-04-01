import { FiCheck } from 'react-icons/fi';

// ইমপোর্ট পাথগুলো নিশ্চিত করুন (আপনার ফোল্ডার অনুযায়ী ঠিক আছে)
import designIcon from '../../assets/products/design-tool.png';
import operationIcon from '../../assets/products/operation.png';
import portfolioIcon from '../../assets/products/portfolio.png';
import cartIcon from '../../assets/products/shopping-cart.png';
import socialIcon from '../../assets/products/social-media.png';
import aiIcon from '../../assets/products/writing_1.png';

import {
  primaryButton,
  sectionCopy,
  sectionHeadingWrap,
  sectionTitle,
  sectionWidth,
  surfaceCard,
} from '../uiStyle/uiStyle';

const PricingCard = ({ plan }) => {
  const isFeatured = plan.featured;

  // আইকন রিটার্ন করার লজিক (আরও শক্তিশালী করা হয়েছে)
  const getPlanIcon = (name) => {
    if (!name) return aiIcon;
    const n = name.toLowerCase();

    if (n.includes("ai") || n.includes("writing")) return aiIcon;
    if (n.includes("design") || n.includes("templates")) return designIcon;
    if (n.includes("stock") || n.includes("assets") || n.includes("premium")) return portfolioIcon;
    if (n.includes("automation") || n.includes("toolkit") || n.includes("operation")) return operationIcon;
    if (n.includes("resume") || n.includes("builder") || n.includes("cart")) return cartIcon;
    if (n.includes("social") || n.includes("content")) return socialIcon;
    
    return aiIcon; // কোনোটি না মিললে ডিফল্ট
  };

  return (
    <article className={`${!isFeatured ? 'animated-border-shell' : ''} group relative h-full transition duration-300 hover:-translate-y-2`}>
      <div className={`relative flex h-full flex-col rounded-[1.25rem] px-5 py-6 transition duration-300 ${isFeatured ? 'bg-gradient-to-br from-[#6f3df4] via-[#7c23ff] to-[#bb16ff] text-white shadow-[0_22px_48px_rgba(111,61,244,0.22)]' : `${surfaceCard} animated-border-inner bg-[#f9faff] text-[#1d2438]`}`}>
        
        {/* ইমেজ কন্টেইনার */}
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-2 shadow-sm overflow-hidden">
          <img 
            src={getPlanIcon(plan.name)} 
            alt={plan.name} 
            className="h-full w-full object-contain"
            // যদি পাথ ভুল থাকে তবে কনসোলে এরর দিবে না, বরং অল্টারনেট আইকন দেখাবে
            onError={(e) => { e.target.src = aiIcon }} 
          />
        </div>

        {isFeatured && (
          <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffe59a] px-4 py-1 text-xs font-semibold text-[#a26400] whitespace-nowrap shadow-sm">
            Most Popular
          </span>
        )}

        <h3 className="text-[1.55rem] font-bold tracking-[-0.04em] sm:text-[1.7rem]">{plan.name}</h3>
        <p className={`mt-2 text-sm ${isFeatured ? 'text-white/80' : 'text-[#8b95a9]'}`}>{plan.subtitle}</p>

        <div className="mt-6 flex items-end gap-1">
          <strong className="text-[2rem] font-extrabold sm:text-[2.2rem]">{plan.price}</strong>
          <span className={`pb-1 text-sm ${isFeatured ? 'text-white/80' : 'text-[#8b95a9]'}`}>{plan.period}</span>
        </div>

        <ul className="mt-6 flex-1 space-y-3">
          {plan.features?.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <FiCheck className={isFeatured ? "text-white" : "text-[#52d67f]"} />
              <span className={isFeatured ? "text-white/90" : "text-[#6f7a92]"}>{feature}</span>
            </li>
          ))}
        </ul>

        <button className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ${isFeatured ? 'bg-white text-[#6f3df4]' : primaryButton}`}>
          {plan.cta}
        </button>
      </div>
    </article>
  );
};

const Pricing = ({ pricingPlans }) => {
  return (
    <section className="py-20" id="pricing">
      <div className={sectionWidth}>
        <div className={`${sectionHeadingWrap} max-w-[44rem] mx-auto text-center`}>
          <h2 className={sectionTitle}>Simple, Transparent Pricing</h2>
          <p className={sectionCopy}>Choose the plan that fits your needs.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPlans?.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;