import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <SignUp 
        redirectUrl="/dashboard"
        appearance={{
          elements: {
            rootBox: "mx-auto w-full max-w-md",
            card: "bg-white shadow-xl rounded-2xl p-8 border border-gray-200",
            headerTitle: "text-2xl font-bold text-gray-900",
            headerSubtitle: "text-gray-600",
            socialButtonsBlock: "space-y-3",
            formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white",
            footerActionLink: "text-blue-600 hover:text-blue-800"
          }
        }}
      />
    </div>
  );
}