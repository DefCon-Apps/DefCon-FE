import Link from "next/link";
import { useEffect, useState } from "react";
import * as API from "../../src/Common/API";
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
  }, [androidProjectList, webProjectList, selfRepairList, etcProjectList]);

  return (
    <>
      <ProjectSection 
        name="Android Applications"
        description="DEF:CON이 만든 안드로이드 애플리케이션 입니다.">
          <>{androidProjectList.map(item => <Link href={`Projects/${item.id}`}>{item.data.title}</Link>)}</> {/* 여기에 프로젝트 리스트 컴포넌트 삽입 */} 
      </ProjectSection>
      <ProjectSection 
        name="Web Page & Web Application"
        description="DEF:CON이 만든 웹 페이지 & 웹 애플리케이션 입니다.">
          <>{webProjectList.map(item => <Link href={`Projects/${item.id}`}>{item.data.title}</Link>)}</> {/* 여기에 프로젝트 리스트 컴포넌트 삽입 */} 
      </ProjectSection>
      <ProjectSection 
        name="LR's SELF-REPAIR"
        description="용민아 이것도 고쳐줘">
          <>{selfRepairList.map(item => <Link href={`Projects/${item.id}`}>{item.data.title}</Link>)}</> {/* 여기에 프로젝트 리스트 컴포넌트 삽입 */} 
      </ProjectSection>
      <ProjectSection 
        name="Etc"
        description="그 외에 진행한 프로젝트 입니다">
          <>{etcProjectList.map(item => <Link href={`Projects/${item.id}`}>{item.data.title}</Link>)}</> {/* 여기에 프로젝트 리스트 컴포넌트 삽입 */} 
      </ProjectSection>
    </>
  );
};

export default Projects;
