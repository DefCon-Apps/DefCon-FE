import { useRouter } from "next/router";
import styled from "styled-components";

const ProjectDetail = ()=> {
  const router = useRouter();
  const projectId = router.query.ProjectDetail;

  return(
    <ProjectDetailWrapper>
      <div>
        <ProjectDetailTitle>
          <h1>PROJECT_ID : {projectId}</h1>
          <p>This is description about project id {projectId}.</p>
        </ProjectDetailTitle>
        <ProjectDetailContent>
          <ProjectDetailImages>PROJECT_IMAGES</ProjectDetailImages>
          <h1>Project description.</h1>
          <h2>Project description.</h2>
          <h3>Project description.</h3>
          <h4>Project description.</h4>
          <h5>Project description.</h5>
          <h6>Project description.</h6>
          <h5>Project description.</h5>
          <h4>Project description.</h4>
          <h3>Project description.</h3>
          <h2>Project description.</h2>
          <h1>Project description.</h1>
          <h2>Project description.</h2>
          <h3>Project description.</h3>
          <h4>Project description.</h4>
          <h5>Project description.</h5>
          <h6>Project description.</h6>
          <h5>Project description.</h5>
          <h4>Project description.</h4>
          <h3>Project description.</h3>
          <h2>Project description.</h2>
          <h1>Project description.</h1>
          <h2>Project description.</h2>
          <h3>Project description.</h3>
          <h4>Project description.</h4>
          <h5>Project description.</h5>
          <h6>Project description.</h6>
          <h5>Project description.</h5>
          <h4>Project description.</h4>
          <h3>Project description.</h3>
          <h2>Project description.</h2>
          <h1>Project description.</h1>
          <h2>Project description.</h2>
          <h3>Project description.</h3>
          <h4>Project description.</h4>
          <h5>Project description.</h5>
          <h6>Project description.</h6>
          <h5>Project description.</h5>
          <h4>Project description.</h4>
          <h3>Project description.</h3>
          <h2>Project description.</h2>
          <h1>Project description.</h1>
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

const ProjectDetailImages = styled.div`
  width: 600px;
  height: 450px;
  background-color: gray;
  border-radius: 20px;
`;

export default ProjectDetail;