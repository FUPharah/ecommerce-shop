"use client"

import React from "react";
import Button1 from "@/components/ui/button1";
import { cn } from "@/lib/utils";
import { Size, Colour } from "@/types";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import qs from "query-string";

interface FilterProps {
  data: (Size | Colour)[];
  name: string;
  valueKey: string;
}

const Filter: React.FC<FilterProps> = ({
  data,
  name,
  valueKey
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedValue = searchParams.get(valueKey);
  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());
    const query = {
      ...current,
      [valueKey]: id
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl({
      url: window.location.href,
      query
    }, { skipNull: true });

    router.push(url);
  }
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">
        {name}
      </h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button1 className={cn(`rounded-lg text-black text-sm p-2 bg-white border
          border-black`, selectedValue === filter.id && "bg-black text-white")}
            onClick={() => onClick(filter.id)}>
              {valueKey === 'sizeId' ? filter.value : filter.name}
            </Button1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filter;
