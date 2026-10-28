import type { Listing } from "../../listings.types";
import CardImage from "./CardImage";

type ListingCardProps = {
    listing: Listing;
};

function ListingCard({ listing }: ListingCardProps) {

    const formattedPrice = listing.price.toLocaleString("ru-RU");

    return (
        <article className="group overflow-hidden rounded-2xl border border-[#166534] bg-white transition hover:shadow-lg">
            <CardImage
                src={listing.image}
                alt={listing.title}
                badge={listing.badge}
                photoCount={listing.photoCount}
            />

            <div className="flex flex-col gap-2 p-4">
                <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">{listing.category}</span>
                    <span className="font-semibold text-[#166534]">
                        {listing.meta}
                    </span>
                </div>

                <h3 className="line-clamp-1 font-semibold text-[20px] text-gray-900">
                    {listing.title}
                </h3>

                <p className="text-lg font-bold text-[#166534]">
                    {formattedPrice} so'm
                    {listing.priceNote && (
                        <span className="ml-1 text-xs font-normal text-gray-500">
                            {listing.priceNote}
                        </span>
                    )}
                </p>

                <p className="line-clamp-2 text-xs text-gray-500">
                    {listing.description}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="line-clamp-1">{listing.location}</span>
                    <span className="shrink-0">{listing.postedAt}</span>
                </div>

                <button
                    type="button"
                    className="mt-1 w-full rounded-lg bg-[#166534] py-2.5 text-sm font-semibold text-white transition hover:bg-[#14532d] cursor-pointer"
                >
                    {listing.phone}
                </button>
            </div>
        </article>
    );
}

export default ListingCard;