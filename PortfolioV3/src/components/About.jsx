import React from "react";
import { BsGithub } from 'react-icons/bs'
import { IconContext } from 'react-icons';

const About = () => {
    return ( 
        <h2>
             <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Emily.
            <br className="hidden lg:inline-block" />I love creating and coding with my cat.
          </h1>
          <p className="mb-8 leading-relaxed">
            I enjoy coming up with ideas and turning them into something tangible with code. I've hidden a little easter egg on my portfolio be sure to let me know if you find it! 
          </p>
              <div className="flex justify-center">
              <a href="https://github.com/EmReedCodes" className="">
            <IconContext.Provider value={{ className: "mx-auto inline-block w-10 h-10 mb-4" }}>
                <BsGithub />
              </IconContext.Provider>
          </a>
           
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Projects
                </a>
         
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./mayberesizedcat.png"
              />
  
        </div>
      </div>
    </section>
        </h2>
    );
}
 
export default About
