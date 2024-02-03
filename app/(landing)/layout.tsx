import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import React from "react";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Header />
      <main className="mt-[80px] mb-5 px-2 md:px-0 max-w-[1240px] w-full mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
