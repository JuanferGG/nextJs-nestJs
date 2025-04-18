import Image from "next/image";

export default function Avatar() {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/avatar.png"}
        alt="avatar"
        width={550}
        height={580}
        className="translate-z-0 w-full h-full "
      />
    </div>
  );
}
