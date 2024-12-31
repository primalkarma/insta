import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const session = await getUser();

  return (
    <div className="p-10 flex gap-5">
      {session ? (
        <LogoutLink><Button>Logout</Button></LogoutLink>
      ) : (
        <div>
          <LoginLink><Button>Login</Button></LoginLink>
          <RegisterLink><Button>Register</Button></RegisterLink>
        </div>
      )}
    </div>
  );
}
