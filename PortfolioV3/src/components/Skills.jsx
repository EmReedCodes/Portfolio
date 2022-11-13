import { BsFillPatchCheckFill } from "react-icons/bs"
import { BsFillLaptopFill } from "react-icons/bs"
import { IoIosPaw } from "react-icons/io"
import { IconContext } from "react-icons"
import EasterEgg from "./EasterEgg"
import React from "react"
import { skills } from "../data"
import { useState } from "react"

const Skills = () => {
  const [isShown, setIsShown] = useState(false)
  const showEgg = () => {
    setIsShown(true)
    setTimeout(() => {
      setIsShown(false)
    }, 6500)
  }
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-16">
          <IconContext.Provider value={{ className: "mx-auto inline-block w-10 h-10 mb-4" }}>
            <BsFillLaptopFill />
          </IconContext.Provider>
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            If there is a skill I don't know yet that is not a problem I love learning. Here I've
            listed some of the more prominent skills I've used in my projects. The best way I've
            been able to add new skills to my list is by taking them apart and seeing how they fit.
          </p>
        </div>
        <button aria-label="paw print" onClick={() => showEgg()}>
          <IconContext.Provider
            value={{ className: "mx-auto text-easter-egg inline-block w-12 h-12 m-2" }}
          >
            <IoIosPaw />
          </IconContext.Provider>
        </button>
        {isShown && <EasterEgg />}

        <section className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map(skill => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <IconContext.Provider
                  value={{ className: "text-secondary-500 w-6 h-6 flex-shrink-0 mr-4" }}
                >
                  <BsFillPatchCheckFill />
                </IconContext.Provider>
                <span className="title-font font-medium text-white">{skill}</span>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  )
}

export default Skills
