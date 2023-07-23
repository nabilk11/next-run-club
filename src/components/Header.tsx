import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="sticky top-0 w-full left-0 bg-blue-300 flex items-center justify-between p-4 border-b border-solid border-white">
      <h1 className="text-3xl sm:text-6xl">Next Run Club</h1>
      <Image
        className="cursor-pointer duration-300 hover:opacity-40"
        src="/pfPic.png"
        alt="profile picture"
        width={60}
        height={60}
      />
    </div>
  );
}
