import React, { useEffect, useState } from "react";
import { CategoriesNavbar } from "./CategoriesNavbar";
import toast from "react-hot-toast";

export const MoviGallary = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLodiang] = useState(true);
  const [selectCategory,  setSelctCategory] = useState("All")
  const [showAll, setShowAll] =useState (false)

  useEffect(() => {
    fetch("/public/movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((error) => {
        console.log(error);
        toast.error("Failed to mpvie Data!!!");
      })
      .finally(() => setLodiang(false));
  }, []);

  const categories = ["All", ...new Set(movies.map((m) => m.category))];
  const filterMovis =selectCategory === "All"? movies : movies.filter(m => m.category === selectCategory)
  const visibleMovies = showAll ? filterMovis : filterMovis.slice(0,8);
 

  return (
    <div className="w-11/12 mx-auto py-16">
        <h1 className="text-lg lg:text-xl">RECOMMENDED FOR YOU</h1>
      <CategoriesNavbar 
      categories={categories}
      selectCategory ={selectCategory}
      setSelctCategory ={ setSelctCategory}
      >

      </CategoriesNavbar>
    </div>
  );
};
