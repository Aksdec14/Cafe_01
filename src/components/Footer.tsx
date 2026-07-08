import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaFacebook, FaInstagram, FaTwitter, FaArrowRight } from "react-icons/fa";

const Footer = () => {
    const { orders } = useCart();
    return (
        <footer className="relative bg-white">
            {/* Wave divider */}
            <div className="relative h-16 overflow-hidden sm:h-20">
                <svg
                    viewBox="0 0 1440 100"
                    preserveAspectRatio="none"
                    className="absolute bottom-0 h-full w-full text-espresso"
                >
                    <path
                        d="M0,40 C240,100 480,0 720,30 C960,60 1200,100 1440,20 L1440,100 L0,100 Z"
                        fill="currentColor"
                    />
                </svg>
            </div>

            <div className="bg-espresso px-6 pt-4 pb-10 text-cream md:px-12 lg:px-20">
                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:grid-cols-[1fr_1fr_1fr_1.4fr]">
                        {/* Shop / Menu */}
                        <div>
                            <h3 className="font-display text-lg text-cream">Menu</h3>
                            <ul className="mt-4 flex flex-col gap-3 font-body text-sm text-cream/70">
                                <li><a href="#" className="hover:text-caramel">Cold Brews</a></li>
                                <li><a href="#" className="hover:text-caramel">Espresso Drinks</a></li>
                                <li><a href="#" className="hover:text-caramel">Pastries</a></li>
                                <li><a href="#" className="hover:text-caramel">Beans & Merch</a></li>
                            </ul>
                        </div>

                        {/* Learn */}
                        <div>
                            <h3 className="font-display text-lg text-cream">Learn</h3>
                            <ul className="mt-4 flex flex-col gap-3 font-body text-sm text-cream/70">
                                <li><a href="#" className="hover:text-caramel">Brew Guides</a></li>
                                <li><a href="#" className="hover:text-caramel">Origins & Sourcing</a></li>
                                <li><a href="#" className="hover:text-caramel">Caffeine Content</a></li>
                            </ul>
                        </div>

                        {/* More from Brûlée */}
                        <div>
                            <h3 className="font-display text-lg text-cream">More from Brûlée</h3>
                            <ul className="mt-4 flex flex-col gap-3 font-body text-sm text-cream/70">
                                <li><a href="#" className="hover:text-caramel">Our Story</a></li>
                                <li><a href="#" className="hover:text-caramel">Locations</a></li>
                                <li><a href="#" className="hover:text-caramel">Careers</a></li>
                                <li><a href="#" className="hover:text-caramel">Contact Us</a></li>
                                <li><Link to="/admin" className="hover:text-caramel">Admin</Link></li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="col-span-2 sm:col-span-4 lg:col-span-1">
                            <h3 className="font-display text-lg text-cream">Let&apos;s Stay Connected</h3>
                            <p className="mt-3 max-w-xs font-body text-sm text-cream/70">
                                Join our list and get 10% off your next order.
                            </p>

                            <div className="mt-5 flex max-w-sm items-center gap-2 rounded-full border border-cream/20 bg-cream/5 p-1.5 pl-5">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full bg-transparent font-body text-sm text-cream placeholder:text-cream/40 focus:outline-none"
                                />
                                <button
                                    aria-label="Subscribe"
                                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-caramel text-espresso transition hover:bg-caramel/90"
                                >
                                    <FaArrowRight size={16} />
                                </button>
                            </div>

                            <div className="mt-8">
                                <p className="font-body text-sm font-semibold text-cream">Follow us</p>
                                <div className="mt-3 flex gap-3">
                                    <a
                                        href="#"
                                        aria-label="Pinterest"
                                        className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 text-cream transition hover:bg-caramel hover:text-espresso"
                                    >
                                        <FaInstagram size={16} />
                                    </a>
                                    <a
                                        href="#"
                                        aria-label="Facebook"
                                        className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 text-cream transition hover:bg-caramel hover:text-espresso"
                                    >
                                        <FaFacebook size={16} />
                                    </a>
                                    <a
                                        href="#"
                                        aria-label="Twitter"
                                        className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 text-cream transition hover:bg-caramel hover:text-espresso"
                                    >
                                        <FaTwitter size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-6 font-body text-xs text-cream/50 sm:flex-row">
                        <p>© {new Date().getFullYear()} Brûlée Coffee Co.</p>
                        <div className="flex flex-wrap items-center justify-center gap-x-2">
                            <a href="#" className="hover:text-caramel">Terms of Service</a>
                            <span>|</span>
                            <a href="#" className="hover:text-caramel">Privacy Policy</a>
                            <span>|</span>
                            <a href="#" className="hover:text-caramel">Refund Policy</a>
                            <span>|</span>
                            <a href="#" className="hover:text-caramel">Accessibility</a>
                            <span>|</span>
                            <span className="text-caramel">Orders: {orders.length}</span>
                        </div>
                    </div>
                </div >
            </div >
        </footer >
    );
};

export default Footer;