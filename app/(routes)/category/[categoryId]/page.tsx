import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import getColours from "@/actions/get-colours";
import getCategory from "@/actions/get-category";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import Filter from "./components/filter"
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "./components/mobile-filters";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  },
  searchParams: {
    colourId: string;
    sizeId: string;
  }
};

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colourId: searchParams.colourId,
    sizeId: searchParams.sizeId
  });

  const sizes = await getSizes();
  const colours = await getColours();
  const category = await getCategory(params.categoryId);

  return (
    <div>
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colours={colours} />
              <div className="hidden lg:block">
                <Filter valueKey= "sizeId" name="Sizes" data={sizes} />
                <Filter valueKey= "colourId" name="Colours" data={colours} />
              </div>
              <div className="mt-6 lg:col-span-4 lg:mt-0">
                {products.length === 0 && <NoResults />}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {products.map((item) => (
                    <ProductCard key={item.id} data={item} />
                  ))}
                </div>
              </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CategoryPage;
