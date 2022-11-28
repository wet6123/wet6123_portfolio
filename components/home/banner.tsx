import Image from "next/image";
import styles from "styles/banner.module.scss";
import mainImg from "public/mainImg.jpg";

export default function Banner() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className={styles.background}>
          <Image
            src={mainImg}
            alt="메인 배경 이미지"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <div className={styles.overlay}>
            <div className={styles.text}>
              <h1>팀을 성장으로 이끄는</h1>
              <h1>프론트엔드 개발자</h1>
              <div className={styles.detail}>
                <p>안녕하세요.</p>
                <p>웹 개발자 배준성 입니다.</p>
              </div>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  더 알아보기 ↓
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
