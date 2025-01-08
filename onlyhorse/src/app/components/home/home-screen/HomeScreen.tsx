
import BaseLayout from "@/components/ui/BaseLayout";
import { Button } from "@/components/ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import React from "react";
import UserProfile from "./UserProfile";
import Posts from "./Posts";

const HomeScreen = () => {
  return (
    <BaseLayout >
      <UserProfile/>
      <Posts /> 
    </BaseLayout>
  );
};

export default HomeScreen;
