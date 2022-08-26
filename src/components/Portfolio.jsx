import React from "react";
import amazon from "../assets/portfolio/r_amazon_prime.png";
import fashion from "../assets/portfolio/r_fashion_cube.png";
import cenema from "../assets/portfolio/r_i_cenema.png";
import invoice from "../assets/portfolio/r_invoice_generate.png";
import salinaka from "../assets/portfolio/r_salinaka_clone.png";
import socialnet from "../assets/portfolio/r_social-network-master.png";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: amazon,
      link: '',
      repo: 'https://github.com/rahulsavaliya524/amazon-prime-clone'
    },
    {
      id: 2,
      src: fashion,
      link: '',
      repo: 'https://github.com/rahulsavaliya524/fashion-cube-master'
    },
    {
      id: 3,
      src: cenema,
      link: '',
      repo: 'https://github.com/rahulsavaliya524/i-cinema'
    },
    {
      id: 4,
      src: invoice,
      link: '',
      repo: 'https://github.com/rahulsavaliya524/invoice-generate'
    },
    {
      id: 5,
      src: salinaka,
      link: '',
      repo: 'https://github.com/rahulsavaliya524/salinaka-eyes'
    },
    {
      id: 6,
      src: socialnet,
      link: '',
      repo: 'https://github.com/rahulsavaliya524/social-network-master'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  demo
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
