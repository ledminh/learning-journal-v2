"use client";

import OtherLinks from "./OtherLinks";
import React from "react";
import Photo from "./Photo";
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();

  const onSave = () => {
    router.push("/dashboard");
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <Photo />
      </div>
      <div>
        <label htmlFor="displayName" className="block mb-2 font-medium">
          Display Name
        </label>
        <input
          type="text"
          id="displayName"
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
      <div>
        <label htmlFor="job" className="block mb-2 font-medium">
          Job
        </label>
        <input
          type="text"
          id="job"
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
      <div>
        <label htmlFor="company" className="block mb-2 font-medium">
          Company
        </label>
        <input
          type="text"
          id="company"
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
      <div>
        <label htmlFor="linkedin" className="block mb-2 font-medium">
          Linkedin
        </label>
        <input
          type="text"
          id="linkedin"
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
      <div>
        <label htmlFor="github" className="block mb-2 font-medium">
          Github
        </label>
        <input
          type="text"
          id="github"
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
      <div className="col-span-2">
        <OtherLinks />
      </div>
      <div className="col-span-2">
        <label htmlFor="bio" className="block mb-2 font-medium">
          Bio
        </label>
        <textarea
          id="bio"
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
      <div className="col-span-2">
        <button
          type="button"
          className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md"
          onClick={onSave}
        >
          Save
        </button>
      </div>
    </div>
  );
}
