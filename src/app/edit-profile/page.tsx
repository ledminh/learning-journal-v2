import Form from "@/ui/profile-form";

export default function EditProfilePage() {
  // Retrieve userId, check if user hasn't set up a profile yet,
  // if so, redirect to create profile page
  // import { auth } from '@clerk/nextjs';
  // const { userId } : { userId: string | null } = auth();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
      <Form />
    </div>
  );
}
