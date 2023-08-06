import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import RehypeRaw from "rehype-raw";
import RemarkGFM from "remark-gfm";
import styled from "styled-components";
import * as API from "../../src/Common/API";
import ImageSlider from "../../src/Common/ImageSlider";
import Loader from "../../src/Common/Loader";

const ProjectDetail = () => {
  const router = useRouter();
  const projectId = router.query.ProjectDetail;
  const [projectData, setProjectData] = useState<API.ProjectData>();

  useEffect(() => {
    if (projectId !== undefined) {
      API.getProjectData(projectId as string).then((apiResult: any) => {
        apiResult.image.splice(0, 1);
        setProjectData(apiResult);
      });
    }
  }, [projectId]);

  if (!projectData)
    return (
      <ProjectDetailWrapper>
        <ProjectDetailTitle>
          <Loader />
        </ProjectDetailTitle>
      </ProjectDetailWrapper>
    );

  return (
    <ProjectDetailWrapper>
      <div>
        <ProjectDetailTitle>
          <h1>{projectData.title}</h1>
          <p>{projectData.description}</p>
        </ProjectDetailTitle>

        <ProjectDetailContent>
          <ImageSlider images={projectData.image} />
          <br></br>

          <ReactMarkdown
            rehypePlugins={[RehypeRaw]}
            remarkPlugins={[RemarkGFM]}
          >
            {projectData.content.toString().replaceAll("\\n", "\n")}
          </ReactMarkdown>
          <br></br>

          <h1>Role</h1>
          {projectData.user.map((item, i) => {
            return (
              <p key={i}>
                <b>{item.user}</b> - {item.role}
              </p>
            );
          })}
          <br></br>

          <h1>Date</h1>
          <p>{projectData.date}</p>
          <br></br>

          <h1>Project Tag</h1>
          {projectData.tech.map((item, i) => {
            return <p key={i}>{item}</p>;
          })}
          <br></br>
        </ProjectDetailContent>
      </div>
    </ProjectDetailWrapper>
  );
};

const ProjectDetailWrapper = styled.div`
  font-family: "Noto Sans KR";
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    width: 1030px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20vh;
  }

  /* 모바일 가로 & 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (max-width: 767px) {
    & > div {
      margin-bottom: 10vh;
    }
  }
`;

const ProjectDetailTitle = styled.div`
  margin-top: 200px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media all and (min-width: 1280px) {
    width: 100%;
    & > h1 {
      width: 100%;
      text-align: left;
      font-size: 3.5em;
    }

    & > p {
      margin-top: 1rem;
      font-size: 1.5rem;
      font-weight: 300;
    }
  }

  /* 노트북 & 테블릿 가로 (해상도 1024px ~ 1279px)*/
  @media all and (min-width: 1024px) and (max-width: 1279px) {
    width: 700px;
    & > h1 {
      width: 100%;
      text-align: left;
      font-size: 2.8rem;
    }

    & > p {
      margin-top: 1rem;
      font-size: 1.313em;
      font-weight: 300;
    }
  }

  /* 테블릿 가로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 500px;
    align-items: center;

    & > h1 {
      width: 100%;
      text-align: center;
      font-size: 3.5em;
    }
    & > p {
      text-align: center;
      margin-top: 1rem;
      font-size: 1.313em;
      font-weight: 300;
    }
  }

  /* 모바일 가로 & 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
    width: 400px;
    align-items: center;
    & > h1 {
      text-align: center;
      font-size: 3.2em;
    }
    & > p {
      text-align: center;
      margin-top: 1rem;
      font-size: 1.17rem;
      font-weight: 300;
    }
  }

  /* 모바일 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    width: 100%;
    align-items: center;
    margin: 7em 10px 0 10px;
    & > h1 {
      text-align: center;
      font-size: 2.9em;
    }
    & > p {
      text-align: center;
      margin: 1.5rem 0 0 0.5rem;
      font-size: 1.17em;
      font-weight: 300;
    }
  }
`;

const ProjectDetailContent = styled.div`
  width: 100%;
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  a {
    font-weight: 900;
    text-decoration-line: underline;
  }

  & > h1 {
    margin-top: 1.5em;
    font-size: 2em;
  }

  & > p {
    font-size: 1.5em;
    font-weight: 300;
  }

  /* 노트북 & 테블릿 가로 (해상도 1024px ~ 1279px)*/
  /* 테블릿 가로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1279px) {
    width: 80%;
    & > h1 {
      margin-top: 1em;
      font-size: 2em;
    }

    & > p {
      width: 80%;
      font-size: 1.313em;
      font-weight: 300;
    }
  }

  /* 모바일 가로 & 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
    width: 70%;
    & > h1 {
      margin-top: 1em;
      font-size: 2em;
    }

    & > p {
      width: 80%;
      font-size: 1.313em;
      font-weight: 300;
    }
  }

  /* 모바일 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    width: 70%;
    & > h1 {
      margin-top: 0.5em;
      font-size: 2em;
    }

    & > p {
      width: 80%;
      font-size: 1.313em;
      font-weight: 300;
    }
  }
`;

export default ProjectDetail;
