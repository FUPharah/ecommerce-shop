import { Product } from "@/types";
import Currency from "./ui/currency";
import Button from "./ui/button1";
import { ShoppingCart } from "lucide-react";

interface InfoProps {
  data: Product;
};

const Info: React.FC<InfoProps> = ({
  data
}) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">
        {data.name}
      </h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl font-bold text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col items-center gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="text-lg font-bold text-gray-900">Size:</h3>
          <div className="font-medium">
            {data?.size?.value}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="text-lg font-bold text-gray-900">Colour:</h3>
          <div className="h-6 w-6 rounded-full border border-gray-600"
          style={{ backgroundColor: data?.colour?.value}}/>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2">
          Add to cart
          <ShoppingCart size={24} className="ml-2" />
        </Button>
      </div>
    </div>
  );
}

export default Info;
