import Image from "next/image";
import { Image as ImageType } from "@/types";
import { Tab } from "@headlessui/react";
import { cn } from "@/lib/utils";

interface GalleryTabProps {
  image: ImageType;
}

const GalleryTab: React.FC<GalleryTabProps> = ({
  image
}) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center
    justify-center rounded-md bg-white focus:outline-none focus-visible:ring-2
    focus-visible:ring-offset-2 focus-visible:ring-black">
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0
          overflow-hidden rounded-md">
            <Image fill src={image.url} alt="Product image"
            className="object-cover object-center" />
          </span>
          <span className={cn(`absolute inset-0 rounded-md ring-2 ring-offset-2`,
          selected ? "ring-black" : "ring-transparent")} />
        </div>
      )}
    </Tab>
  );
}

export default GalleryTab;
