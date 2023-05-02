import Image from "next/image";
import { Badge } from "./project/badge";
import styles from "styles/pjt.module.scss";

export const PjtTile = (pjt: {
  item: {
    id: any;
    img: any;
    titles: any;
    semiTitle: any;
    date: any;
    team: any;
    part: any;
    contribute: any;
    skill: any;
    link: any;
    division: any;
    list: any;
  };
}) => {
  const {
    id,
    img,
    titles,
    semiTitle,
    date,
    team,
    part,
    contribute,
    skill,
    link,
    division,
    list,
  } = pjt.item;
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="pjt img"
              src={img}
              width={720}
              height={600}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-2xl text-lg mb-4 font-bold text-gray-900">
              {titles}
            </h1>
            <p className={styles.semititle}>{semiTitle}</p>
            <div className={styles.content}>
              <p>개발 기간: {date}</p>
              <p>개발 인원: {team}</p>
              <p>담당 분야: {part}</p>
              <p>기여도: {contribute}%</p>
            </div>
            <p className="my-2">
              {skill &&
                skill.map((stack: any) => (
                  <Badge item={stack} key={`${stack} + ${id}`} />
                ))}
            </p>
            <a target="_blank" href={link} rel="noreferrer">
              <button className="mt-2 mb-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                자세히보기
              </button>
            </a>
            <p className={styles.title}>{division}</p>
            <br />
            {list ? (
              <>
                <div className={styles.content}>담당분야</div>
                {list &&
                  list.map((stack: any) => (
                    <li className={styles.content} key={`${id} + ${stack}`}>
                      {stack}
                    </li>
                  ))}
              </>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
};
