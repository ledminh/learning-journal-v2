import GoalItem from "./GoalItem";

interface Props {
  userId: string;
}

export default function GoalList({ userId }: Props) {
  // Use userId to get user's goals from the database

  return (
    <ul className="list-disc pl-4">
      <li>
        <GoalItem />
      </li>
      <li>
        <GoalItem />
      </li>
      <li>
        <GoalItem />
      </li>
      <li>
        <GoalItem />
      </li>
    </ul>
  );
}
