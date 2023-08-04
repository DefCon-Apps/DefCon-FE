import { useEffect, useState } from "react";
import styled from "styled-components";
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
      if (!apiResult) return;

      let projectDataSet = new Map<string, API.ProjectListItem[]>([
        ["android", new Array<API.ProjectListItem>],
        ["etc", new Array<API.ProjectListItem>],
        ["repair", new Array<API.ProjectListItem>],
        ["web", new Array<API.ProjectListItem>]
      ]);

      apiResult.data.map((projectData: API.ProjectListItem) => {
        projectDataSet.set(projectData.data.category, [...projectDataSet.get(projectData.data.category)!, projectData])
      });

      setAndroidProjectList(projectDataSet.get("android")!);
      setEtcProjectList(projectDataSet.get("etc")!);
      setSelfRepairList(projectDataSet.get("repair")!);
      setWebProjectList(projectDataSet.get("web")!);
    });
  }, []);

  return (
    <ProjectWrapper>
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
    </ProjectWrapper>
  );
};

const ProjectWrapper = styled.div`
  font-family: "Noto Sans KR";
  margin-top: 128px;
  margin-bottom: 20em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Projects;
