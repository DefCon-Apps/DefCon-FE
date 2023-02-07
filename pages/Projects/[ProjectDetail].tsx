import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import * as API from "../../src/Common/API";
import ImageSlider from "../../src/Common/ImageSlider";

const ProjectDetail = ()=> {
  const router = useRouter();
  const projectId = router.query.ProjectDetail;
  const [projectData, setProjectData] = useState<API.ProjectData>();

  useEffect(() => {
    API.getProjectData(projectId as string).then((apiResult: any) => {
      setProjectData(apiResult);
    });
  }, [projectData]);

  if (!projectData) return (
    <ProjectDetailWrapper>
      <ProjectDetailTitle>
        <h1>Page Not Found</h1>
      </ProjectDetailTitle>
    </ProjectDetailWrapper>
  );

  return(
    <ProjectDetailWrapper>
      <div>
        <ProjectDetailTitle>
          <h1>{projectData.title}</h1>
          <p>{projectData.description}</p>
        </ProjectDetailTitle>
        <ProjectDetailContent>
          <ImageSlider
            images={projectData.image} />
          <br></br>
          
          <ReactMarkdown>{projectData.content}</ReactMarkdown>
          <br></br>

          <h1>Tech Stack</h1>
          {projectData.tech.map((item, i) => {
            return <p key={i}>{item}</p>
          })}
          <br></br>

          <h1>Role</h1>
          {projectData.user.map((item, i) => {
            return <p key={i}><b>{item.user}</b> - {item.role}</p>
          })}
          <br></br>

          <h1>Date</h1>
          <p>{projectData.date}</p>
          <br></br>
        </ProjectDetailContent>
      </div>
    </ProjectDetailWrapper>
  )
}

const ProjectDetailWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const ProjectDetailTitle = styled.div`
  margin-top: 128px;
  @media all and (min-width: 1280px) {
    width: 1280px;
    & > h1 {
      text-align: left;
      margin-left: 0.5rem;
      font-size: 55pt;
    }
    & > p {
      margin: 1.5rem 0 1.5rem 0.5rem;
      font-size: 18pt;
      font-weight: 300;
    }
  }

  /* 노트북 & 테블릿 가로 (해상도 1024px ~ 1279px)*/ 
  @media all and (min-width:1024px) and (max-width:1279px) {
    width: 1024px;
    & > h1 {
      text-align: left;
      margin-left: 0.5rem;
      font-size: 50pt;
    }
    & > p {
      margin: 1.5rem 0 1.5rem 0.5rem;
      font-size: 16pt;
      font-weight: 300;
    }
  }   

  /* 테블릿 가로 (해상도 768px ~ 1023px)*/ 
  @media all and (min-width:768px) and (max-width:1023px) {
    width: 768px;
    & > h1 {
      text-align: center;
      margin-left: 0.5rem;
      font-size: 45pt;
    }
    & > p {
      text-align: center;
      margin: 1.5rem 0 1.5rem 0.5rem;
      font-size: 14pt;
      font-weight: 300;
    }
  } 

  /* 모바일 가로 & 테블릿 세로 (해상도 480px ~ 767px)*/ 
  @media all and (min-width:480px) and (max-width:767px) {
    width: 480px;
    & > h1 {
      text-alitn: center;
      margin-left: 0.5rem;
      font-size: 40pt;
    }
    & > p {
      text-align: center;
      margin: 1.5rem 0 1.5rem 0.5rem;
      font-size: 12pt;
      font-weight: 300;
    }
  } 

  /* 모바일 세로 (해상도 ~ 479px)*/ 
  @media all and (max-width:479px) {
    width: 360px;
    & > h1 {
      text-alitn: center;
      margin-left: 0.5rem;
      font-size: 35pt;
    }
    & > p {
      text-align: center;
      margin: 1.5rem 0 1.5rem 0.5rem;
      font-size: 12pt;
      font-weight: 300;
    }
  }
`;

const ProjectDetailContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default ProjectDetail;