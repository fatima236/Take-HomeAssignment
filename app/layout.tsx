import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';

export const metadata = {
  title: 'Dashboard - Agences & Contacts',
  description: 'Application de gestion des agences et contacts',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="fr">
        <body className="bg-gray-50">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}