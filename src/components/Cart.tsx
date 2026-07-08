import { useState } from "react";
import { X, Minus, Plus, ShoppingBag, CheckCircle2, Clock } from "lucide-react";
import { useCart } from "../context/CartContext";

const CartDrawer = () => {
  const {
    items,
    cartOpen,
    setCartOpen,
    updateQuantity,
    removeItem,
    submitOrder,
    totalItems,
    totalPrice,
  } = useCart();
  const [seatNumber, setSeatNumber] = useState("");
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [confirmedSeat, setConfirmedSeat] = useState("");
  const [confirmedAddress, setConfirmedAddress] = useState("");

  const canSubmit = (seatNumber.trim() || address.trim()) && items.length > 0;

  const handleSubmit = () => {
    if (!canSubmit) return;
    submitOrder(seatNumber.trim(), address.trim(), items);
    setConfirmedSeat(seatNumber.trim());
    setConfirmedAddress(address.trim());
    setSeatNumber("");
    setAddress("");
    setSubmitted(true);
  };

  const handleClose = () => {
    setCartOpen(false);
    // Reset confirmation state after the drawer finishes closing
    setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <>
      {cartOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          onClick={handleClose}
        />
      )}

      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-cream shadow-2xl transition-transform duration-300 ${cartOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-espresso/10 px-4 py-4 sm:px-6 sm:py-5">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <ShoppingBag size={20} className="text-espresso" />
              <h2 className="font-display text-lg text-espresso sm:text-xl">
                {submitted ? "Order Status" : "Your Order"}
              </h2>
              {!submitted && totalItems > 0 && (
                <span className="rounded-full bg-espresso px-2.5 py-0.5 font-body text-xs text-cream">
                  {totalItems}
                </span>
              )}
            </div>
            <button
              onClick={handleClose}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-espresso/5 text-espresso transition hover:bg-espresso/10"
            >
              <X size={18} />
            </button>
          </div>

          {submitted ? (
            /* ----- Confirmation state ----- */
            <div className="flex flex-1 flex-col items-center justify-center px-6 py-10 text-center sm:px-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 sm:h-20 sm:w-20">
                <CheckCircle2 size={36} className="text-green-600 sm:h-10 sm:w-10" />
              </div>

              <h3 className="mt-6 font-display text-2xl text-espresso sm:text-3xl">
                Order Confirmed!
              </h3>

              <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-espresso/70 sm:text-base">
                Your order is on its way
                {confirmedSeat ? (
                  <> to <span className="font-semibold text-espresso">{confirmedSeat}</span></>
                ) : confirmedAddress ? (
                  <> to <span className="font-semibold text-espresso">{confirmedAddress}</span></>
                ) : (
                  ""
                )}
                . Sit back, we&apos;ve got it from here.
              </p>

              <div className="mt-6 flex items-center gap-2 rounded-full bg-espresso/5 px-5 py-2.5">
                <Clock size={15} className="text-caramel" />
                <span className="font-body text-xs uppercase tracking-widest text-espresso/70">
                  Ready in ~10–15 min
                </span>
              </div>

              <button
                onClick={handleClose}
                className="mt-10 w-full max-w-xs rounded-full bg-espresso py-3.5 font-body text-sm uppercase tracking-widest text-cream shadow-lg shadow-espresso/20 transition-all hover:-translate-y-0.5 sm:py-4"
              >
                Back to Menu
              </button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-6">
                {items.length === 0 ? (
                  <div className="mt-16 text-center sm:mt-20">
                    <ShoppingBag size={44} className="mx-auto text-espresso/20 sm:h-12 sm:w-12" />
                    <p className="mt-4 font-body text-sm text-espresso/50">
                      Your cart is empty
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3 sm:gap-4">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-3 rounded-2xl bg-white p-3 shadow-sm sm:gap-4 sm:p-4"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-16 w-16 shrink-0 rounded-xl object-cover sm:h-20 sm:w-20"
                        />
                        <div className="flex flex-1 flex-col justify-between min-w-0">
                          <div>
                            <div className="flex items-start justify-between gap-2">
                              <h3 className="font-display text-sm text-espresso sm:text-base">
                                {item.title}
                              </h3>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="shrink-0 text-espresso/30 hover:text-red-500"
                              >
                                <X size={14} />
                              </button>
                            </div>
                            <p className="mt-0.5 font-body text-sm font-semibold text-caramel">
                              ${item.price.toFixed(2)}
                            </p>
                          </div>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="flex h-7 w-7 items-center justify-center rounded-full border border-espresso/20 text-espresso/60 transition hover:border-espresso hover:text-espresso"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="w-5 text-center font-body text-sm font-semibold text-espresso sm:w-6">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="flex h-7 w-7 items-center justify-center rounded-full border border-espresso/20 text-espresso/60 transition hover:border-espresso hover:text-espresso"
                            >
                              <Plus size={12} />
                            </button>
                            <span className="ml-auto font-body text-sm font-semibold text-espresso">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {items.length > 0 && (
                <div className="border-t border-espresso/10 px-4 py-4 sm:px-6 sm:py-5">
                  <div className="mb-3">
                    <label className="font-body text-xs uppercase tracking-widest text-espresso/60">
                      Seat / Table Number
                    </label>
                    <input
                      type="text"
                      value={seatNumber}
                      onChange={(e) => setSeatNumber(e.target.value)}
                      placeholder="e.g. Table 5, Seat 12"
                      className="mt-1.5 w-full rounded-xl border border-espresso/15 bg-white px-4 py-3 font-body text-sm text-espresso placeholder:text-espresso/30 focus:border-espresso/30 focus:outline-none"
                    />
                  </div>

                  <div className="mb-1 flex items-center gap-3">
                    <span className="h-px flex-1 bg-espresso/10" />
                    <span className="font-body text-[10px] uppercase tracking-widest text-espresso/30">or</span>
                    <span className="h-px flex-1 bg-espresso/10" />
                  </div>

                  <div className="mb-4">
                    <label className="font-body text-xs uppercase tracking-widest text-espresso/60">
                      Delivery Address
                    </label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="e.g. 123 Main St, Apt 4B"
                      className="mt-1.5 w-full rounded-xl border border-espresso/15 bg-white px-4 py-3 font-body text-sm text-espresso placeholder:text-espresso/30 focus:border-espresso/30 focus:outline-none"
                    />
                  </div>

                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-body text-sm uppercase tracking-widest text-espresso/60">
                      Total
                    </span>
                    <span className="font-display text-xl text-espresso sm:text-2xl">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={!canSubmit}
                    className="w-full rounded-full bg-espresso py-3.5 font-body text-sm uppercase tracking-widest text-cream shadow-lg shadow-espresso/20 transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40 sm:py-4"
                  >
                    Submit Order
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;