import Image from "next/image";

export default function AboutMe() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              ABOUT ME
            </h1>
          </div>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <Image
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/80x80"
                  width={80}
                  height={80}
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">이름</h2>
                  <p className="text-gray-500">배준성</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <Image
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/84x84"
                  width={80}
                  height={80}
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
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <Image
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/88x88"
                  width={80}
                  height={80}
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    학교/전공
                  </h2>
                  <p className="text-gray-500">한국외국어대학교</p>
                  <p className="text-gray-500">
                    전자공학 | 컴퓨터·전자시스템공학
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <Image
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/90x90"
                  width={80}
                  height={80}
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
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <Image
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/94x94"
                  width={80}
                  height={80}
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
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <Image
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/98x98"
                  width={80}
                  height={80}
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    github
                  </h2>
                  <p className="text-gray-500">https://github.com/wet6123</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
