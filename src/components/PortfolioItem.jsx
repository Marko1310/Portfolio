import React from "react";

const PortfolioItem = ({ title, imgUrl, stack, link, github, description }) => {
  return (
    <div className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden">
      <div className='relative group'>
        <img
          src={imgUrl}
          alt="portfolio"
          className="w-full h-64 md:h-64 object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-start items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-4 py-4">
          <p className="text-white text-start whitespace-pre-line">{description}</p>
        </div>
      </div>
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 mb:mb-3 font-semibold dark:text-white">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
          {stack.map((item) => (
            <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
              {item}
            </span>
          ))}{" "}
        </p>
        <a
          href={github}
          target="_blank"
          rel="nooopener"
          className="inline-block px-2 py-1 font-semibold underline border-stone-900 dark:border-white mt-2"
        >
          Code
        </a>
        {link && <a
          href={link}
          target="_blank"
          rel="nooopener"
          className="inline-block px-2 py-1 font-semibold underline border-stone-900 dark:border-white mt-2"
        >
          Live Demo
        </a>}
      </div>
    </div>
  );
};

export default PortfolioItem;
