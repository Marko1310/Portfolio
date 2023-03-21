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

      <div className="flex justify-center items-center gap-3 text-2sm max-w-4xl mb-6 mt-3 ">
        <p className="items-center md:text-xl font-bold border-r-2 border-stone-900 dark:border-stone-200 pr-2 ">
          Tech stack
        </p>
        <div className="flex items-center justify-between h-2 gap-2">
          {intro.map((el) => {
            return (
              <img
                src={el.imgUrl}
                alt="stack"
                className="w-6 h-6 md:w-10 md:h-10 object-contain"
              />
            );
          })}
        </div>
      </div>

      <p className="text-s max-w-4xl mb-6 text-left">
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
