import Link from "next/link";
import { ParsedContact } from "../utils/parseCSV";

export default function ContactsTable({
  currentContacts,
}: {
  currentContacts: ParsedContact[];
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-6">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Contact
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider hidden lg:table-cell">
                Poste
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider hidden md:table-cell">
                Département
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200">
            {currentContacts.map((contact) => (
              <tr
                key={contact.id}
                className="hover:bg-slate-50 transition-colors duration-150 group"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4">
                      {contact.first_name?.[0]}
                      {contact.last_name?.[0]}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {contact.first_name} {contact.last_name}
                      </div>
                      <div className="text-sm text-slate-500 lg:hidden">
                        {contact.title}
                      </div>
                      <div className="text-xs text-slate-400 md:hidden">
                        {contact.department}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 text-slate-700 hidden lg:table-cell">
                  {contact.title || <span className="text-slate-400 italic">Non spécifié</span>}
                </td>

                <td className="px-6 py-4 text-slate-700 hidden md:table-cell">
                  {contact.department || (
                    <span className="text-slate-400 italic">Non spécifié</span>
                  )}
                </td>

                <td className="px-6 py-4">
                  <Link
                    href={`/contacts/${contact.id}`}
                    className="inline-flex items-center px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all duration-200 shadow-sm hover:shadow"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>{" "}
                    Voir
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
