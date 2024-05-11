import React from "react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";
import { auth, signOut } from "../../auth";

import { Avatar, AvatarImage } from "./ui/avatar";

const NavBar = async () => {
  const sessions = await auth();
  return (
    <div className="flex items-center justify-between p-5 px-10 border-b-2">
      <div className="flex justify-center items-center gap-10">
        <Link href="/">
          <h1>Logo</h1>
        </Link>
        <Input
          className="border-gray-400 size-12 w-[20rem]"
          type="text"
          placeholder="text"
        ></Input>
      </div>
      <div className="flex gap-10">
        {sessions?.user ? (
          <div className="flex gap-2">
            <Avatar>
              <AvatarImage src={sessions.user.image}></AvatarImage>
            </Avatar>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <Button type="submit">Sign Out</Button>
            </form>
          </div>
        ) : (
          <div>
            <Button variant={"ghost"}>
              <Link href="/register">Login</Link>
            </Button>
            <Button
              className="hover:underline hover:text-white hover:bg-purple-800"
              variant={"outline"}
            >
              <Link href="/register">Create Account</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
