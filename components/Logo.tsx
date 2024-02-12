import LogoImage from "@logos/blue.png";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/" prefetch className="overflow-hidden">
      <div className="flex items-center w-72 h-14 mb-4">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <Image priority src={LogoImage} alt="logo" />
        </AspectRatio>
      </div>
    </Link>
  );
}

export default Logo;
