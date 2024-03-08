type Props = {
  params: {
    username: string;
  };
};
export default function UserProfile({ params: { username } }: Props) {
  return (
    <main>
      <h1>USER PROFILE</h1>
      <p>Username: {username}</p>
    </main>
  );
}
