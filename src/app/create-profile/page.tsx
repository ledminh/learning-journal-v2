import React from "react";
import Form from "@/ui/profile-form";

export default function CreateProfilePage() {
  // Retrieve userId, check if user has already set up a profile,
  // if so, redirect to edit profile page
  // import { auth } from '@clerk/nextjs';
  // const { userId } : { userId: string | null } = auth();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Profile</h1>
      <Form />
    </div>
  );
}
