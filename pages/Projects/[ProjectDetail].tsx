import { useRouter } from "next/router";
import styled from "styled-components";
import ImageSlider from "../../src/Common/ImageSlider";

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
          <ImageSlider width="600px" height="450px"
            images={[
              "https://github.com/yymin1022/SeoulHealing/raw/master/Images/app_1.jpg",
              "https://github.com/yymin1022/SeoulHealing/raw/master/Images/app_2.jpg",
              "https://github.com/yymin1022/SeoulHealing/raw/master/Images/app_3.jpg",
              "https://camo.githubusercontent.com/119f7acf538de712dafd8c7f50c562eff424432a569e7e847716fa701c406b6d/687474703a2f2f6d617a617373756d6e6964612e7774662f6170692f76322f67656e65726174655f62616467653f626f6a3d79796d696e31303232",
              "https://camo.githubusercontent.com/501dce49fd773c15a1a59e8bd14109a465a175ffd39df3ff3136881398b479ba/687474703a2f2f6d617a617373756d6e6964612e7774662f6170692f76322f67656e65726174655f62616467653f626f6a3d63656f756e6a63",
            ]} />
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