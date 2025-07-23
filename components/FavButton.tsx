import { Heart } from "lucide-react";
import Link from "next/link";

const FavButton = () => {
  return (
    <Link href={"/favButton"} className="group relative">
      <Heart className="w-5 h-5 hover:text-shop_dark_green hoverEffect" />
      <span className="bg-shop_dark_green text-white text-xs absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full flex items-center justify-center">
        0
      </span>
    </Link>
  );
};

export default FavButton;
