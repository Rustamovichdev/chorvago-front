import Pagination from "./Pagination";

type ListingsFooterProps = {
    currentPage: number;
    pageSize: number;
    totalItems: number;
    onPageChange: (page: number) => void;
};

function ListingsFooter({
    currentPage,
    pageSize,
    totalItems,
    onPageChange,
}: ListingsFooterProps) {
    const totalPages = Math.ceil(totalItems / pageSize);
    const start = (currentPage - 1) * pageSize + 1;
    const end = Math.min(currentPage * pageSize, totalItems);

    return (
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-500">
                Ko'rsatilmoqda{" "}
                <span className="font-semibold text-gray-900">
                    {start} - {end}
                </span>{" "}
                jami{" "}
                <span className="font-semibold text-gray-900">
                    {totalItems.toLocaleString("en-US")}
                </span>{" "}
                tadan
            </p>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
            />
        </div>
    );
}

export default ListingsFooter;