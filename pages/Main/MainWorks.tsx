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
            소프트웨어가 사용될 수 있다면 우리는 뭐든 재미있게 갖고 놀 수
            있습니다.
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
  width: 65vw;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin: 10vh 0vh 20vh 0vh;

  @media screen and (max-width: 820px) {
    // iPad Air (820 * 1180) 이하의 기기에서 적용될 스타일
    margin: 10vh 0vh 10vh 0vh;
  }
`;

const MainWorksContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const WorksTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    text-align: left;
    font-size: 5rem;
    letter-spacing: -7px;
  }

  p {
    width: 100%;
    font-weight: 100;
    margin-top: 2vh;
    font-size: 1.5rem;
    text-align: left;
  }

  @media screen and (max-width: 820px) {
    // iPad Air (820 * 1180) 이하의 기기에서 적용될 스타일
    width: 100%;
    justify-content: center;
    align-items: center;

    h1 {
      text-align: center;
      font-size: 4rem;
      letter-spacing: -5px;
    }

    p {
      width: 100%;
      margin: 3vh 0vh 3vh 0vh;
      font-size: 2rem;
      text-align: center;
    }
  }

  @media screen and (max-width: 414px) {
    // iPhone XR (414 * 896) 이하의 기기에서 적용될 스타일
    h1 {
      text-align: center;
      font-size: 2.3rem;
      letter-spacing: -2px;
    }

    p {
      text-align: center;
      font-size: 1.2rem;
    }
  }
`;

const ScrollMenuWrapper = styled.div`
  width: 80vw;
  margin-left: -5vw;
  overflow-x: scroll;
  margin-top: 5vh;

  @media screen and (max-width: 820px) {
    // iPad Air (820 * 1180) 이하의 기기에서 적용될 스타일
    width: 80vw;
  }

  @media screen and (max-width: 414px) {
    // iPhone XR (414 * 896) 이하의 기기에서 적용될 스타일
    width: 80vw;
  }
`;

const StyledScrollMenu = styled(ScrollMenu)`
  width: 100%;
`;

export default MainWorks;
