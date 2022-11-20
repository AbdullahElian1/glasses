import React from "react";
import MainLayout from "./Main";
import { SidenavProvider, GlassesProvider } from "../context";

const Layout = () => {
  return (
    <SidenavProvider>
      <GlassesProvider>
        <MainLayout />
      </GlassesProvider>
    </SidenavProvider>
  );
};

export default Layout;
