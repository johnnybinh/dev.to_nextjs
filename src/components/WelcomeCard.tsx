import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { auth } from "../../auth";
export const session = auth();
const WelcomeCard = () => {
  return (
    <div>
      <Card className="w-[18rem]">
        <CardHeader>
          <CardTitle>
            DEV Community is a community of 1,460,662 amazing developers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h1>
            We are a place where coders share, stay up-to-date and grow their
            careers.
          </h1>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button className="w-full" variant={"outline"}>
            <Link href="/register">Register</Link>
          </Button>
          <Button className="w-full" variant={"ghost"}>
            <Link href="/register">Login</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default WelcomeCard;
