export type Listing = {
    id: number;
    image: string;
    badge: string;
    photoCount: number;
    category: string;
    meta: string;
    title: string;
    price: number;
    priceNote?: string;
    description: string;
    location: string;
    postedAt: string;
    phone: string;

    categoryId: string;
    breedId: string;
    regionId: string;
    views: number;
};