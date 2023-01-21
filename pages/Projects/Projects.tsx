import { useEffect, useState } from "react";
import * as API from "../../src/Common/API";
import ProjectList from "./ProjectList";
import ProjectSection from "./ProjectSection";

const Projects = () => {
  const [androidProjectList, setAndroidProjectList] = useState<Array<API.ProjectListItem>>([]);
  const [webProjectList, setWebProjectList] = useState<Array<API.ProjectListItem>>([]);
  const [selfRepairList, setSelfRepairList] = useState<Array<API.ProjectListItem>>([]);
  const [etcProjectList, setEtcProjectList] = useState<Array<API.ProjectListItem>>([]);

  useEffect(() => {
    API.getProjectList().then((apiResult: any) => {
      console.log(apiResult);
      if (!apiResult) return;
      apiResult.data.map((projectData: API.ProjectListItem) => {
        switch(projectData.data.category) {
          case 'android':
            setAndroidProjectList([...androidProjectList, projectData]);
            return;
          case 'web':
            setWebProjectList([...webProjectList, projectData]);
            return;
          case 'repair':
            setSelfRepairList([...selfRepairList, projectData]);
            return;
          default:
            setEtcProjectList([...etcProjectList, projectData]);
            return;
        }
      })
    });
  }, []);

  return (
    <>
      <ProjectSection 
        name="Android Applications"
        description="DEF:CON이 만든 안드로이드 애플리케이션 입니다.">
          <ProjectList list={androidProjectList} />
      </ProjectSection>
      <ProjectSection 
        name="Web Page & Web Application"
        description="DEF:CON이 만든 웹 페이지 & 웹 애플리케이션 입니다.">
          <ProjectList list={webProjectList} />
      </ProjectSection>
      <ProjectSection 
        name="LR's SELF-REPAIR"
        description="용민아 이것도 고쳐줘">
          <ProjectList list={selfRepairList} />
      </ProjectSection>
      <ProjectSection 
        name="Etc"
        description="그 외에 진행한 프로젝트 입니다">
          <ProjectList list={etcProjectList} />
      </ProjectSection>
    </>
  );
};

export default Projects;
