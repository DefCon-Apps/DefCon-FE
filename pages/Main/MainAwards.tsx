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

interface Props {
  isDesktop: boolean;
}

const tmpEventData: MainEventData = {
  title: "집에 가고 싶지 않으십니까?",
  content:
    "저는 지금 API 연동을 하고 있는데요 먼가 하기 싫습니다. 아뇨 그렇P다구요",
  image: "asdfasdf",
};

const MainAwards = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width:768px)",
  });
  const [mainEvent, setMainEvent] = useState(tmpEventData);

  useEffect(() => {
    API.getMainEventData().then((apiResult: any) => {
      setMainEvent(apiResult);
    });
  }, []);

  return (
    <MainAwardsStyle isDesktop={isDesktop}>
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
          <AwardsTitle isDesktop={isDesktop}>
            <h1>{mainEvent.title}</h1>
            <AwardsImage src={mainEvent.image} isDesktop={isDesktop}></AwardsImage>
          </AwardsTitle>
        </>
      ) : (
        <>
          <AwardsTitle isDesktop={isDesktop}>
            <h1>{mainEvent.title}</h1>
            <AwardsImage src={mainEvent.image} isDesktop={isDesktop}></AwardsImage>
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

const MainAwardsStyle = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => (props.isDesktop ? "row" : "column")};
  justify-content: center;
  height: 100vh;
  font-family: "Noto Sans KR";
  margin-bottom: 200px;
`;

const AwardsTitle = styled.div<Props>`
  display: flex;
  flex-direction: column;
  margin-left: ${props => props.isDesktop ? "10vw" : "0"};

  h1 {
    text-align: ${(props) => (props.isDesktop ? "right" : "center")};
    font-size: ${(props) => (props.isDesktop ? "55pt" : "40pt")};
    letter-spacing: ${(props) => (props.isDesktop ? "-7px" : "-5px")};
    color: ${(props) => (props.isDesktop ? "#fff" : "#000")};
  }
`;

const AwardsImage = styled.img<Props>`
  width: ${props => props.isDesktop ? "600px" : "400px"};
  height: ${props => props.isDesktop ? "400px" : "300px"};
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
