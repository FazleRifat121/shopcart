import Link from "next/link";
import { Title } from "./ui/text";
import Image from "next/image";
import { banner_1 } from "@/images";

const HomeBanner = () => {
  return (
    <div className="py-16 md:py-0 px-10 md:px-24 bg-shop_light_pink flex items-center justify-between">
      <div className="space-y-5">
        <Title>
          Grab up to 50% off on <br />
          Selected Headphone
        </Title>
        <Link
          href={"/shop"}
          className="bg-shop_btn_dark_green/90 text-white/90 px-5 py-2 rounded-md text-sm font-semibold hover:bg-shop_dark_green hover:text-white hoverEffect "
        >
          Buy now
        </Link>
      </div>
      <div>
        <Image
          src={banner_1}
          alt="banner_1"
          className="hidden md:inline-flex w-96"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
