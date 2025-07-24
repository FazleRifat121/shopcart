"use client";
import { AlignLeft } from "lucide-react";
import SideBarMenu from "./SideBarMenu";
import { useState } from "react";

const MobileMenu = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  return (
    <>
      <button>
        <AlignLeft
          className="hover:text-darkColor hoverEffect md:hidden md:gap-0"
          onClick={() => setSideMenuOpen(!sideMenuOpen)}
        />
      </button>
      <div className="md:hidden">
        <SideBarMenu
          isOpen={sideMenuOpen}
          onClose={() => setSideMenuOpen(false)}
        />
      </div>
    </>
  );
};

export default MobileMenu;
