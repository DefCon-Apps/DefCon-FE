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
  width: 1030px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15rem;
  margin-bottom: 20rem;

  /* 노트북 & 테블릿 가로 (해상도 1024px ~ 1279px)*/
  @media all and (min-width: 1024px) and (max-width: 1279px) {
    width: 700px;
  }

  /* 테블릿 가로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
    padding-top: 8rem;
    width: 500px;
  }

  /* 모바일 가로 & 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
    width: 400px;
  }

  /* 모바일 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    width: 400px;
    margin-bottom: 10rem;
  }
`;

const MainWorksContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  /* 테블릿 가로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
    align-items: center;
  }

  /* 모바일 가로 & 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
    width: 400px;
  }

  /* 모바일 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    width: 400px;
  }
`;

const WorksTitle = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > h1 {
    flex: 1;
    text-align: left;
    font-size: 4.5em;
    letter-spacing: -7px;
  }

  & > p {
    font-weight: 100;
    font-size: 1.5em;
    text-align: left;
  }

  /* 노트북 & 테블릿 가로 (해상도 1024px ~ 1279px)*/
  @media all and (min-width: 1024px) and (max-width: 1279px) {
    & > h1 {
      flex: 1;
      text-align: left;
      font-size: 2.8em;
      letter-spacing: -5px;
    }

    & > p {
      font-weight: 100;
      font-size: 1em;
      text-align: left;
    }
  }

  /* 테블릿 가로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    align-items: center;
    & > h1 {
      flex: 1;
      text-align: center;
      font-size: 3.5em;
      letter-spacing: -5px;
    }

    & > p {
      font-weight: 100;
      font-size: 1em;
      letter-spacing: -1px;
      text-align: left;
    }
  }

  /* 모바일 가로 & 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
    width: 100%;
    align-items: center;
    & > h1 {
      flex: 1;
      text-align: center;
      font-size: 3.5em;
      letter-spacing: -5px;
    }

    & > p {
      width: 90%;
      font-weight: 100;
      font-size: 1.5em;
      letter-spacing: -1px;
      text-align: center;
    }
  }

  /* 모바일 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    width: 100%;
    align-items: center;
    
    & > h1 {
      flex: 1;
      text-align: center;
      font-size: 2.5em;
      letter-spacing: -5px;
    }

    & > p {
      width: 90%;
      font-weight: 100;
      font-size: 1.2em;
      letter-spacing: -1px;
      text-align: center;
    }
  }
`;

const ScrollMenuWrapper = styled.div`
  width: 100%;
  margin: 1em 0em 0em -3em;
  overflow-x: scroll;

  /* 노트북 & 테블릿 가로 (해상도 1024px ~ 1279px)*/
  @media all and (min-width: 1024px) and (max-width: 1279px) {
    img {
      width: calc(100vw / 4);
      height: calc(100vh / 5);
    }

    h1 {
      font-size: 2em;
    }
  }

  /* 테블릿 가로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
    h1 {
      font-size: 2em;
    }
  }

  /* 모바일 가로 & 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
    width: 100vw;
    margin: 1em 0em 0em -3em;
    img {
      width: calc(100vw / 3);
      height: calc(100vh / 7);
    }

    h1 {
      font-size: 1.5em;
    }
  }

  /* 모바일 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    width: 100vw;
    margin: 1em 0em 0em -3em;
    img {
      width: calc(100vw / 3);
      height: calc(100vh / 8.5);
    }

    h1 {
      font-size: 1.5em;
    }

  }
`;

const StyledScrollMenu = styled(ScrollMenu)`
  width: 100%
`;

export default MainWorks;
