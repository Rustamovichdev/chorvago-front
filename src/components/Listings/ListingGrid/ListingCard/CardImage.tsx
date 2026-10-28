import { Heart } from "lucide-react";
import CardBadge from "./CardBadge";

type CardImageProps = {
    src: string;
    alt: string;
    badge: string;
    photoCount: number;
};

function CardImage({ src, alt, badge, photoCount }: CardImageProps) {
    return (
        <div className="relative aspect-[4/3] overflow-hidden">
            <img
                src={src}
                alt={alt}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />

            <div className="absolute left-3 top-3">
                <CardBadge text={badge} />
            </div>

            <button
                type="button"
                aria-label="Saqlash"
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90  transition hover:text-red-500 hover:bg-red-50 cursor-pointer"
            >
                 <Heart size={18} className="text-grey-500" />
            </button>

            <span className="absolute bottom-3 right-3 rounded-md bg-black/60 px-2 py-1 text-[11px] text-white">
                {photoCount} ta foto
            </span>
        </div>
    );
}

export default CardImage;