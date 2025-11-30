import { ParsedContact } from "../utils/contacts";

type Props = {
  contact: ParsedContact;
};

export default function ContactCard({ contact }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 px-8 py-8 text-white">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold mr-6 border-2 border-white/30">
              {contact.first_name?.[0]}
              {contact.last_name?.[0]}
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">
                {contact.first_name} {contact.last_name}
              </h1>
              <p className="text-blue-100 text-lg">{contact.title}</p>
            </div>
          </div>
          <div className="bg-white/10 rounded-lg px-4 py-2 text-sm backdrop-blur-sm">
            ID: {contact.id}
          </div>
        </div>
      </div>
    </div>
  );
}
