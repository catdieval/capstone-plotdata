import { useSession, signIn, signOut } from "next-auth/react";
import Button from "../Button";

export default function SingInForm() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in as {session.user.email}
        <Button onClick={() => signOut()}>Sign out</Button>
      </>
    );
  } else {
    return (
      <>
        Not signed in
        <Button onClick={() => signIn()}>Sign in</Button>
      </>
    );
  }
}
