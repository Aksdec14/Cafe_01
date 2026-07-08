import { Bookmark } from "lucide-react";

interface CardProps {
    title: string;
    description: string;
    image: string;
    tag?: string;
    price?: string;
    onAddToCart?: () => void;
}

const Card = ({
    title,
    description,
    image,
    tag,
    price,
    onAddToCart,
}: CardProps) => {
    return (
        <div className="group w-[320px] overflow-hidden rounded-[32px] border border-espresso/10 bg-cream shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Image */}
            <div className="relative h-[220px] overflow-hidden bg-espresso/5">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {tag && (
                    <span className="absolute top-4 left-4 rounded-full bg-cream px-4 py-1 font-body text-[11px] font-semibold uppercase tracking-widest text-caramel">
                        {tag}
                    </span>
                )}

                <button
                    aria-label="Save"
                    className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-cream text-espresso/60 transition hover:text-caramel"
                >
                    <Bookmark size={16} strokeWidth={1.75} />
                </button>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1 px-6 pt-5 pb-6">
                <h2 className="font-display text-2xl leading-snug text-espresso">
                    {title}
                </h2>

                <p className="line-clamp-2 font-body text-sm leading-relaxed text-espresso/70">
                    {description}
                </p>

                <div className="mt-5 flex items-center justify-between gap-4">
                    {price && (
                        <span className="font-display text-xl text-espresso">
                            {price}
                        </span>
                    )}

                    <button
                        onClick={onAddToCart}
                        className="rounded-full bg-espresso px-5 py-2.5 font-body text-xs font-semibold uppercase tracking-widest text-cream shadow-md shadow-espresso/20 transition-transform hover:-translate-y-0.5 active:scale-95"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;


