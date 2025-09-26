import React from "react";



const Icon = ({ image, url }) => {
  return (
      <button
      className="p-0 border-0 bg-transparent cursor-pointer hover:opacity-40 "
      onClick={() => window.open(url, "_blank")}
      
    >
      <img
        src={image}
        alt="logo"
        className="h-10 sm:h-12 md:h-14 lg:h-16"
      />
    </button>

  );
};

export default Icon;
