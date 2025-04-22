import ServiceSlider from "@/components/ServiceSlider";
import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";

export default function index() {
  return (
    <div className="h-full bg-gray-800/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[35vw] flex-col lg:text-left lg:ml-20 mb-4">
            <h2 className="h2 xl:mt-8">
              My services<span className="text-red-500">.</span>
            </h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ab
              provident fugiat possimus expedita officia qui ullam iusto optio
              veniam!
            </p>
          </div>
          {/* slider */}
          <ServiceSlider />
        </div>
      </div>
      <Bulb />
    </div>
  );
}
