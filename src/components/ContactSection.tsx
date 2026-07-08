import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const partySizes = ["1-2", "3-4", "5-6", "7+"];
const occasions = ["Just Coffee", "Date", "Celebration", "Work Meeting"];

const ContactSection = () => {
    const [partySize, setPartySize] = useState("1-2");
    const [occasion, setOccasion] = useState("Just Coffee");

    return (
        <section className="bg-cream px-6 py-16 sm:py-20 md:px-12 md:py-24 lg:px-20">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-10">
                {/* Left content */}
                <div>
                    <span className="inline-block rounded-full border border-espresso/15 bg-white px-4 py-1.5 font-body text-xs uppercase tracking-widest text-espresso/70">
                        Book a Table
                    </span>

                    <h2 className="mt-6 font-display text-4xl leading-[1.05] text-espresso sm:text-5xl">
                        Book Your <br />
                        <span className="italic text-caramel">Table</span>
                    </h2>

                    <p className="mt-6 max-w-sm font-body text-base leading-relaxed text-espresso/70">
                        Tell us what you&apos;re after — a quiet corner to work, a table
                        for two, or a celebration to fuss over — and we&apos;ll set
                        something special for your visit.
                    </p>

                    <div className="mt-10 flex items-center gap-3">
                        <div className="flex -space-x-3">
                            <img
                                src="https://randomuser.me/api/portraits/women/68.jpg"
                                alt=""
                                className="h-9 w-9 rounded-full border-2 border-cream object-cover"
                            />
                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt=""
                                className="h-9 w-9 rounded-full border-2 border-cream object-cover"
                            />
                            <img
                                src="https://randomuser.me/api/portraits/women/45.jpg"
                                alt=""
                                className="h-9 w-9 rounded-full border-2 border-cream object-cover"
                            />
                            <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-cream bg-espresso font-body text-[10px] font-semibold text-cream">
                                +9k
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-0.5 text-caramel">
                                {"★★★★★".split("").map((s, i) => (
                                    <span key={i} className="text-xs">{s}</span>
                                ))}
                            </div>
                            <p className="font-body text-xs text-espresso/60">
                                Trusted by 12k+ regulars
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right form */}
                <div className="rounded-[28px] bg-white p-6 shadow-sm sm:p-8">
                    <div className="border-b border-espresso/10 pb-4">
                        <input
                            type="text"
                            placeholder="Name *"
                            className="w-full bg-transparent font-body text-sm text-espresso placeholder:text-espresso/40 focus:outline-none"
                        />
                    </div>
                    <div className="border-b border-espresso/10 py-4">
                        <input
                            type="email"
                            placeholder="Email *"
                            className="w-full bg-transparent font-body text-sm text-espresso placeholder:text-espresso/40 focus:outline-none"
                        />
                    </div>

                    <div className="py-5">
                        <p className="font-body text-sm font-semibold text-espresso">
                            What&apos;s the occasion?
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {occasions.map((o) => (
                                <button
                                    key={o}
                                    type="button"
                                    onClick={() => setOccasion(o)}
                                    className={`flex items-center gap-2 rounded-full border px-4 py-2 font-body text-xs transition ${occasion === o
                                            ? "border-espresso bg-espresso text-cream"
                                            : "border-espresso/15 text-espresso/70 hover:border-espresso/30"
                                        }`}
                                >
                                    <span
                                        className={`h-2 w-2 rounded-full ${occasion === o ? "bg-cream" : "bg-espresso/20"
                                            }`}
                                    />
                                    {o}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="py-5">
                        <p className="font-body text-sm font-semibold text-espresso">
                            How many are joining?
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {partySizes.map((p) => (
                                <button
                                    key={p}
                                    type="button"
                                    onClick={() => setPartySize(p)}
                                    className={`flex items-center gap-2 rounded-full border px-4 py-2 font-body text-xs transition ${partySize === p
                                            ? "border-espresso bg-espresso text-cream"
                                            : "border-espresso/15 text-espresso/70 hover:border-espresso/30"
                                        }`}
                                >
                                    <span
                                        className={`h-2 w-2 rounded-full ${partySize === p ? "bg-cream" : "bg-espresso/20"
                                            }`}
                                    />
                                    {p}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="border-t border-espresso/10 pt-5">
                        <textarea
                            placeholder="Tell us what special we can do for your visit... *"
                            rows={3}
                            className="w-full resize-none bg-transparent font-body text-sm text-espresso placeholder:text-espresso/40 focus:outline-none"
                        />
                    </div>

                    <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-espresso py-4 font-body text-sm uppercase tracking-widest text-cream shadow-lg shadow-espresso/20 transition-transform hover:-translate-y-0.5">
                        Book a Table
                        <ArrowUpRight size={16} />
                    </button>

                    <p className="mt-4 text-center font-body text-xs text-espresso/50">
                        By submitting, you agree to our{" "}
                        <a href="#terms" className="font-semibold text-espresso underline">
                            terms &amp; conditions
                        </a>
                        .
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;