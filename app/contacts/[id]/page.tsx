import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import Navbar from '../../Layout/Navbar';
import { getContactById, getUserDailyLimit, incrementUserDailyLimit } from "./utils/contacts";
import ContactCard from "./components/ContactCard";
import ContactInfo from "./components/ContactInfo";
import LimitReached from "./components/LimitReached";
import NotFound from "./components/NotFound";

type Props = { params: Promise<{ id: string }> };

export default async function ContactDetailPage({ params }: Props) {
  const { id } = await params;
  const { userId } = await auth();
  if (!userId) redirect('/sign-in');

  const todayLimit = getUserDailyLimit(userId);
  const limitReached = todayLimit >= 50;

  let contact = null;
  if (!limitReached) {
    contact = getContactById(id);
    if (contact) incrementUserDailyLimit(userId);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar />
      <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">

        {limitReached ? (
          <LimitReached />
        ) : contact ? (
          <>
            <ContactCard contact={contact} />
            <ContactInfo contact={contact} />
            <div className="mt-8 pt-6 border-t border-slate-200 flex justify-between items-center">
              <p className="text-sm text-slate-500">
                Consultations aujourd&apos;hui: <span className="font-semibold text-slate-700 ml-1">{todayLimit + 1}/50</span>
              </p>
              <Link href="/contacts" className="inline-flex items-center px-5 py-2.5 bg-slate-600 text-white font-medium rounded-lg hover:bg-slate-700 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Retour aux contacts
              </Link>
            </div>
          </>
        ) : (
          <NotFound id={id} />
        )}
      </main>
    </div>
  );
}
