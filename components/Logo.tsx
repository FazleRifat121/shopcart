import { cn } from "@/lib/utils";
import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href={"/"}
      className={cn(
        "text-2xl text-shop_btn_dark_green hover:text-shop_light_green font-black tracking-wider uppercase hoverEffect group font-sans",
        className
      )}
    >
      <h2>
        ShopCar
        <span className="text-shop_light_green hoverEffect group-hover:text-shop_dark_green">
          t
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
