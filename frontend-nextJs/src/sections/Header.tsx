// ! Importante para usar funcionalidad en NextJs
"use client"

import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {

  // TODO ----> Para usar funcionalidad en NextJs usar el useClient al inicio
  const FnClickbtn = () => {
    console.log('Click');
  }

  return (
    <header className="sticky top-0 backdrop-blur-sm z-50">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p className="cursor-pointer" onClick={FnClickbtn}>Get Started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Logo saas" height={40} width={40} />
            <MenuIcon className="h-5 w-5 md:hidden cursor-pointer" />
            <nav className="hidden md:flex gap-6 text-black/70 items-center font-bold">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex justify-center tracking-tight">Get for free</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
