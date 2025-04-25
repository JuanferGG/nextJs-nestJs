import WorkSlider from "@/components/WorkSlider";
import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";

export default function index() {
  return (
    <div className="h-full w-[80vw] m-auto py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[35vw] flex-col lg:text-left lg:ml-20 mb-4">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My Work<span className="text-red-500">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ab
              provident fugiat possimus expedita officia qui ullam iusto optio
              veniam!
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", .8)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
          {/* slider */}
        </div>
      </div>
      <Bulb />
    </div>
  );
}
