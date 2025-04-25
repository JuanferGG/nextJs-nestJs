import TestimonialSlider from "@/components/TestimonialSlider";

import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";

export default function index() {
  return (
    <div className=" w-full text-center py-32">
      <div className="container mx-auto h-full flex-col justify-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-2 xl:mb-0"
        >
          What clients <span className="text-red-500/60">say.</span>
        </motion.h2>
        {/* Slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
}
