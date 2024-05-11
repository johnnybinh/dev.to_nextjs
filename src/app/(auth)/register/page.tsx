import React from "react";
import { auth, signIn, signOut } from "../../../../auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const page = async () => {
  const session = await auth();

  return (
    <div className="flex fixed gap-4 justify-center items-center w-[100vw] h-[80vh]">
      {session === null ? (
        <div>
          <form
            action={async () => {
              "use server";
              await signIn("github");
            }}
          >
            <button type="submit">Sign IN</button>
          </form>
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col gap-2">
          <Card>
            <CardHeader>
              <Avatar>
                <AvatarImage src={session.user?.image}></AvatarImage>
              </Avatar>
            </CardHeader>
            <CardContent>
              <CardTitle>{session.user?.name}</CardTitle>
            </CardContent>
          </Card>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button type="submit">Sign Out</Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default page;
