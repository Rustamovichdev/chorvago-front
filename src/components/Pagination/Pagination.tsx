import { getPageNumbers } from "./getPageNumbers";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

const baseBtn =
    "flex h-9 min-w-9 items-center justify-center rounded-lg px-2 text-sm transition";

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const pages = getPageNumbers(currentPage, totalPages);

    return (
        <nav aria-label="Sahifalar" className="flex items-center gap-1.5">
            <button
                type="button"
                aria-label="Oldingi sahifa"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className={`${baseBtn} border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40`}
            >
                ‹
            </button>

            {pages.map((page, index) =>
                page === "..." ? (
                    <span key={`dots-${index}`} className="px-1 text-gray-400">
                        ...
                    </span>
                ) : (
                    <button
                        key={page}
                        type="button"
                        onClick={() => onPageChange(page)}
                        aria-current={page === currentPage ? "page" : undefined}
                        className={`${baseBtn} ${
                            page === currentPage
                                ? "bg-[#166534] font-semibold text-white"
                                : "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                        }`}
                    >
                        {page}
                    </button>
                )
            )}

            <button
                type="button"
                aria-label="Keyingi sahifa"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className={`${baseBtn} border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40`}
            >
                ›
            </button>
        </nav>
    );
}

export default Pagination;