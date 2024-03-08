"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import AddGoal from "./AddGoal";

export default function Goal() {
  const searchParams = useSearchParams();
  const action = searchParams.get("action");

  switch (action) {
    case "add":
      return <AddGoal />;
    default:
      return <h1>GOAL</h1>;
  }
}
