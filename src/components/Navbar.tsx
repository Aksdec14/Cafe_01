import { useState } from "react";

const navLinks = ["Menu", "Our Story", "Locations", "Contact"];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="absolute top-0 left-0 z-50 w-full">
            <nav className="flex items-center justify-between px-6 py-6 md:px-12 md:py-8">
                {/* Logo */}
                <a href="#" className="font-display text-2xl tracking-widest text-espresso md:text-3xl">
                    BRÛLÉE<span className="text-caramel">.</span>
                </a>

                {/* Desktop links */}
                <ul className="hidden items-center gap-10 md:flex">
                    {navLinks.map((link) => (
                        <li key={link}>
                            <a
                                href="#"
                                className="group relative font-body text-sm uppercase tracking-[0.2em] text-espresso/80 transition-colors hover:text-espresso"
                            >
                                {link}
                                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-caramel transition-all duration-300 group-hover:w-full" />
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA desktop */}
                <a
                    href="#order"
                    className="hidden rounded-full border border-espresso/30 px-6 py-2.5 font-body text-sm uppercase tracking-widest text-espresso transition-all hover:border-espresso hover:bg-espresso hover:text-cream md:inline-block"
                >
                    Order Now
                </a>

                {/* Mobile toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="flex flex-col gap-1.5 md:hidden"
                    aria-label="Toggle menu"
                >
                    <span className={`h-[2px] w-7 bg-espresso transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
                    <span className={`h-[2px] w-7 bg-espresso transition-opacity ${open ? "opacity-0" : ""}`} />
                    <span className={`h-[2px] w-7 bg-espresso transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
                </button>
            </nav >

            {/* Mobile menu */}
            < div
                className={`overflow-hidden bg-cream transition-all duration-300 md:hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <ul className="flex flex-col items-center gap-6 py-8">
                    {navLinks.map((link) => (
                        <li key={link}>
                            <a href="#" className="font-body text-sm uppercase tracking-[0.2em] text-espresso">
                                {link}
                            </a>
                        </li>
                    ))}
                    <a
                        href="#order"
                        className="mt-2 rounded-full border border-espresso px-6 py-2.5 font-body text-sm uppercase tracking-widest text-espresso"
                    >
                        Order Now
                    </a>
                </ul >
            </div >
        </header >
    );
};

export default Navbar;