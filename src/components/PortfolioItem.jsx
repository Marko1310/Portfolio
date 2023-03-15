import React from "react";

const PortfolioItem = ({ title, imgUrl, stack, link }) => {
  return (
    <div>
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 mb:mb-3 font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {stack.map((item) => (
            <span>{item}</span>
          ))}{" "}
        </p>
      </div>
    </div>
  );
};

export default PortfolioItem;
