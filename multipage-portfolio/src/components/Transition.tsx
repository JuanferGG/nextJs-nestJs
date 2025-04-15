import { motion } from "framer-motion";

const transitionVariant = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

export default function Transition() {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]"
        variants={transitionVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        transition= {{
            delay: .2,
            duration: .6,
            ease: 'easeInOut'
        }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#3b2d71]"
        variants={transitionVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        transition= {{
            delay: .4,
            duration: .6,
            ease: 'easeInOut'
        }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#2e2257]"
        variants={transitionVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        transition= {{
            delay: .6,
            duration: .6,
            ease: 'easeInOut'
        }}
      ></motion.div>
      
    </>
  );
}
