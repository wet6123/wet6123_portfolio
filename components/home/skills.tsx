import SkillTile from "./../skillTile";
import ReactLogo from "./../../public/front/React_logo.png";
import JsTsLogo from "./../../public/front/JS_TS_logo.png";
import HtmlCssLogo from "./../../public/front/HTML_CSS_logo.png";
import Spring from "./../../public/back/Spring_logo.png";
import MySQL from "./../../public/back/Mysql_logo.png";
import Jira from "./../../public/manage/Jira_logo.png";
import Git from "./../../public/manage/Git_logo.png";

export default function Skills() {
  return (
    <>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900">
            SKILLS
          </h1>
        </div>
        {/* 
      
      프론트엔드

      */}
        <div className="flex flex-col text-center w-full mb-5">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Front-End
          </h1>
        </div>
        <div className="flex flex-wrap -m-4 mr-3 ml-3">
          <SkillTile
            name="React"
            img={ReactLogo}
            rate={3}
            des={[
              "- React hooks를 능숙하게 사용가능하고, 각종 컴포넌트 디자인 패턴을 사용하는데 익숙합니다.",
              "- Redux를 통한 상태관리가 가능합니다.",
            ]}
          />
          <SkillTile
            name="JavaScript / TypeScript"
            img={JsTsLogo}
            rate={4}
            des={[
              "- ESLint & Prettier 사용하여 코드 포맷팅을 통일하였습니다.",
              "- ES6+ 문법에 능숙하며 ECMAScript 최신 동향을 꾸준히 모니터링 하고 있습니다.",
              "- TypeScript 의 타입시스템 사용에 능숙합니다.",
            ]}
          />
          <SkillTile
            name="HTML / CSS"
            img={HtmlCssLogo}
            rate={3}
            des={[
              "- 시맨틱 웹과 웹 접근성을 중요하게 생각합니다.",
              "- 반응형, 적응형 구현 가능합니다.",
              "- Bootstrap 등의 CSS 프레임워크를 사용할 수 있습니다.",
              "- styled-component 를 활용하여 CSS-in-JS 방식으로 작성할 수 있습니다.",
            ]}
          />
        </div>
        {/* 
      
      백엔드
      
      */}
        <div className="flex flex-col text-center w-full mb-5 mt-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Back-End
          </h1>
        </div>
        <div className="flex flex-wrap -m-4 mr-3 ml-3">
          <SkillTile
            name="Spring"
            img={Spring}
            rate={3}
            des={[
              "- Spring (Boot, Core)를 활용하여 서버를 구축할 수 있습니다.",
              "- JPA를 사용하여 서버를 개발한 경험이 있습니다.",
              "- Swagger, Postman 등 API 테스트 툴을 사용할 수 있습니다.",
            ]}
          />
          <SkillTile
            name="MySQL"
            img={MySQL}
            rate={3}
            des={[
              "- MySQL을 프로젝트에 사용한 경험이 있습니다.",
              "- 프로젝트에 필요한 DB를 설계하고 테스트에 필요한 데이터을 관리한 경험이 있습니다.",
            ]}
          />
        </div>
        {/* 
      
      협업관리툴
      
      */}
        <div className="flex flex-col text-center w-full mb-5 mt-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Project management tool
          </h1>
        </div>
        <div className="flex flex-wrap -m-4 mr-3 ml-3">
          <SkillTile
            name="Jira"
            img={Jira}
            rate={3}
            des={[
              "- 팀장으로서 Jira를 활용하여 프로젝트를 관리한 경험이 있습니다.",
              "- 애자일과 스크럼을 통해서 프로젝트 진행하였습니다.",
            ]}
          />
          <SkillTile
            name="Git"
            img={Git}
            rate={4}
            des={[
              "- Git을 이용하여 버전을 관리하고 github나 gitlab의 원격저장소를 활용합니다.",
              "- 협업을 위해서 커밋 컨벤션을 설정하고 Git-Flow전략을 활용했습니다.",
            ]}
          />
        </div>
      </div>
    </>
  );
}
