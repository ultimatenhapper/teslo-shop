import { Footer, TopMenu } from "@/components";
import Sidebar from "@/components/ui/sidebar/Sidebar";
import React from "react";

const ShopLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen">
      <TopMenu />
      <Sidebar />
      <div className="px-0 sm:px-10">{children}</div>
      <Footer />
    </main>
  );
};

export default ShopLayout;
