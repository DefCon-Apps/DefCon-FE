import styled from "styled-components";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import WorksCard from "../../src/Common/WorksCard";
import BackgroundCard from "../../src/Common/BackgroundCard";

const testArray = [
  {
    id: "w1",
    text: "Android",
    image: "testImage.png",
  },
  {
    id: "w2",
    text: "iOS",
    image: "testImage.png",
  },
  {
    id: "w3",
    text: "Self-Repair",
    image: "testImage.png",
  },
  {
    id: "w4",
    text: "Web",
    image: "testImage.png",
  },
  {
    id: "w5",
    text: "Chat Bot",
    image: "testImage.png",
  },
];

const MainWorks = () => {
  return (
    <MainWorksContainer>
      <MainWorksWrapper>
        <MainWorksContents>
          <WorksTitle>
            <h1>우리가 즐겨온 일들</h1>
            <p>
              우리 DEF:CON이 관심을 갖고 즐겨온 일들의 카테고리입니다.
              <br />
              소프트웨어가 사용될 수 있다면 우리는 뭐든 재미있게 갖고 놀 수
              <br />
              있습니다.
            </p>
          </WorksTitle>
          <BackgroundCard
            color={"#C7E7FF"}
            height={"35vh"}
            translateX={"-60vw"}
            translateY={"8vh"}
            type={"bordered"}
          />
          <BackgroundCard
            color={"#35B6F7"}
            height={"35vh"}
            translateX={"50vw"}
            translateY={"35vh"}
            type={"bordered"}
          />
          <ScrollMenuWrapper>
            <ScrollMenu>
              {testArray.map((items) => (
                <WorksCard
                  key={items.id}
                  text={items.text}
                  image={items.image}
                />
              ))}
            </ScrollMenu>
          </ScrollMenuWrapper>
        </MainWorksContents>
      </MainWorksWrapper>
    </MainWorksContainer>
  );
};

const MainWorksContainer = styled.div`
  @media screen and (min-width: 1280px) {
    width: 1400px;
  }

  /* 노트북 & 테블릿 가로 (해상도 1024px ~ 1279px)*/
  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    width: 1024px;
  }

  /* 테블릿 가로 (해상도 768px ~ 1023px)*/
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 768px;
  }

  /* 모바일 가로 & 테블릿 세로 (해상도 480px ~ 767px)*/
  @media screen and (min-width: 480px) and (max-width: 767px) {
    width: 480px;
  }

  /* 모바일 세로 (해상도 ~ 479px)*/
  @media screen and (max-width: 479px) {
    width: 360px;
  }
`;

const MainWorksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-bottom: 200px;
`;

const MainWorksContents = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1280px) {
    margin-left: 400px;
  }
`;

const WorksTitle = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    @media screen and (min-width: 1208px) {
      text-align: left;
      font-size: 55pt;
      letter-spacing: -7px;
    }
    text-align: center;
    font-size: 40pt;
    letter-spacing: -5px;
  }

  p {
    margin-top: 10px;
    @media screen and (min-width: 1208px) {
      font-size: 18pt;
      text-align: left;
    }
    font-size: 15pt;
    text-align: center;
    font-weight: 300;
  }
`;

const ScrollMenuWrapper = styled.div`
  @media screen and (min-width: 1208px) {
    width: 70%;
  }
  width: 100%;
  margin-top: 5vh;
`;

export default MainWorks;
