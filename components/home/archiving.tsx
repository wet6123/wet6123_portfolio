import Image from "next/image";
import GitHub from "./../../public/GitHub_logo.png";
import styles from "styles/archiving.module.scss";

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
            <div className="md:w-1/2 md:pr-12 md:pl-12 md:py-8 mb-10 md:mb-0 pb-10">
              <div className="flex h-[84px] items-center">
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 192 192"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24 0H168C181.255 0 192 10.7451 192 24V168C192 181.255 181.255 192 168 192H24C10.7451 192 0 181.255 0 168V24C0 10.7451 10.7451 0 24 0ZM49 57.9199V65.48H67L80.6799 142.52L98.5 141.26C116.02 119.06 127.84 102.44 133.96 91.3999C140.2 80.24 143.32 70.9399 143.32 63.5C143.32 59.0601 142 55.7 139.36 53.4199C136.84 51.1399 133.66 50 129.82 50C122.62 50 116.62 53.0601 111.82 59.1799C116.5 62.3 119.68 64.8799 121.36 66.9199C123.16 68.8401 124.06 71.4199 124.06 74.6599C124.06 80.0601 122.44 86.1799 119.2 93.02C116.08 99.8601 112.66 105.92 108.94 111.2C106.54 114.56 103.48 118.7 99.76 123.62L88.0601 57.2C87.1001 52.3999 84.1001 50 79.0601 50C76.78 50 72.3999 50.96 65.9199 52.8799C59.4399 54.6799 53.8 56.3601 49 57.9199Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className={styles.fira_mono}>Velog</span>
              </div>

              <h2 className="title-font font-semibold text-gray-800 tracking-wider text-sm mb-3">
                공부했던 내용을 기록하고 공유하기 위한 블로그입니다.
              </h2>
              <p className="leading-relaxed text-base">
                - 개발하면서 마주쳤던 문제들과 해결법
              </p>
              <p className="leading-relaxed text-base">
                - 개발자로서 성장하기 위해 공부했던 내용을 정리
              </p>
              <p className="leading-relaxed text-base">
                - 지식을 공유하며 개발자 커뮤니티에 기여
              </p>
              <a
                className="text-indigo-500 inline-flex items-center mt-4"
                href="https://velog.io/@wet6123"
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
          </div>
        </section>
      </div>
    </>
  );
}
