"use client"

import { Tab } from "@headlessui/react";
import Image from "next/image";
import { Image as ImageType } from "@/types";
import GalleryTab from "./gallery-tab";

interface GalleryProps {
  images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({
  images
}) => {
  return (
  <Tab.Group as="div" className="flex flex-col-reverse">
    <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
      <Tab.List className="grid grid-cols-4 gap-6">
        {images.map((image) => (
          <GalleryTab
            key={image.id}
            image={image} />
            ))}
      </Tab.List>
    </div>
    <Tab.Panels className="aspect-square w-full sm:rounded-lg overflow-hidden">
      {images?.map((image) => (
        <Tab.Panel key={image.id} className="aspect-square relative h-full w-full sm:rounded-lg
        overflow-hidden sm:ring-1 sm:ring-black sm:ring-opacity-5">
      <Image
        src={image.url}
        alt="Product image"
        className="object-cover object-center rounded-lg"
        fill
      />
      </Tab.Panel>
      ))}
    </Tab.Panels>
  </Tab.Group>
  );
}

export default Gallery;
