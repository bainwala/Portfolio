import Link from "next/link";
import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import LogoImg from "@logos/Logo.png";
import Image from "next/image";

function Logo() {
  return (
    <Link href={"/"} prefetch={false} className="overflow-hidden">
      <div className="flex items-center w-72 h-14">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <Image priority src={"/Logo.png"} alt="logo" width={92} height={92} />
        </AspectRatio>
      </div>
    </Link>
  );
}

export default Logo;
