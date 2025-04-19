import Image from "next/image";

export default function Circles() {
  return (
    <div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10]">
      <Image
        src={"/circles.png"}
        alt="img-circle"
        width={200}
        height={200}
        className="w-full h-full"
      />
    </div>
  );
}
