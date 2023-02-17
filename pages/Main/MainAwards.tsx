import styled from "styled-components";
import Link from "next/link";
import Dbutton from "../../src/Common/Dbutton";
import * as API from "../../src/Common/API";
import { useState, useEffect } from "react";
import BackgroundCard from "../../src/Common/BackgroundCard";
import { useMediaQuery } from "react-responsive";

type MainEventData = {
  title: string;
  content: string;
  image: string;
};

const tmpEventData: MainEventData = {
  title: "집에 가고 싶지 않으십니까?",
  content:
    "저는 지금 API 연동을 하고 있는데요 먼가 하기 싫습니다. 아뇨 그렇P다구요",
  image: "asdfasdf",
};

const MainAwards = () => {
  const desktop = useMediaQuery({
    query: "(min-width:1208px)",
  });
  const [isDesktop, setDesktop] = useState(false);
  const [mainEvent, setMainEvent] = useState(tmpEventData);

  useEffect(() => {
    if (desktop) setDesktop(true);
    API.getMainEventData().then((apiResult: any) => {
      setMainEvent(apiResult);
    });
  }, [desktop]);

  return (
    <MainAwardsStyle>
      {isDesktop ? (
        <>
          <AwardsContents>
            <p>{mainEvent.content}</p>
            <AwardsButton>
              <Link
                href="https://github.com/yymin1022/SeoulHealing"
                target="_blank"
                rel="noreferrer"
              >
                <Dbutton
                  text={"SOUL REST GitHub"}
                  textColor={"#FFFFFF"}
                  textSize={20}
                  width={15}
                  height={3}
                  btnColor={"#001E2E"}
                  direction={"right"}
                />
              </Link>
            </AwardsButton>
          </AwardsContents>
          <AwardsTitle>
            <h1>{mainEvent.title}</h1>
            <AwardsImage src={mainEvent.image}></AwardsImage>
          </AwardsTitle>
        </>
      ) : (
        <>
          <AwardsTitle>
            <h1>{mainEvent.title}</h1>
            <AwardsImage src={mainEvent.image}></AwardsImage>
          </AwardsTitle>
          <AwardsContents>
            <p>{mainEvent.content}</p>
            <AwardsButton>
              <Link
                href="https://github.com/yymin1022/SeoulHealing"
                target="_blank"
                rel="noreferrer"
              >
                <Dbutton
                  text={"SOUL REST GitHub"}
                  textColor={"#FFFFFF"}
                  textSize={20}
                  width={15}
                  height={3}
                  btnColor={"#001E2E"}
                  direction={"right"}
                />
              </Link>
            </AwardsButton>
          </AwardsContents>
        </>
      )}

      <BackgroundCard
        color={"#35B6F7"}
        height={"35vh"}
        translateX={"52vw"}
        translateY={"-13vh"}
        type={"filled"}
      />
      <BackgroundCard
        color={"#00658F"}
        height={"35vh"}
        translateX={"50vw"}
        translateY={"-20vh"}
        type={"filled"}
      />

      <BackgroundCard
        color={"#00658F"}
        height={"35vh"}
        translateX={"-60vw"}
        translateY={"30.6vh"}
        type={"bordered"}
      />
    </MainAwardsStyle>
  );
};
const MainAwardsContainer = styled.div`
  @media all and (min-width: 1280px) {
    width: 1400px;
  }

  /* 노트북 & 테블릿 가로 (해상도 1024px ~ 1279px)*/
  @media all and (min-width: 1024px) and (max-width: 1279px) {
    width: 1024px;
  }

  /* 테블릿 가로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 768px;
  }

  /* 모바일 가로 & 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
    width: 480px;
  }

  /* 모바일 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    width: 360px;
  }
`;

const MainAwardsStyle = styled.div`
  display: flex;
  @media all and (min-width: 1280px) {
    flex-direction: row;
  }
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  font-family: "Noto Sans KR";
  margin-bottom: 200px;
`;

const AwardsTitle = styled.div`
  display: flex;
  flex-direction: column;
  @media all and (min-width: 1280px) {
    margin-left: 10vw;
  }

  h1 {
    @media all and (min-width: 1280px) {
      text-align: right;
      font-size: 55pt;
      letter-spacing: -7px;
      color: #fff;
    }
    text-align: center;
    font-size: 40pt;
    letter-spacing: -5px;
    color: #000;
  }
`;

const AwardsImage = styled.img`
  @media all and (min-width: 1280px) {
    width: 600px;
    height: 400px;
  }
  width: 400px;
  height: 300px;
  margin-top: 20px;
  border-radius: 20px;
`;

const AwardsButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 0.5rem;
`;

const AwardsContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 2vh;

  p {
    text-align: center;
    font-size: 18pt;
    font-weight: 300;
  }
`;

export default MainAwards;
