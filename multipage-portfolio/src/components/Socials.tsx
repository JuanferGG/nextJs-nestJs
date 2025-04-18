import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiDribbbleLine,
  RiPinterestLine,
} from "react-icons/ri";

export default function Socials() {
  return (
    <div className="flex items-center gap-x-5 text-2xl">
      <Link
        href={"#"}
        className="hover:text-red-500 transition-all duration-200"
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href={"#"}
        className="hover:text-red-500 transition-all duration-200"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"#"}
        className="hover:text-red-500 transition-all duration-200"
      >
        <RiFacebookBoxLine />
      </Link>
      <Link
        href={"#"}
        className="hover:text-red-500 transition-all duration-200"
      >
        <RiDribbbleLine />
      </Link>
      <Link
        href={"#"}
        className="hover:text-red-500 transition-all duration-200"
      >
        <RiPinterestLine />
      </Link>
    </div>
  );
}
