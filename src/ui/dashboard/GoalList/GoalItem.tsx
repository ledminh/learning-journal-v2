"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function GoalItem() {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const handleEditGoal = () => {
    const goalId = "goal-id"; // Replace with the actual goal ID
    router.push(`/dashboard/goal?action=edit&id=${goalId}`);
  };

  const handleViewGoal = () => {
    const goalId = "goal-id"; // Replace with the actual goal ID
    router.push(`/dashboard/goal?action=view&id=${goalId}`);
  };

  return (
    <div className="border rounded p-4">
      <h2 className="text-lg font-bold mb-2">Goal: This is the goal</h2>

      <button className="text-blue-500 underline mb-2" onClick={handleEditGoal}>
        Edit Goal
      </button>

      <button className="text-blue-500 underline" onClick={handleViewGoal}>
        View Goal
      </button>

      {isExpanded && (
        <ul className="list-disc pl-4">
          <li>Step 1</li>
          <li>Step 2</li>
          <li>Step 3</li>
        </ul>
      )}

      <button className="text-blue-500 underline" onClick={toggleExpansion}>
        Toggle Expansion
      </button>
    </div>
  );
}
