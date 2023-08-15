import { Billboard as BillboardType } from "@/types"

interface BillboardProps {
  data: BillboardType | null;
};

const Billboard: React.FC<BillboardProps> = ({
  data
}) => {

  if (!data) {
    return null
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div style={{ backgroundImage: `url(${data?.imageUrl})`}}
      className="rounded-xl relative aspect-square bg-cover
      md:aspect-[2.4/1] overflow-hidden"
      >
        <div className="gap-y-8 h-full w-full flex flex-col
        justify-center items-center text-center">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Billboard;
