"use client";
import { navData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";

const NavMenu = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-7 capitalize font-semibold text-lightColor ">
      {navData.map((item) => (
        <Link
          href={item.href}
          key={item.title}
          className={`hover:text-shop_light_green hoverEffect group relative ${
            pathName === item?.href && "text-shop_light_green"
          }`}
        >
          {item.title}
          <span
            className={`absolute bg-shop_light_green -bottom-0.5 h-0.5 left-1/2 w-0 group-hover:w-1/2 hoverEffect group-hover:left-0 ${
              pathName === item?.href && "w-1/2"
            }`}
          ></span>
          <span
            className={`absolute bg-shop_light_green -bottom-0.5 h-0.5 right-1/2 w-0 group-hover:w-1/2 hoverEffect group-hover:right-0 ${
              pathName === item?.href && "w-1/2"
            }`}
          ></span>
        </Link>
      ))}
    </div>
  );
};

export default NavMenu;
