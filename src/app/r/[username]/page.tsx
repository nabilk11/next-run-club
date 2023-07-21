import { useRouter } from "next/router";

export default function ProfilePage() {
  const router = useRouter();
  const username = router.query.username;
  return <div>Hello: {username}</div>;
}
