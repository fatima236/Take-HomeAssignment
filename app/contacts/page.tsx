import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "../Layout/Navbar";

import Pagination from "./components/Pagination";
import ContactsTable from "./components/ContactsTable";
import getContacts from "./utils/getContacts";


type SearchParams = { page?: string };

export default async function ContactsPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const resolvedSearchParams = await searchParams;
  const currentPage = Number(resolvedSearchParams.page) || 1;

const { allContacts, currentContacts, totalPages, contactsPerPage } =
  getContacts(currentPage);


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar />

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Annuaire des Contacts</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Découvrez et connectez-vous avec nos collaborateurs.
            {allContacts.length > 0 && ` ${allContacts.length} contacts disponibles.`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">{allContacts.length}</div>
            <div className="text-slate-600">Contacts total</div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 text-center">
            <div className="text-2xl font-bold text-green-600 mb-2">{currentContacts.length}</div>
            <div className="text-slate-600">Sur cette page</div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 text-center">
            <div className="text-2xl font-bold text-purple-600 mb-2">{totalPages}</div>
            <div className="text-slate-600">Pages</div>
          </div>
        </div>

        <ContactsTable currentContacts={currentContacts} />

        <Pagination currentPage={currentPage} totalPages={totalPages} />

        {allContacts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl border border-slate-200">
            <div className="w-20 h-20 mx-auto mb-6 bg-slate-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Aucun contact trouvé</h3>
            <p className="text-slate-600 max-w-md mx-auto">
              Aucun contact n&apos;a été trouvé dans le fichier CSV. Vérifiez que le fichier est correctement formaté.
            </p>
          </div>
        )}

        <div className="text-center text-sm text-slate-500 lg:hidden">
          Affichage de {Math.min(currentContacts.length, contactsPerPage)} contacts sur {allContacts.length}
        </div>
      </main>
    </div>
  );
}
