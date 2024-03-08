import Link from "next/link";
import { SignInButton, SignUpButton, UserButton, auth } from "@clerk/nextjs";

export default function Home() {
  const { userId } = auth();

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">LEARNING JOURNAL</h1>
      {userId ? (
        <div className="flex flex-col items-center">
          <Link href="/dashboard" className="text-blue-500 underline mb-4">
            Dashboard
          </Link>
          <UserButton />
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <SignInButton />
          <SignUpButton />
        </div>
      )}
    </main>
  );
}
