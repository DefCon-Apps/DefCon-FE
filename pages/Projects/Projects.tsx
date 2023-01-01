import ProjectSection from "./ProjectSection";

const Projects = () => {
  return (
    <>
      <ProjectSection 
        name="Android Applications"
        description="DEF:CON이 만든 안드로이드 애플리케이션 입니다.">
          <h1>PROJECT_LIST</h1> {/* 여기에 프로젝트 리스트 컴포넌트 삽입 */} 
      </ProjectSection>
      <ProjectSection 
        name="Web Page & Web Application"
        description="DEF:CON이 만든 웹 페이지 & 웹 애플리케이션 입니다.">
          <h1>PROJECT_LIST</h1> {/* 여기에 프로젝트 리스트 컴포넌트 삽입 */} 
      </ProjectSection>
      <ProjectSection 
        name="LR's SELF-REPAIR"
        description="용민아 이것도 고쳐줘">
          <h1>PROJECT_LIST</h1> {/* 여기에 프로젝트 리스트 컴포넌트 삽입 */} 
      </ProjectSection>
    </>
  );
};

export default Projects;
