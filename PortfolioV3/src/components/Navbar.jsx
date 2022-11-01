import React from "react";
import { FaFileDownload } from 'react-icons/fa'
import { IconContext } from 'react-icons';

const Navbar = () => {
    
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <span className="title-font font-medium text-white mb-4 md:mb-0">
            <a href="#about" className="ml-3 text-xl">
              EmReedCodes
            </a>
          </span>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <a href="#projects" className="mr-5 hover:text-white">
              Projects
            </a>
            <a href="#skills" className="mr-5 hover:text-white">
              Skills
            </a>
           
          </nav>
          <a href="./1EmilyReed.docx.pdf"
                   className="inline-flex text-secondary-500 items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
                  download>
                  <IconContext.Provider value={{className:" text-secondary-500 w-6 h-6 flex-shrink-0 mr-1"}} >
            <FaFileDownload />
            </IconContext.Provider>
            Resume
    </a>
          <a
            href="#contact"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                    Hire Me
                
            {/* <ArrowRightIcon className="w-4 h-4 ml-1" /> */}
          </a>
        </div>
      </header>
    );
};
 
export default Navbar;
