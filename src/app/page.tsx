import Link from "next/link";
import {
  SignIn,
  SignInButton,
  SignUp,
  SignUpButton,
  UserButton,
  auth,
  currentUser,
} from "@clerk/nextjs";

export default function Home() {
  const { userId } = auth();

  return (
    <main>
      <h1>LEARNING JOURNAL</h1>
      {userId ? (
        <>
          <Link href="/dashboard">Dashboard</Link>
          <UserButton />
        </>
      ) : (
        <>
          <SignInButton />
          <SignUpButton />
        </>
      )}
    </main>
  );
}
