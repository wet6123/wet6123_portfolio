import { PjtTile } from "../pjtTile";

const pjtData = [
  {
    id: 1,
    img: "/img/pjt/intagral.gif",
    titles: "InTagra∫ (인테그랄) - 삼성 SDS 연계 프로젝트",
    semiTitle: "AI로 사진을 분석해 태그 달기를 도와주는 SNS 앱",
    date: "2022.09.19 ~ 2022.11.21",
    team: "6명 (백엔드 2, 안드로이드 2, AI 2)",
    part: "백엔드",
    contribute: 30,
    skill: ["Spring Boot", "Kotlin", "MySQL", "YOLOv5"],
    link: "https://github.com/wet6123/Intagral",
    division: "SSAFY 2학기 자율 프로젝트",
    list: [
      "ERD 작성, DB 구성",
      "이미지 업로드를 위한 AWS S3 Bucket 구성",
      "Post 업로드, 삭제, 조회, 좋아요를 위한 API 구현",
      "앱 UI / UX 개선 및 디자인",
      "Notion 협업 공간 관리",
    ],
  },
  {
    id: 2,
    img: "/img/pjt/masterpiece.gif",
    titles: "Masterpiece (마스터피스) - 우수 프로젝트 선정 (서울 5반 1등)",
    semiTitle: "외국인이 한글의 과학성과 예술성을 경험할 수 있는 NFT 플랫폼",
    date: "2022.08.22 ~ 2022.09.16",
    team: "5명 (프론트엔드 3, 백엔드 2)",
    part: "팀장, 프론트엔드",
    contribute: 40,
    skill: [
      "Spring Boot",
      "React",
      "Redux-Toolkit",
      "Typescript",
      "MySQL",
      "Web3.js",
      "Meta Mask",
    ],
    link: "https://github.com/wet6123/rnasterpiece",
    division: "SSAFY 2학기 특화 프로젝트",
    list: [
      "redux-toolkit & react-router-dom / styled-components / ESLint & Prettier 사용",
      "Typescript 적용",
      "로그인, 마이페이지 구현",
      "NFT 목록, 상세, 거래 페이지 구현",
      "한글 게임, 뽑기 페이지 구현",
      "한글 글자 꾸미기 구현 참여",
      "Notion 협업 공간 관리",
    ],
  },
  {
    id: 3,
    img: "/img/pjt/wetness.gif",
    titles: "WE-TNESS (위트니스)",
    semiTitle: "WebRTC와 모션인식을 활용한 운동 게임 서비스",
    date: "2022.07.05 ~ 2022.08.19",
    team: "6명 (프론트엔드 2, 백엔드 4, 백엔드 1명 중도 참여)",
    part: "프론트엔드",
    contribute: 25,
    skill: [
      "Spring Boot",
      "React",
      "Redux-Toolkit",
      "MySQL",
      "Web RTC",
      "Teachable Machine",
    ],
    link: "https://github.com/wet6123/WE-tness",
    division: "SSAFY 2학기 공통 프로젝트",
    list: [
      "react-toolkit & react-router-dom 활용 SPA 구현",
      "styled-components 활용 css 스타일링",
      "협업과 코드 리팩토링을 위한 ESLint 설정",
      "메인 페이지, 튜토리얼, 유저 정보, 검색 구현",
      "운동별 애니메이션 제작",
    ],
  },
  {
    id: 4,
    img: "/img/pjt/everypt.png",
    titles: "모두의 PT",
    semiTitle: "회원 기반 유튜브 운동 영상 웹 서비스",
    date: "2022.05.16 ~ 2022.05.26",
    team: "6명 (프론트엔드 3, 백엔드 3)",
    part: "프론트엔드",
    contribute: 20,
    skill: ["Spring Boot", "Vue.js", "MySQL"],
    link: "https://github.com/wet6123/Everyones-PT",
    division: "SSAFY 1학기 최종 프로젝트",
    list: [
      "Vue의 Intersection Observer을 활용한 무한 스크롤 구현",
      "창 크기 변경에 따른 반응형 설계",
      "영상 검색 및 정렬 기능 구현",
    ],
  },
];

export default function Projects() {
  return (
    <>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-5xl text-3xl font-bold title-font mb-4 text-gray-900">
            Projects
          </h1>
          {pjtData && pjtData.map((pjt) => <PjtTile item={pjt} key={pjt.id} />)}
        </div>
      </div>
    </>
  );
}
