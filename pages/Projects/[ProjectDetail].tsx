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
          <ImageSlider width="600px" height="450px"
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
  width: 1280px;
  h1 {
    text-align: left;
    font-size: 55pt;
  }
  p {
    margin: 1.5rem 0 1.5rem 0;
    font-size: 18pt;
    font-weight: 300;
  }
`;

const ProjectDetailContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default ProjectDetail;