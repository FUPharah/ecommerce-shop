import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

export const revalidate = 0;


const HomePage = async () => {
  const products = await getProducts({
    isFeatured: true
  });
  const billboard = await getBillboard("cb873d23-2969-4e9d-ad12-56b69f68c20d");
  return (
    <div>
      <Container>
        <div className="space-y-10 pb-10">
          <Billboard data={billboard}/>
        <div className="flex flex-col gap-y-7 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products}/>
        </div>
        </div>
      </Container>
    </div>
  );
}

export default HomePage;
