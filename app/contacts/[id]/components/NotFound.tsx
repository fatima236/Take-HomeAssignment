import Link from "next/link";

type Props = { id: string };

export default function NotFound({ id }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-red-200 p-8 text-center">
      <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-red-800 mb-3">Contact introuvable</h2>
      <p className="text-red-600 mb-6 text-lg">
        Le contact avec l&apos;ID <span className="font-mono bg-red-50 px-2 py-1 rounded">{id}</span> n&apos;existe pas.
      </p>
      <Link href="/contacts" className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors">
        Retour aux contacts
      </Link>
    </div>
  );
}
