import React from "react";
import Navbar from "../Componont/Navbar";
import ImageCarousel from "../Componont/ImageCarousel";
import { MoviGallary } from "../Componont/MoviGallary";
import { Toaster } from "react-hot-toast";

export const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <ImageCarousel></ImageCarousel>

      <main>
        <MoviGallary />
        <Toaster position="top-right"></Toaster>
      </main>
    </>
  );
};
