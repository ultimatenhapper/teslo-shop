import { ProductGrid } from "@/components";
import Title from "@/components/ui/title/Title";
import { initialData } from "@/seed/seed";
import { ValidCategories } from "@/interfaces";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    id: ValidCategories;
  };
}

const CategoryPage = ({ params }: Props) => {
  const { id } = params;
  const products = initialData.products.filter(
    (product) => product.gender === id
  );

  const labels: Record<ValidCategories, string> = {
    men: "para Hombres",
    women: "para Mujeres",
    kid: "para Niños",
    unisex: "para todos",
  };

  // if (id === "kids") {
  //   notFound();
  // }

  return (
    <div>
      <Title
        title={`Artículos de ${(labels as any)[id]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />
      <ProductGrid products={products} />
    </div>
  );
};

export default CategoryPage;
