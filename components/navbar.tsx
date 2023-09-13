import Link from "next/link";
import Container from "./ui/container";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
import { ModeToggle } from "./ui/mode-toggle";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 h-16 items-center flex ">
          <Link href="/" className="ml-4 lg:ml-0 gap-x-2   ">
            <p className="font-bold text-xl mr-10">
              E-Commerce
            </p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
          <div className="ml-10">
            <ModeToggle />  
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
