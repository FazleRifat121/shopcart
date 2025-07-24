import { FC } from "react";
import Logo from "./Logo";
import { X } from "lucide-react";
import Link from "next/link";
import { navData } from "@/constants/data";
import { usePathname } from "next/navigation";
import SocialMedia from "./SocialMedia";
import { useOutSideClick } from "@/hooks";

interface SideBarMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideBarMenu: FC<SideBarMenuProps> = ({ isOpen, onClose }) => {
  const pathName = usePathname();
  const sideBarRef = useOutSideClick<HTMLDivElement>(onClose);
  return (
    <div
      className={`fixed left-0 inset-y-0 h-screen z-50 w-full bg-black/50 shadow-xl ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } hoverEffect text-left text-white/80`}
    >
      <div
        ref={sideBarRef}
        className="min-w-72 max-w-96 bg-black h-screen p-10 border-r border-r-shop_light_green flex flex-col gap-6"
      >
        <div className="flex items-center justify-between gap-5">
          <Logo className="text-white" spanClass="group-hover:text-white" />
          <button>
            <X
              onClick={onClose}
              className="hover:text-shop_light_green hoverEffect"
            />
          </button>
        </div>
        <div className="flex flex-col space-y-3.5 tracking-wider font-semibold">
          {navData.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className={`hover:text-shop_light_green hoverEffect group relative ${
                pathName === item?.href && "text-shop_light_green"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <SocialMedia />
      </div>
    </div>
  );
};

export default SideBarMenu;
