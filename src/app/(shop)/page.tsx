import { ProductGrid } from "@/components";
import Sidebar from "@/components/ui/sidebar/Sidebar";
import { Title } from "@/components";
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function Home() {
  return (
    <>
      <Title title="Tienda" subtitle="Todos los productos" />
      <ProductGrid products={products} />
    </>
  );
}
