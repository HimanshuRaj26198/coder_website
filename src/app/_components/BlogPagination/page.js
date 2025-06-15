import Link from "next/link";

export default function BlogPagination({ totalPages, currentPage, category = "" }) {
    const maxVisiblePages = 5; // How many pages to display in the middle
    const pages = [];
    console.log(category, "Category in pagination");

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = startPage + maxVisiblePages - 1;

    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        pages.push(
            <Link
                key={i}
                href={category == "" ? `/blogs?page=${i}` : `/blogs/${category}?page=${i}`}
                className={`px-3 py-1 text-sm rounded border ${currentPage === i
                    ? "bg-blue-600 text-white font-semibold"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
            >
                {i}
            </Link>
        );
    }


    return (
        <div className="flex justify-center mt-6 space-x-1">
            {/* Previous button */}
            {currentPage > 1 && (
                <Link
                    href={category == "" ? `/blogs?page=${currentPage - 1}` : `/blogs/${category}?page=${currentPage - 1}`}
                    className="px-3 py-1 text-sm rounded border bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                    Prev
                </Link>
            )}

            {/* First page + ellipsis if needed */}
            {startPage > 1 && (
                <>
                    <Link
                        href={category == "" ? `/blogs?page=1` : `/blogs/${category}?page=1`}
                        className="px-3 py-1 text-sm rounded border bg-gray-100 text-gray-700 hover:bg-gray-200"
                    >
                        1
                    </Link>
                    {startPage > 2 && <span className="px-2">...</span>}
                </>
            )}

            {/* Page numbers */}
            {pages}

            {/* Last page + ellipsis if needed */}
            {endPage < totalPages && (
                <>
                    {endPage < totalPages - 1 && <span className="px-2">...</span>}
                    <Link
                        href={category == "" ? `/blogs?page=${totalPages}` : `/blogs/${category}?page=${totalPages}`}
                        className="px-3 py-1 text-sm rounded border bg-gray-100 text-gray-700 hover:bg-gray-200"
                    >
                        {totalPages}
                    </Link>
                </>
            )}

            {/* Next button */}
            {currentPage < totalPages && (
                <Link
                    href={category == "" ? `/blogs?page=${currentPage + 1}` : `/blogs/${category}?page=${currentPage + 1}`}
                    className="px-3 py-1 text-sm rounded border bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                    Next
                </Link>
            )}
        </div>
    );
}
