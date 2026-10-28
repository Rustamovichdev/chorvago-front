import type { Listing } from "../listings.types";
import ListingCard from "./ListingCard/ListingCard";

type ListingGridProps = {
    listings: Listing[];
};

function ListingGrid({ listings }: ListingGridProps) {
    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {listings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
            ))}
        </div>
    );
}

export default ListingGrid;