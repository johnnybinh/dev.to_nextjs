import React from "react";
import Links from "./Links";

const NavLink = () => {
  const link = [
    { Title: "🏠 Home", links: "/" },
    { Title: "🎙️ Podcast", links: "/" },
    { Title: "🎥 Video", links: "/" },
    { Title: "💡 Help", links: "/" },
  ];
  return (
    <div className="w-full items-start px-5 flex flex-col">
      {link.map((link) => (
        <Links url={link.links} title={link.Title} key={link.Title}></Links>
      ))}
    </div>
  );
};

export default NavLink;
