Link;
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Links = (items: any) => {
  return (
    <div>
      <Link href={items.url}>
        <Button
          className=" w-auto mx-auto hover:underline text-lg"
          variant={"ghost"}
        >
          {items.title}
        </Button>
      </Link>
    </div>
  );
};

export default Links;
