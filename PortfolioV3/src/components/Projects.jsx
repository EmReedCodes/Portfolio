import React from "react"
import { projects } from "../data"
import { FaCode } from "react-icons/fa"
import { IconContext } from "react-icons"
import { useLayoutEffect, useRef, useState } from "react"

// const ProjectGalleryItem = ({ project }) => {
//   const targetRef = useRef()
//   const [dimensions, setDimensions] = useState(400)

//   useLayoutEffect(() => {
//     function updateSize() {
//       setDimensions(targetRef.current.offsetWidth)
//     }

//     setDimensions(targetRef.current.getBoundingClientRect().width)
//     // add listener to window resize
//     window.addEventListener("resize", updateSize)
//     return () => {
//       // remove listener to window resize
//       window.removeEventListener("resize", updateSize)
//     }
//   }, [])
//   //lg:
//   return (
//     <>
//       <a
//         href={project.link}
//         key={project.image}
//         className="sm:w-1/2  p-4"
//         style={{ height: dimensions + "px" }}
//         ref={targetRef}
//       >
//         <div className="flex relative min-h-full">
//           <img
//             alt="gallery"
//             className="absolute inset-0 w-full h-full object-cover object-center"
//             src={project.image}
//           />
//           <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
//             <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
//               {project.subtitle}
//             </h2>
//             <h1 className="title-font text-lg font-medium text-white mb-3">{project.title}</h1>
//             <p className="leading-relaxed">{project.description}</p>
//           </div>
//         </div>
//       </a>
//       {/* <p>{dimensions}</p> */}
//       <button></button>
//       <button></button>
//     </>
//   )
// }

//       {/* // <ProjectGalleryItem project={project} /> */}

// // style={{ height: dimensions + "px" }}
// ref={targetRef}

const Projects = () => {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <IconContext.Provider value={{ className: "mx-auto inline-block w-10 h-10 mb-4" }}>
            <FaCode />
          </IconContext.Provider>
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            As a full stack developer being able to complete a project from handling the database
            all the way to styling is immensely gratifying. The projects I tend to focus on have
            solved a problem in my every day life, or were just really fun. I hope you enjoy them!
          </p>
        </div>
        <div className="flex flex-wrap need-height -m-4">
          {projects.map((project, idx) => (
            <a href={project.link} key={project.image} className="sm:w-1/2 need-height p-4">
              <div className="flex relative min-h-full">
                <img
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
              {/* <button className="lg:w-fit w-full block py-2.5 px-5 mt-2 mb-2 mx-auto text-base text-white font-medium focus:outline-none bg-btn-purp rounded-lg border hover:bg-btn-hov-purp focus:z-10 focus:ring-4 focus:ring-gray-200">hello</button>
              <button className="lg:w-fit w-full block py-2.5 px-5 mt-2 mb-2 mx-auto text-base text-white font-medium focus:outline-none bg-btn-purp rounded-lg border hover:bg-btn-hov-purp focus:z-10 focus:ring-4 focus:ring-gray-200">hello</button> */}
              
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
