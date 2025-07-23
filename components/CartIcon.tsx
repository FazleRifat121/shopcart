import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const CartIcon = () => {
  return (
    <Link href={"/cart"} className="group relative">
      <ShoppingBag className="w-5 h-5 hover:text-shop_dark_green hoverEffect " />
      <span className="absolute -top-1 -right-1 bg-shop_dark_green rounded-full w-3.5 h-3.5 text-white text-xs flex items-center justify-center">
        0
      </span>
    </Link>
  );
};

export default CartIcon;
