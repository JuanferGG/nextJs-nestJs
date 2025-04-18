import Image from "next/image";

import Link from "next/link";

import Socials from "./Socials";

export default function Header() {
  return (
    <header className="absolute z-30 w-full flex items-center px-[140px] xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* Logo */}
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              alt="logo"
              width={220}
              height={48}
              priority={true}
            />
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
}
