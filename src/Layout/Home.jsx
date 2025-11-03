import React from "react";
import Navbar from "../Componont/Navbar";
import ImageCarousel from "../Componont/ImageCarousel";
import { MoviGallary } from "../Componont/MoviGallary";
import { Toaster } from "react-hot-toast";
import Slider from "../Componont/Slider";
import MovieMustGallary from "../Componont/MovieMustGallary";
import Footer from "../Componont/Footer";

export const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <ImageCarousel></ImageCarousel>

      <main>
        <Slider/>
        <MoviGallary />
        <MovieMustGallary/>
        <Toaster position="top-right"></Toaster>
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  );
};
