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
            <div className="md:w-1/2 md:pr-12 md:pl-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
              <Image
                alt="GitHub_img"
                className="flex-shrink-0 rounded-lg object-cover object-center mb-0"
                src={GitHub}
                width={150}
                height={150}
              />
              <h2 className="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">
                프로그램 소스코드를 저장하고 관리합니다.
              </h2>
              <p className="leading-relaxed text-base">
                - 과거 프로젝트의 소스코드
              </p>
              <p className="leading-relaxed text-base">
                - 학부 재학 당시 수강했던 수업의 과제 소스코드
              </p>
              <p className="leading-relaxed text-base">
                - 개발 공부를 하면서 사용한 자료
              </p>
              <a
                className="text-indigo-500 inline-flex items-center mt-4"
                href="https://github.com/wet6123"
                target={"_blank"}
                rel="noreferrer"
              >
                방문하기
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
            <div className="flex flex-col md:w-1/2 md:pl-12"></div>
          </div>
        </section>
      </div>
    </>
  );
}
