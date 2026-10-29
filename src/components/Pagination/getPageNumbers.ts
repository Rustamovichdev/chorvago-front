export type PageItem = number | "...";

export function getPageNumbers(
    currentPage: number,
    totalPages: number
): PageItem[] {
    // Sahifalar kam bo'lsa, hammasini ko'rsatamiz
    if (totalPages <= 5) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Boshida: 1 2 3 ... 48
    if (currentPage <= 3) {
        return [1, 2, 3, "...", totalPages];
    }

    // Oxirida: 1 ... 46 47 48
    if (currentPage >= totalPages - 2) {
        return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    }

    // O'rtada: 1 ... 9 10 11 ... 48
    return [
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages,
    ];
}