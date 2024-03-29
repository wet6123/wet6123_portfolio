import Image from "next/image";
import styles from "styles/skill.module.scss";

type props = {
  name: string;
  img: any;
  rate: number;
  des: string[];
};

export default function SkillTile({ name, img, rate, des }: props) {
  const array = Array(rate).fill(0);
  let len = 0;
  if (rate < 5) {
    len = 5 - rate;
  }
  const arrayEmpty = Array(len).fill(0);

  return (
    <>
      <div className="p-4 lg:w-1/3 flex-grow">
        <div className="h-full flex sm:flex-row flex-col sm:items-start items-center sm:justify-start justify-center text-center sm:text-left sm:align rounded-lg bg-gray-100">
          <div className="flex-grow pl-4 pr-4">
            <div className="flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <Image
                alt={`${name}_img`}
                className="flex-shrink-0 rounded-lg object-cover object-center mb-0"
                src={img}
                width={150}
                height={150}
              />
              <div className="sm:pl-8">
                {/* <h2 className="title-font font-medium text-lg text-gray-900"> */}
                <h2 className={styles.title}>{name}</h2>
                <h3 className="text-gray-500 mb-3">
                  {array.map((arr, idx) => (
                    <span key={idx}>★</span>
                  ))}
                  {arrayEmpty.map((arr, idx) => (
                    <span key={idx}>☆</span>
                  ))}
                </h3>
              </div>
            </div>
            <div className="mb-8">
              {des.map((arr, idx) => (
                <p className={styles.content} key={idx}>
                  {arr}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
