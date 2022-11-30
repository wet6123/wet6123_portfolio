import Image from "next/image";
import GitHub from "./../../public/GitHub_logo.png";

export default function Archiving() {
  return (
    <>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900">
            ARCHIVING
          </h1>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
            <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
              <Image
                alt="GitHub_img"
                className="flex-shrink-0 rounded-lg object-cover object-center mb-0"
                src={GitHub}
                width={150}
                height={150}
              />
              <p className="leading-relaxed text-base">
                Locavore cardigan small batch roof party blue bottle blog
                meggings sartorial jean shorts kickstarter migas sriracha
                church-key synth succulents. Actually taiyaki neutra, distillery
                gastropub pok pok ugh.
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-4">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="flex flex-col md:w-1/2 md:pl-12">
              <h2 className="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="flex flex-wrap list-none -mb-1">
                <li className="lg:w-1/3 mb-1 w-1/2">
                  <a className="text-gray-600 hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li className="lg:w-1/3 mb-1 w-1/2">
                  <a className="text-gray-600 hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li className="lg:w-1/3 mb-1 w-1/2">
                  <a className="text-gray-600 hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li className="lg:w-1/3 mb-1 w-1/2">
                  <a className="text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
                <li className="lg:w-1/3 mb-1 w-1/2">
                  <a className="text-gray-600 hover:text-gray-800">
                    Fifth Link
                  </a>
                </li>
                <li className="lg:w-1/3 mb-1 w-1/2">
                  <a className="text-gray-600 hover:text-gray-800">
                    Sixth Link
                  </a>
                </li>
                <li className="lg:w-1/3 mb-1 w-1/2">
                  <a className="text-gray-600 hover:text-gray-800">
                    Seventh Link
                  </a>
                </li>
                <li className="lg:w-1/3 mb-1 w-1/2">
                  <a className="text-gray-600 hover:text-gray-800">
                    Eighth Link
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
