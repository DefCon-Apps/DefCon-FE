import styled from "styled-components";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import WorksCard from "../../src/Common/WorksCard";

const testArray = [
  {
    id: "w1",
    text: "Android",
    image: "defcon_works_android.png",
  },
  {
    id: "w2",
    text: "iOS",
    image: "defcon_works_ios.png",
  },
  {
    id: "w3",
    text: "Self-Repair",
    image: "defcon_works_selfrepair.png",
  },
  {
    id: "w4",
    text: "Web",
    image: "defcon_works_web.png",
  },
  {
    id: "w5",
    text: "Chat Bot",
    image: "defcon_works_chatbot.png",
  },
];

const MainWorks = () => {
  return (
    <MainWorksWrapper>
      <MainWorksContents>
        <WorksTitle>
          <h1>우리가 즐겨온 일들</h1>
          <p>
            우리 DEF:CON이 관심을 갖고 즐겨온 일들의 카테고리입니다.
            <br />
            소프트웨어가 사용될 수 있다면 우리는 뭐든 재미있게 갖고 놀 수 있습니다.
          </p>
        </WorksTitle>
        <ScrollMenuWrapper>
          <StyledScrollMenu>
            {testArray.map((items) => (
              <WorksCard key={items.id} text={items.text} image={items.image} />
            ))}
          </StyledScrollMenu>
        </ScrollMenuWrapper>
      </MainWorksContents>
    </MainWorksWrapper>
  );
};

const MainWorksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 1279px) {
    justify-content: center;
    align-items: center; 
  }
  width: 100vw;
  height: 100vh;
  margin-bottom: 200px;
`;

const MainWorksContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WorksTitle = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1280px) {
    width: 70vw; 
  }

  @media screen and (max-width: 1279px) {
    justify-content: center;
    align-items: center;
  }

  h1 {
    text-align: center;

    @media screen and (min-width: 1280px) {
      text-align: left;
      font-size: 55pt;
      letter-spacing: -7px;
    }

    @media screen and (max-width: 1279px) {
      font-size: 40pt;
      letter-spacing: -5px;
    }
  }

  p {
    font-weight: 300;

    @media screen and (min-width: 1280px) {
      margin-top: 2vh;
      font-size: 18pt;
      text-align: left;
    }

    @media screen and (max-width: 1279px) {
      width: 85vw;
      margin-top: 5vh;
      font-size: 15pt;
      text-align: center;
    }
  }
`;

const ScrollMenuWrapper = styled.div`
  width: 100vw;
  overflow-x: scroll;
  margin-top: 5vh;
`;

const StyledScrollMenu = styled(ScrollMenu)`
  width: 100vw;
`;

export default MainWorks;
