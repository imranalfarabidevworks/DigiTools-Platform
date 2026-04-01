import { useEffect, useMemo, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/navbar/navbar';
import Banner from './components/banner/banner';
import States from './components/stateSection/state';
import MainSection from './components/mainSection/mainSection';
import Steps from './components/stepSection/step';
import Pricing from './components/priceSection/pricing';
import ReadyToStart from './components/ReadySection/ReadyToStart';
import Footer from './components/footerSection/footer';


import bannerImg from './assets/banner.png';

function App() {
  const [catalog, setCatalog] = useState({
    products: [],
    steps: [],
    pricingPlans: [],
  });

  const [activeTab, setActiveTab] = useState('products');
  const [cartItems, setCartItems] = useState([]);
  const [addedItems, setAddedItems] = useState({});

  useEffect(() => {
    fetch('/siteData.json')
      .then((res) => res.json())
      .then((data) => setCatalog(data))
      .catch((err) => console.error('Data loading error:', err));
  }, []);

  const totalPrice = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + (item.price || 0), 0);
  }, [cartItems]);

  const handleAddToCart = (product) => {
    if (addedItems[product.id]) {
      toast.info('Item already in cart');
      return;
    }

    setCartItems([...cartItems, product]);
    setAddedItems({
      ...addedItems,
      [product.id]: true,
    });

    toast.success(`${product.name} added to cart!`);
  };

  const handleRemoveItem = (id, index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);

    const newAddedItems = { ...addedItems };
    delete newAddedItems[id];
    setAddedItems(newAddedItems);

    toast.error('Item removed from cart');
  };

  return (
    <div className="min-h-screen bg-[#fcfcff] font-sans text-slate-900">
      <Navbar
        cartCount={cartItems.length}
        onOpenCart={() => setActiveTab('cart')}
      />

      <main>
        <Banner heroAssets={{ bannerImage: bannerImg }} />

        <States />

        <MainSection
          activeTab={activeTab}
          cartItems={cartItems}
          products={catalog.products}
          totalPrice={totalPrice}
          addedItems={addedItems}
          onSetActiveTab={setActiveTab}
          onAddToCart={handleAddToCart}
          onRemoveItem={handleRemoveItem}
          onCheckout={() => toast.success('Proceeding to checkout...')}
        />

        <Steps steps={catalog.steps} />

        <Pricing pricingPlans={catalog.pricingPlans} />

        <ReadyToStart />
      </main>

      <Footer />

      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
}

export default App;





