import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <div className="flex justify-center flex-col gap-10 items-center h-[75vh] fixed w-[100vw]">
      <h1 className="text-2xl font-bold">The Page Requested Is Not Found</h1>
      <Button className="text-xl font-semibold">
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  );
};

export default notFound;
