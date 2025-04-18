import Image from "next/image";

import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "@/components/ProjectsBtn";
import Avatar from "@/components/Avatar";

import { motion } from "framer-motion";

import { fadeIn } from "@/components/variants";

export default function Home() {
  return (
    <div className="bg-gray-900/85 h-full">
      <div className="w-full h-full bg-gradient-to-r from-gray-800 via-gray-900 to-black/10">
        <div className="text-center flex flex-col justify-center xl:items-center xl:pt-40 xl:text-left h-full container mx-auto xl:pr-30">
          <motion.h1
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="h1 z-20"
          >
            Transforming Ideas <br />
            Into <span className="text-red-500">Digital Reality</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-2 xl:mb-5 xl:text-center xl:ml-10 z-20"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            aperiam repudiandae minima amet odit nisi quas, velit nesciunt ad
            aut vero voluptatem blanditiis dolorem sed suscipit officiis
            expedita doloremque quasi?
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="hidden xl:flex z-20"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-cover xl:bg-right relative h-full">
          {/* Image bg */}
          <Image
            src="/bg-explosion.png"
            alt="background explosion"
            fill
            priority
            className="mix-blend-color-dodge opacity-50"
          />
          {/* particles bg */}
          <div>
            <ParticlesContainer />
          </div>
          {/* image avatar */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full max-w-[550px] max-h-[550px] absolute -bottom-15 lg:-bottom-11 lg:right-[8%]"
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
