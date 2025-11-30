import { ParsedContact } from "../utils/contacts";

type Props = {
  contact: ParsedContact;
};

export default function ContactInfo({ contact }: Props) {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-slate-900 flex items-center">
            Informations Professionnelles
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">
                Titre du poste
              </label>
              <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900">
                {contact.title || <span className="text-slate-400 italic">Non spécifié</span>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">
                Département
              </label>
              <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900">
                {contact.department || <span className="text-slate-400 italic">Non spécifié</span>}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-slate-900 flex items-center">
            Coordonnées
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">
                Adresse email
              </label>
              <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3">
                {contact.email ? (
                  <a href={`mailto:${contact.email}`} className="text-blue-600 hover:text-blue-800 font-medium break-all">
                    {contact.email}
                  </a>
                ) : (
                  <span className="text-slate-400 italic">Non spécifié</span>
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">
                Téléphone
              </label>
              <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
                {contact.phone ? (
                  <a href={`tel:${contact.phone}`} className="text-slate-900 hover:text-blue-600 font-medium">
                    {contact.phone}
                  </a>
                ) : (
                  <span className="text-slate-400 italic">Non spécifié</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
