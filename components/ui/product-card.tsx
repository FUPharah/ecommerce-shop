"use client"
import { Product } from "@/types";
import Image from "next/image";

interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({
  data
}) => {
  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
        src={data?.images?.[0]?.url}
        fill
        alt="Image of product"
        className="aspect-square rounded-xl object-cover group-hover:opacity-75 transition-all duration-300"
        />
        <div className="opacity-0 group-hover:opacity-100">
          <div className="flex gap-x-6 justify-center">

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
