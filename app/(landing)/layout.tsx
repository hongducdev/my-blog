import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import React from "react";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
