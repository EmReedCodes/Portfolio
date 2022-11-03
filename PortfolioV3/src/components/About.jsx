import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { IconContext } from 'react-icons';

const About = () => {
    return ( 
        <h2>
             <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Emily.
            <br className="hidden lg:inline-block" /> I love creating and coding with my cat.
          </h1>
          <p className="mb-8 leading-relaxed">
            Outside of coding I enjoy playing video games, embroidery, and watching a good new series. I've hidden a little easter egg on my portfolio be sure to let me know if you find it! 
              </p>
              <span className="mb-2 ml-4">You can follow me on:</span>
              <div className="flex justify-center">
                
              <a href="https://github.com/EmReedCodes" alt="github">
            <IconContext.Provider value={{ className: "ml-4 inline-flex w-9 h-9 hover:text-white" }}>
                <BsGithub />
              </IconContext.Provider>
                </a>
                <a href="https://www.linkedin.com/in/emilyjreed/" alt="linkedin">
            <IconContext.Provider value={{ className: "ml-4 inline-flex w-9 h-9 text-btn-purp hover:text-btn-purp-light" }}>
                <BsLinkedin />
              </IconContext.Provider>
                </a>
               
                <a href="https://twitter.com/EmReedCodes" alt="twitter">
            <IconContext.Provider value={{ className: "ml-4 inline-flex w-9 h-9 hover:text-white" }}>
                <BsTwitter />
              </IconContext.Provider>
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
