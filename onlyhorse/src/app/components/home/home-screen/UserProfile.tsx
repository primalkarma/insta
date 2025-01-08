import React from "react";
import CoverImage from "./CoverImage";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { admin, user } from "@/dummy_data";

const UserProfile = () => {
  
  return (
    <div className="flex flex-col">
      <CoverImage />
      <div className="flex flex-col p-4">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <Avatar className="h-20 w-20 border-2 -mt-10 ">
            <AvatarImage src={admin.image || "/user-placeholder.png"} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="flex ">
            {!user.isSubscribed && (
              <Button asChild className="rounded-full flex gap-10">
                <Link href={"/pricing"}>
                  <span className="uppercase font-semibold tracking-wide">
                    Subscribe
                  </span>
                </Link>
              </Button>
            )}
            {user.isSubscribed && (
              <Button
                asChild
                className="rounded-full flex gap-10"
                variant={"outline"}
              >
                <span className="uppercase font-semibold tracking-wide">
                  Subscribed
                </span>
              </Button>
            )}
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-lg font-semibold"> {admin.name}</p>
          <p className="text-sm mt-2 md:text-md">
            Discover daily tips to improve your skills and stay updated with the
            latest trends. Subscribe now to gain access to exclusive content and updates.
          </p>
        </div>
      </div>
      <div className="h-2 bg-muted w-full" aria-hidden/>
    </div>
  );
};

export default UserProfile;
