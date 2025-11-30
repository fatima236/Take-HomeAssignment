import Link from "next/link";

type Props = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({ currentPage, totalPages }: Props) {
  const pages: number[] = [];

  for (let i = currentPage - 1; i <= currentPage + 1; i++) {
    if (i >= 1 && i <= totalPages) pages.push(i);
  }

  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <div className="flex items-center justify-center gap-3 mt-10">
      {/* Précédent */}
      <Link
        href={prevPage ? `?page=${prevPage}` : "#"}
        className={`px-4 py-2 rounded-full text-sm transition-all 
          ${prevPage
            ? "bg-white border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-400"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
      >
        ← Précédent
      </Link>

      {/* Pages */}
      <div className="flex gap-2">
        {pages.map((num) => (
          <Link
            key={num}
            href={`?page=${num}`}
            className={`
              w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-all
              ${num === currentPage
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-400"
              }
            `}
          >
            {num}
          </Link>
        ))}
      </div>

      {/* Suivant */}
      <Link
        href={nextPage ? `?page=${nextPage}` : "#"}
        className={`px-4 py-2 rounded-full text-sm transition-all
          ${nextPage
            ? "bg-white border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-400"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
      >
        Suivant →
      </Link>
    </div>
  );
}
