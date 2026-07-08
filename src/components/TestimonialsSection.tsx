interface Testimonial {
    name: string;
    role: string;
    quote: string;
    rating: number;
    avatar: string;
}

const testimonials: Testimonial[] = [
    {
        name: "Maria Alvarez",
        role: "Regular, Since 2019",
        quote:
            "The cold brew here ruined every other coffee shop for me. Eighteen hours actually makes a difference — you can taste it.",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        name: "Daniel Cho",
        role: "Local Roaster",
        quote:
            "As someone in the trade, I'm picky. Their single-origin lineup is genuinely one of the best in the city.",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Priya Nair",
        role: "Weekend Regular",
        quote:
            "Came for the latte art, stayed for the atmosphere. My Saturday mornings aren't the same without this place.",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
        name: "Owen Fischer",
        role: "Remote Worker",
        quote:
            "I've practically made this my second office. Great wifi, better coffee, and they remember my order.",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    },
];

const Star = () => (
    <svg viewBox="0 0 20 20" className="h-4 w-4 fill-caramel">
        <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6z" />
    </svg>
);

const TestimonialsSection = () => {
    return (
        <section className="bg-white px-6 py-20 sm:py-24 md:px-12 lg:px-20">
            <div className="mx-auto max-w-9xl text-center">
                <p className="font-body text-xs uppercase tracking-[0.3em] text-espresso/50">
                    What They&apos;re Sipping On
                </p>

                <h2 className="mt-3 font-display text-3xl text-espresso sm:text-4xl md:text-5xl">
                    Our Regulars <span className="italic text-caramel">Rave</span>
                </h2>

                <div className="mx-auto mt-4 h-[3px] w-14 bg-caramel" />

                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                    {testimonials.map((t, i) => (
                        <div
                            key={t.name}
                            className={`relative text-left ${i % 2 === 1 ? "lg:mt-10" : ""
                                }`}
                        >
                            {/* Avatar */}
                            <div className="relative z-10 mb-[-28px] ml-4 flex items-center gap-3">
                                <img
                                    src={t.avatar}
                                    alt={t.name}
                                    className="h-14 w-14 rounded-full border-4 border-white object-cover shadow-md"
                                />
                                <div>
                                    <p className="font-body text-sm font-bold uppercase tracking-wide text-espresso">
                                        {t.name}
                                    </p>
                                    <p className="font-body text-xs uppercase tracking-widest text-espresso/50">
                                        {t.role}
                                    </p>
                                </div>
                            </div>

                            {/* Card */}
                            <div className="rounded-2xl bg-cream px-6 pb-6 pt-10">
                                <span className="font-display text-4xl leading-none text-caramel">
                                    &ldquo;
                                </span>

                                <p className="mt-2 font-body text-sm leading-relaxed text-espresso/80">
                                    {t.quote}
                                </p>

                                <div className="mt-5 flex gap-1">
                                    {Array.from({ length: t.rating }).map((_, idx) => (
                                        <Star key={idx} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;