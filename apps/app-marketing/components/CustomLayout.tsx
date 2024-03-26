"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";
import { usePathname } from "next/navigation";
import TimelineFooter from "./TimeLineFooter";

const CustomLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname: string = usePathname();

  return (
    <div>
      <NavBar />
      {children}
      {pathname === "/feed" ? <TimelineFooter /> : <Footer />}
    </div>
  );
};

export default CustomLayout;
