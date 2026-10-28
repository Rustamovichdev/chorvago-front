export type Listing = {
    id: number;
    image: string;
    badge: string;          // "Vaksina qilingan"
    photoCount: number;     // 4
    category: string;       // "Mol va Sigir"
    meta: string;           // "2-qorin bolasi bilan" (tur yonidagi qisqa ma'lumot)
    title: string;
    price: number;          // 18500000
    priceNote?: string;     // "o'lchov bo'yicha" kabi qo'shimcha (ixtiyoriy)
    description: string;
    location: string;       // "Toshkent vil., Bo'stonliq"
    postedAt: string;       // "Bugun 11:30"
    phone: string;          // "+998 90 *** ** 67"
};