import { ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import AboutSection from "../components/AboutSection";
import Card from "../components/Cards";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TestimonialsSection from "../components/TestimonialsSection";
import CartDrawer from "../components/Cart";

const products = [
  {
    id: "1",
    tag: "Best Seller",
    title: "Caramel Macchiato",
    description:
      "Rich espresso layered with steamed milk, vanilla syrup, and buttery caramel drizzle.",
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800",
    price: "$5.99",
    numericPrice: 5.99,
  },
  {
    id: "2",
    tag: "Hot Favorite",
    title: "Cappuccino",
    description:
      "Bold espresso topped with velvety steamed milk and a thick layer of creamy foam.",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800",
    price: "$4.99",
    numericPrice: 4.99,
  },
  {
    id: "3",
    tag: "Cold Brew",
    title: "Iced Vanilla Latte",
    description:
      "Smooth espresso blended with chilled milk, vanilla syrup, and served over ice.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
    price: "$5.49",
    numericPrice: 5.49,
  },
  {
    id: "4",
    tag: "Premium",
    title: "Mocha Frappe",
    description:
      "Creamy chocolate coffee blended with ice and topped with whipped cream.",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800",
    price: "$6.49",
    numericPrice: 6.49,
  },
];

const Home = () => {
  const { addItem, totalItems, setCartOpen } = useCart();

  return (
    <>
      <Navbar />

      <div className="relative flex w-full flex-col overflow-hidden bg-white pt-24 pb-12 sm:pt-28 sm:pb-16 md:flex-row md:items-center md:pt-32 md:pb-20">
        <div className="relative z-10 flex w-full flex-col justify-center px-5 py-8 text-left sm:px-8 sm:py-10 md:w-[42%] md:px-12 lg:px-20">
          <h1 className="font-display text-4xl leading-[1.1] text-espresso sm:text-4xl md:text-5xl lg:text-5xl">
            Crafted <span></span>
            <span className="italic text-caramel">Cold</span>, <br />
            Brewed Bold.
          </h1>

          <p className="mt-5 max-w-md font-body text-base leading-relaxed text-espresso/70 sm:mt-6 md:text-lg">
            Single-origin beans, slow-poured over 18 hours, finished with a
            splash of cream. This is coffee as an experience, not a habit.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-start gap-4 sm:mt-10 sm:gap-5">
            <a
              href="#order"
              className="rounded-full bg-espresso px-6 py-3.5 font-body text-sm uppercase tracking-widest text-cream shadow-lg shadow-espresso/20 transition-transform hover:-translate-y-0.5 sm:px-8 sm:py-4"
            >
              Order Your Cup
            </a>
            <a
              href="#menu"
              className="font-body text-sm uppercase tracking-widest text-espresso underline decoration-caramel decoration-2 underline-offset-8"
            >
              View Menu
            </a>
          </div>

          <div className="mt-10 flex justify-start gap-8 border-t border-espresso/10 pt-6 sm:mt-14 sm:gap-10">
            <div>
              <p className="font-display text-3xl text-espresso">40+</p>
              <p className="font-body text-xs uppercase tracking-widest text-espresso/60">
                Signature Blends
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-espresso">12k</p>
              <p className="font-body text-xs uppercase tracking-widest text-espresso/60">
                Happy Sippers
              </p>
            </div>
          </div>
        </div>

        <div className="relative hidden w-full items-center justify-center px-4 pr-8 md:flex md:w-[58%] md:pr-12 lg:pr-16">
          <video
            className="h-auto max-h-[85vh] w-full scale-110 object-contain"
            src="/Espresso.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>

      <AboutSection />

      <div className="bg-white p-4 pt-10 sm:p-6 sm:pt-14 md:px-8 md:pt-16">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((p) => (
            <Card
              key={p.id}
              tag={p.tag}
              title={p.title}
              description={p.description}
              image={p.image}
              price={p.price}
              onAddToCart={() =>
                addItem({
                  id: p.id,
                  title: p.title,
                  price: p.numericPrice,
                  image: p.image,
                })
              }
            />
          ))}
        </div>
      </div>

      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <CartDrawer />

      <button
        onClick={() => setCartOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-espresso text-cream shadow-xl transition-transform hover:scale-105 active:scale-95"
      >
        <ShoppingBag size={22} />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-caramel text-[11px] font-bold text-cream shadow-lg">
            {totalItems}
          </span>
        )}
      </button>
    </>
  );
};

export default Home;
