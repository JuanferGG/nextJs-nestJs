import Image from "next/image";

export default function Bulb() {
  return (
    <div
      className="absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge 
                animate-pulse duration-75 z-10 w-[200px] xl:w-[260px] "
    >
      <Image
        src={"/bulb.png"}
        alt="bulb"
        width={260}
        height={260}
        className="w-full h-full"
      />
    </div>
  );
}
