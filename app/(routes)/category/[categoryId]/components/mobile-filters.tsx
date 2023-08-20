"use client"
import React, { useState } from "react";
import { Colour, Size } from "@/types";
import Button1 from "@/components/ui/button1";
import { PlusSquare, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import IconButton from "@/components/ui/icon-button";
import Filter from "./filter";

interface MobileFiltersProps {
  sizes: Size[];
  colours: Colour[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({
  sizes,
  colours
}) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <>
      <Button1 onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <PlusSquare size={20} />
      </Button1>
      <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
        <div className="fixed inset-0 bg-black bg-opacity-25"/>
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto h-full w-full max-w-xs flex-col
          overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15}/>} onClick={onClose} />
            </div>
            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colourId" name="Colours" data={colours} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}

export default MobileFilters;
