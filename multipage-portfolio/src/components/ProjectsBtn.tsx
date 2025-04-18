import Image from "next/image";

import Link from "next/link";

import { HiArrowRight } from "react-icons/hi2";

export default function ProjectsBtn() {
  return (
    <div className="mx-auto xl:mx-0 z-20">
      <Link href={"/work"} className="group relative w-[185px] h-[185px] flex justify-center items-center ">
        <Image
          className="animate-spin [animation-duration:10s] w-full h-full max-w-[141px] max-h-[148px]"
          src={"/rounded-text.png"}
          width={141}
          height={148}
          alt="img-rounded-text"
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
}
