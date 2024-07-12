import { TopMenu } from "@/components";
import React from "react";

const ShopLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen">
      <TopMenu />
      <div className="px-0 sm:px-10">{children}</div>
    </main>
  );
};

export default ShopLayout;
