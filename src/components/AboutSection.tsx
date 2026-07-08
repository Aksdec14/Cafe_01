import { Expand, Sparkles, ArrowUpRight } from "lucide-react";

const AboutSection = () => {
    return (
        <section className="bg-espresso px-6 py-16 sm:py-20 md:px-12 lg:px-20">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
                {/* Image */}
                <div className="relative">
                    <div className="relative overflow-hidden rounded-[28px]">
                        <img
                            src="/image.png"
                            alt="Inside the Brûlée café"
                            className="h-[320px] w-full object-cover sm:h-[380px] md:h-[420px]"
                        />

                        {/* Visit site pill */}
                        <a
                            href="#locations"
                            className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-cream/90 px-5 py-3 font-body text-sm font-semibold text-espresso backdrop-blur-md transition hover:bg-cream"
                        >
                            <ArrowUpRight size={16} />
                            Visit café
                        </a>
                    </div>

                    {/* Floating action buttons */}
                    <button
                        aria-label="Expand image"
                        className="absolute top-5 right-16 flex h-11 w-11 items-center justify-center rounded-full bg-cream/90 text-espresso shadow-lg backdrop-blur-md transition hover:bg-cream md:-right-5 md:top-8"
                    >
                        <Expand size={16} />
                    </button>
                    <button
                        aria-label="Explore more"
                        className="absolute top-5 right-2 flex h-11 w-11 items-center justify-center rounded-full bg-caramel text-cream shadow-lg backdrop-blur-md transition hover:bg-caramel/90 md:-right-5 md:top-24"
                    >
                        <Sparkles size={16} />
                    </button>
                </div>

                {/* Content */}
                <div className="text-cream">
                    <h2 className="font-display text-3xl leading-[1.1] sm:text-4xl">
                        About Our <br />
                        Roastery <span className="italic text-caramel">& Café</span>
                    </h2>

                    <p className="mt-5 max-w-md font-body text-sm leading-relaxed text-cream/70 sm:text-base">
                        We&apos;ve been pulling shots and pouring cold brew for our
                        neighborhood since 2018. Every batch is dialed in by hand, and we
                        lean on local, seasonal ingredients to keep quality consistent.
                    </p>

                    <ul className="mt-6 flex flex-col gap-3 font-body text-sm text-cream/80 sm:text-base">
                        <li className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-caramel" />
                            Small-batch roasting, on site
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-caramel" />
                            Direct-trade, single-origin beans
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-caramel" />
                            Warm service, unhurried mornings
                        </li>
                    </ul>

                    <a
                        href="#order"
                        className="mt-8 inline-block rounded-full bg-cream px-8 py-4 font-body text-sm uppercase tracking-widest text-espresso shadow-lg transition-transform hover:-translate-y-0.5"
                    >
                        Order online
                    </a>
                </div>
            </div >
        </section >
    );
};

export default AboutSection;