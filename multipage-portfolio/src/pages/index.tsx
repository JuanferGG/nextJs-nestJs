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
        <div className="text-center flex flex-col justify-center xl:items-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="h1"
          >
            Transforming Ideas <br />
            Into <span className="text-red-500">Digital Reality</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-2 xl:mb-5 xl:text-center"
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
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div>image</div>
    </div>
  );
}
