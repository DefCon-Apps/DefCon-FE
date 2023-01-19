import styled from "styled-components";
import Link from "next/link";
import Dbutton from "../../src/Common/Dbutton";
import * as API from "../../src/Common/API";
import { useState, useEffect } from "react";
import BackgroundCard from "../../src/Common/BackgroundCard";



const tmpEventData: MainEventData = {
  title: "집에 가고 싶지 않으십니까?",
  content: "저는 지금 API 연동을 하고 있는데요 먼가 하기 싫습니다. 아뇨 그렇다구요",
  image: "asdfasdf"
}

const MainAwards = () => {
  const [mainEvent, setMainEvent] = useState(tmpEventData);

  useEffect(() => {
    API.getMainEventData().then((apiResult : any) => {
      setMainEvent(apiResult);
    });
  }, []);

  return (
    <MainHistoryStyle>
      <HistoryContents>
          <p>
            {mainEvent.content}
          </p>
          <HistoryButton>
            <Link href="https://github.com/yymin1022/SeoulHealing" target="_blank" rel="noreferrer">
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
          </HistoryButton>
      </HistoryContents>
      <HistoryTitle>
        <h1>
          {mainEvent.title} 
        </h1>
        <HistoryImage src={mainEvent.image}></HistoryImage>
      </HistoryTitle>
      
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
    </MainHistoryStyle>
  );
};

const MainHistoryStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: "Noto Sans KR";
  margin-bottom: 200px;
`;

const HistoryTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10vw;
  h1 {
    text-align: right;
    font-size: 55pt;
    letter-spacing: -7px;
    color: #fff;
  }
`;

const HistoryImage = styled.img`
  width: 36rem;
  height: 24rem;
  margin-top: 20px;
  border-radius: 20px;
`;

const HistoryButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-top: 0.5rem;
`;

const HistoryContents = styled.div`
  margin-top: 12rem;
  margin-right: 8rem;

  p {
    text-align: left;
    font-size: 18pt;
    font-weight: 300;
  }
`;

type MainEventData = {
  title: string,
  content: string,
  image: string
};

export default MainAwards;
