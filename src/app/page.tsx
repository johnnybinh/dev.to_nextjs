import NavLink from "@/components/NavLink/NavLink";
import { Button } from "@/components/ui/button";
import WelcomeCard from "@/components/WelcomeCard";

import React from "react";

WelcomeCard;

const page = () => {
  return (
    <div className="p-10 w-76 gap-2 flex flex-col">
      <div className="flex flex-col items-center gap-4 w-80">
        <WelcomeCard />
        <NavLink />
      </div>
    </div>
  );
};

export default page;
