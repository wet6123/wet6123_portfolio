import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900">
              ABOUT ME
            </h1>
          </div>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 p-4">
                <Image
                  alt="team"
                  className="w-10 h-10 object-cover object-center flex-shrink-0 mr-4"
                  src="/img/aboutMe/user.png"
                  width={64}
                  height={64}
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">이름</h2>
                  <p className="text-gray-500">배준성</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 p-4">
                <Image
                  alt="team"
                  className="w-10 h-10 object-cover object-center flex-shrink-0 mr-4"
                  src="/img/aboutMe/cal.png"
                  width={64}
                  height={64}
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    생년월일
                  </h2>
                  <p className="text-gray-500">1996. 06. 23</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 p-4">
                <Image
                  alt="team"
                  className="w-10 h-10 object-cover object-center flex-shrink-0 mr-4"
                  src="/img/aboutMe/study.png"
                  width={64}
                  height={64}
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">학력</h2>
                  <p className="text-gray-500">한국외국어대학교</p>
                  <p className="text-gray-500">
                    전자공학 | 컴퓨터·전자시스템공학
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 p-4">
                <Image
                  alt="team"
                  className="w-10 h-10 object-cover object-center flex-shrink-0 mr-4"
                  src="/img/aboutMe/work.png"
                  width={64}
                  height={64}
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    희망 직무
                  </h2>
                  <p className="text-gray-500">프론트엔드</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 p-4">
                <Image
                  alt="team"
                  className="w-10 h-10 object-cover object-center flex-shrink-0 mr-4"
                  src="/img/aboutMe/mail.png"
                  width={64}
                  height={64}
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    이메일
                  </h2>
                  <p className="text-gray-500">gentlmanjun@naver.com</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 p-4">
                <Image
                  alt="team"
                  className="w-10 h-10 object-cover object-center flex-shrink-0 mr-4"
                  src="/img/aboutMe/note.png"
                  width={64}
                  height={64}
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    페이지가 보이지 않으신가요?
                  </h2>
                  <a
                    target="_blank"
                    href="https://mysterious-cesium-158.notion.site/PORTFOLIO-9ae6a50c69d94d92a50c6be27e751e92"
                  >
                    <p className="text-gray-500">노션으로 보기</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
