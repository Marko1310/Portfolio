import React from "react";
import intro from "../data/intro";

const Intro = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-3xl md:text-6xl dark:text-white mb-1 mb:mb-3 font-bold">
        Marko Čabo
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Civil Engineer and Aspiring Software Developer
      </p>

      <div className="flex justify-center items-center gap-3 text-2sm max-w-4xl mb-6 ">
        <p className="items-center md:text-xl mb-3 font-medium font-bold">
          Tech stack
        </p>
        {/* <div className="flex items-center justify-between h-2"> */}
        {intro.map((el) => {
          return (
            <img
              src={el.imgUrl}
              alt="stack"
              className="w-10 h-10 object-contain"
            />
          );
        })}
        {/* </div> */}
      </div>

      {/* Github */}
      <a
        href="https://github.com/Marko1310"
        className="bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="w-5"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
              fill="currentColor"
            />
          </g>
        </svg>
      </a>
      <p className="text-2sm max-w-4xl mb-6 text-left">
        I am a software developer in the making and always eager to acquire new
        skills. I am self-taught and have a strong drive to succeed in this
        field. As a team player, I value collaboration and constructive
        feedback. I am always up for new challenges and committed to pursuing a
        career in software development. I have completed several projects,
        through each I gained hands-on experience and knowledge about the
        software technologies used, including their functionalities, strengths,
        and weaknesses. I was able to identify the problems they can solve and
        how they can be used to develop robust and scalable applications.
      </p>
    </div>
  );
};

export default Intro;
