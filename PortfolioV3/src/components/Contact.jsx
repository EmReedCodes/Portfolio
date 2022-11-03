import React from "react"
import { useForm, ValidationError } from "@formspree/react"
import { AiTwotoneMail } from 'react-icons/ai'
import { IconContext } from "react-icons"

const Contact = () => {
  const [state, handleSubmit] = useForm("mpznyngl")
  if (state.succeeded) {
    return <p>Message Sent</p>
  }

  return (
    <section id="contact">
      <div className="container px-5 py-10 lg:w-4/5 mx-auto bg-opacity-20">
          <IconContext.Provider value={{ className: "mx-auto block inline-block w-10 h-10 mb-4" }}>
            <AiTwotoneMail />
          </IconContext.Provider>
        <h1 className="sm:text-4xl text-center text-3xl font-medium title-font mb-4 text-white">
          Contact Me
        </h1>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="email"
            className="block lg:w-4/5 w-full mx-auto text-left mb-2 text-base font-semibold text-white"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="lg:w-4/5 w-full mx-auto bg-gray-800 text-white text-sm rounded-lg mb-3 focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label
            htmlFor="text"
            className="block lg:w-4/5 w-full  text-left mx-auto mb-2 text-base font-semibold text-white dark:text-gray-300"
          >
            Message
          </label>
          <textarea
            rows={7}
            id="message"
            name="message"
            className="lg:w-4/5 w-full p-2.5 text-base block mx-auto bg-gray-800 rounded-lg dark:bg-gray-700 text-white"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
          <button
            type="submit"
            disabled={state.submitting}
            className="sm:w-fit w-full block py-2.5 px-5 mt-2 mb-2 mx-auto text-base text-white font-medium focus:outline-none bg-secondary-800 rounded-lg hover:bg-secondary-500 focus:z-10 focus:ring-4 focus:ring-gray-200 outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
