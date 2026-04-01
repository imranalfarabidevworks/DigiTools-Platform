import { FiCheck, FiShoppingCart } from 'react-icons/fi';

import {
  pillToggleWrap,
  primaryButton,
  sectionCopy,
  sectionHeadingWrap,
  sectionTitle,
  sectionWidth,
  surfaceCard,
  toggleButton,
} from '../uiStyle/uiStyle'; 

const tagStyles = {
  'best-seller': 'bg-[#fff0cc] text-[#d48806]',
  popular: 'bg-[#efe7ff] text-[#8e61ff]',
  new: 'bg-[#e7faec] text-[#2ab36b]',
};

const formatPeriod = (period) => {
  if (period === 'one-time') return '/One-Time';
  if (period === 'yearly') return '/Year';
  return '/Mo';
};

const ProductCard = ({ product, isAdded, onAddToCart }) => {
  return (
    <article className="animated-border-shell group h-full transition duration-300 ease-out hover:-translate-y-2">
      <div className={`${surfaceCard} animated-border-inner flex h-full flex-col p-5 transition duration-300 ease-out group-hover:shadow-[0_22px_48px_rgba(28,30,53,0.12)]`}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#f0ebfb] bg-white shadow-sm transition duration-300 group-hover:scale-110">
            <img
              src={product.iconSrc}
              alt={product.name}
              className="h-7 w-7 object-contain transition duration-300 group-hover:scale-110"
            />
          </div>
          <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${tagStyles[product.tagType] || 'bg-slate-100'}`}>
            {product.tag}
          </span>
        </div>

        <h3 className="mt-5 text-[1.7rem] font-bold tracking-[-0.04em] text-[#1d2438] transition duration-300 group-hover:text-[#6f3df4] md:text-[1.75rem]">
          {product.name}
        </h3>
        <p className="mt-3 text-md leading-6 text-[#8b95a9]">{product.description}</p>

        <div className="mt-4 flex items-end gap-1">
          <strong className="text-[2rem] font-extrabold tracking-[-0.05em] text-[#1d2438]">${product.price}</strong>
          <span className="pb-1 text-md text-[#8b95a9]">{formatPeriod(product.period)}</span>
        </div>

        <ul className="mt-4 flex-1 space-y-2.5">
          {product.features?.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-[#7c869d]">
              <FiCheck className="text-[#52d67f]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className={
            isAdded
              ? 'mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#22c55e] px-5 py-3 text-md font-semibold text-white shadow-[0_10px_24px_rgba(34,197,94,0.22)] transition duration-300'
              : `${primaryButton} mt-6 w-full group-hover:-translate-y-0.5`
          }
        >
          {isAdded ? 'Added' : 'Buy Now'}
        </button>
      </div>
    </article>
  );
};

const CartSection = ({ cartItems, totalPrice, onRemoveItem, onCheckout }) => {
  if (cartItems.length === 0) {
    return (
      <div className={`${surfaceCard} rounded-[1.5rem] px-4 py-12 text-center sm:px-6 sm:py-14`}>
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f2ebff] text-[#7a38f5]">
          <FiShoppingCart className="text-xl" />
        </div>
        <h3 className="mt-5 text-2xl font-bold tracking-[-0.03em] text-[#1d2438]">Your cart is empty</h3>
        <p className="mt-3 text-md text-[#8b95a9]">Click Cart any time to review the products you select.</p>
      </div>
    );
  }

  return (
    <div className={`${surfaceCard} rounded-[1.5rem] p-4 sm:p-6 md:p-8`}>
      <h3 className="text-[2rem] font-bold tracking-[-0.04em] text-[#1d2438]">Your Cart</h3>

      <div className="mt-6 space-y-4">
        {cartItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex min-h-[5.5rem] items-center gap-3 rounded-[1rem] bg-[#f8f8fd] px-3 py-4 sm:gap-4 sm:px-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#efebf8] bg-white">
              <img src={item.iconSrc} alt="" aria-hidden="true" className="h-7 w-7 object-contain" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-base font-semibold text-[#1d2438] sm:text-lg">{item.name}</p>
              <p className="mt-1 text-md text-[#8b95a9]">${item.price}</p>
            </div>
            <button
              type="button"
              onClick={() => onRemoveItem(item.id, index)}
              className="text-md font-semibold text-[#ff4a7b] hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 text-sm text-[#8b95a9] sm:text-md">
        <span>Total:</span>
        <strong className="text-[1.6rem] font-extrabold tracking-[-0.04em] text-[#1d2438] sm:text-[2rem]">${totalPrice}</strong>
      </div>

      <button
        type="button"
        onClick={onCheckout}
        className={`${primaryButton} mt-4 w-full`}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

const MainSection = ({
  activeTab,
  cartItems,
  products,
  totalPrice,
  addedItems,
  onSetActiveTab,
  onAddToCart,
  onRemoveItem,
  onCheckout,
}) => {
  return (
    <section className={`${sectionWidth} py-20 md:py-24`} id="products">
      <div className={`${sectionHeadingWrap} max-w-[42rem] mx-auto text-center`}>
        <h2 className={sectionTitle}>Premium Digital Tools</h2>
        <p className={`${sectionCopy} mx-auto max-w-[38rem]`}>
          Choose from our curated collection of premium digital products designed
          to boost your productivity and creativity.
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <div className={pillToggleWrap}>
          <button
            type="button"
            onClick={() => onSetActiveTab('products')}
            className={toggleButton(activeTab === 'products')}
          >
            Products
          </button>
          <button
            type="button"
            onClick={() => onSetActiveTab('cart')}
            className={toggleButton(activeTab === 'cart')}
          >
            Cart ({cartItems.length})
          </button>
        </div>
      </div>

      <div className="mt-12">
        {activeTab === 'products' ? (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {products?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isAdded={Boolean(addedItems[product.id])}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <CartSection
            cartItems={cartItems}
            totalPrice={totalPrice}
            onRemoveItem={onRemoveItem}
            onCheckout={onCheckout}
          />
        )}
      </div>
    </section>
  );
};

export default MainSection;