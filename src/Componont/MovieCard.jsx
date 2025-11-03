import React from "react";
import { IoStarHalfOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { FaHeartCircleCheck } from "react-icons/fa6";

const MovieCard = ({ movie }) => {
  return (
    <div className="font-montser transition-transform duration-300 hover:scale-105">
      <img
        src={movie.card_picture}
        alt={movie.title}
        className="h-60 mx-auto object-contain rounded-lg"
      />
      <div className="p-4 space-y-2">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold">{movie.title}</h3>

          <div className="flex items-center gap-2">
            <IoEye className="text-gray-500" />
            <FaHeartCircleCheck className="text-rose-700" />
          </div>
        </div>
        <p className="text-sm text-gray-400">{movie.released_date}</p>
        <div
          className="flex justify-between
        "
        >
          <p className="text-sm text-black font-extrabold bg-yellow-400 rounded px-2">
            {movie.platform}
          </p>
          <p className="text-sm text-gray-400 flex justify-center items-center gap-2">
            <IoStarHalfOutline className="text-yellow-400" />
            {movie.rating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
