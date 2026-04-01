const stats = [
  { value: '50K+', label: 'Active Users' },
  { value: '200+', label: 'Premium Tools' },
  { value: '4.9', label: 'Rating' },
];

const States = () => {
  return (
    <section className="bg-gradient-to-r from-[#5b2ef2] via-[#7f2fff] to-[#be16ff] text-white">
      <div className="mx-auto grid w-[min(1120px,calc(100%-1.5rem))] grid-cols-1 md:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center justify-center px-6 py-12 text-center ${
              // বর্ডার লজিক: লাস্ট আইটেম বাদে বাকিগুলোর নিচে (মোবাইলে) এবং ডানে (ডেস্কটপে) বর্ডার হবে
              index !== stats.length - 1 
                ? 'border-b border-white/20 md:border-b-0 md:border-r' 
                : ''
            }`}
          >
            <strong className="text-4xl font-extrabold tracking-[-0.05em] md:text-5xl">
              {stat.value}
            </strong>
            <span className="mt-3 text-lg font-medium text-white/85 md:text-xl">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default States;