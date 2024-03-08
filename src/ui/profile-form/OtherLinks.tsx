"use client";

import { useState } from "react";

export default function OtherLinks() {
  const [links, setLinks] = useState<string[]>([]);

  const handleLinkChange = (index: number, value: string) => {
    const updatedLinks = [...links];
    updatedLinks[index] = value;
    setLinks(updatedLinks);
  };

  const handleAddLink = () => {
    setLinks([...links, ""]);
  };

  const handleRemoveLink = (index: number) => {
    const updatedLinks = [...links];
    updatedLinks.splice(index, 1);
    setLinks(updatedLinks);
  };

  return (
    <>
      <label htmlFor="otherLinks" className="block mb-2 font-medium">
        Other Links
      </label>
      {links.map((link, index) => (
        <div key={index} className="mb-2">
          <input
            type="text"
            value={link}
            onChange={(e) => handleLinkChange(index, e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          <button onClick={() => handleRemoveLink(index)}>Remove</button>
        </div>
      ))}
      <button onClick={handleAddLink}>Add Link</button>
    </>
  );
}
