"use client";

import { useState } from "react";
import Image from "next/image";

export default function Photo() {
  const [photo, setPhoto] = useState<File | null>(null);

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedPhoto = event.target.files?.[0] || null;
    setPhoto(selectedPhoto);
  };

  const handleRemovePhoto = () => {
    setPhoto(null);
  };

  return (
    <>
      <label htmlFor="photo" className="block mb-2 font-medium">
        Photo
      </label>
      <input
        type="file"
        id="photo"
        className="border border-gray-300 rounded-md p-2 w-full"
        onChange={handlePhotoChange}
      />
      {photo && (
        <div>
          <Image
            src={URL.createObjectURL(photo)}
            alt="Preview"
            width="500"
            height="500"
          />
          <button onClick={handleRemovePhoto}>Remove Photo</button>
        </div>
      )}
    </>
  );
}
