import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function DashBoard() {
  // Use auth from clerk to get the userId,
  //use userId to get user's display name to add to the Go to profile page Link

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">DASHBOARD</h1>
      <UserButton />
      <div className="flex flex-col space-y-4">
        <div className="border rounded p-4">
          <h2 className="text-lg font-bold mb-2">Profile:</h2>
          <ul className="list-disc pl-4">
            <li>
              <Link href="/edit-profile" className="text-blue-600 font-bold">
                Edit
              </Link>
            </li>
            <li>
              <Link href="u/ledminh" className="text-blue-600 font-bold">
                Go to profile page
              </Link>
            </li>
          </ul>
        </div>
        <div className="border rounded p-4">
          <h2 className="text-lg font-bold mb-2">Goals:</h2>
          <ul className="list-disc pl-4">
            <li>
              <Link
                href="/dashboard/goal?action=add"
                className="text-blue-600 font-bold"
              >
                Add goal
              </Link>
            </li>
            <li>List of goals</li>
            <li>Edit goal</li>
            <li>View goal</li>
          </ul>
        </div>
        <div className="border rounded p-4">
          <h2 className="text-lg font-bold mb-2">Entries:</h2>
          <ul className="list-disc pl-4">
            <li>Add entry</li>
            <li>List of entries</li>
            <li>Edit entry</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
