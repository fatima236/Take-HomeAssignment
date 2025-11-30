import Link from "next/link";

export default function LimitReached() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-orange-200 p-8 text-center">
      <div className="w-20 h-20 mx-auto mb-6 bg-orange-100 rounded-full flex items-center justify-center">
        <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-orange-800 mb-3">Limite quotidienne atteinte</h2>
      <p className="text-orange-600 mb-6 text-lg">
        Vous avez consulté 50 contacts aujourd&apos;hui. Revenez demain ou passez à la version premium.
      </p>
      <Link href="/contacts" className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors">
        Retour à la liste
      </Link>
    </div>
  );
}
