import React from "react";
import { Navbar } from "../components/navbar/navbar";

interface IMainLayout {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: IMainLayout) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
