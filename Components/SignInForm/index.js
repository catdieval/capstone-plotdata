import { useSession, signIn, signOut } from "next-auth/react";
import Button from "../Button";

export default function SingInForm() {
  const { data: session } = useSession();

  return <Button></Button>;
}
