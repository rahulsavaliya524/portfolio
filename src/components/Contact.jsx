import React from "react";


//function for form reset
function handleSubmit(e) {
  setTimeout(() => {
    e.target.reset();
  }, 3000);
}

const Contact = () => {
  return (
    <div
      name="contact"
      className="contact w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6"></p>
        </div>

        <div >
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            action="https://getform.io/f/a5bbeab4-3505-457e-bcda-603c8bc15711"
            className=" flex flex-col w-full md:w-1/2"
          >


            {/* const Contact = () => {
              const techs = [
            {
              id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
            },]} */}

            {/* <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            /> */}
            {/* <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            /> */}
            {/* <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea> */}

            {/* <button type="submit" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send Message
            </button> */}
            <br />
          </form>
        </div>

        <div class="container text-center">
          <h1 style={{ fontSize: "30px" }}>I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with React. Redux ,Rest API and NodeJs.</h1>
          <br />
          <br />
          <div class="row" style={{ gap: "1rem" }}>


            <div class="col" style={{ border: "2px solid white", height: "4rem", display: "flex", justifyContent: "center", alignItems: "center" }}>

              <svg xmlns="http://www.w3.org/2000/svg" style={{ height: "2.6rem", marginRight: "6px" }} class="" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              <h2>Rahul Savaliya</h2>
            </div>
            <div class="col" style={{ border: "2px solid white", height: "4rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{ height: "2.6rem", marginRight: "6px" }} class="" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h2>savaliyarahul813@gmail.com</h2>
            </div>
            <div class="col" style={{ border: "2px solid white", height: "4rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{ height: "2.6rem", marginRight: "6px" }} class="" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <h2>+91 95372 15410</h2>


            </div>
            
          </div>
          
        </div>


      </div>
      
    </div>
  );
};

export default Contact;
