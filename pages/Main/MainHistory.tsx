import styled from "styled-components";
import Link from "next/link";
import Dbutton from "../../src/Common/Dbutton";
import BackgroundCard from "../../src/Common/BackgroundCard";
import { useMediaQuery } from "react-responsive";

interface Props {
  isDekstop: boolean;
}

const MainHistory = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width:768px)",
  });

  return (
    <>
      <MainHistoryWrapper isDekstop={isDesktop}>
        <HistoryTitle isDekstop={isDesktop}>
          <h1>
            시작은 성보고 꼭대기
            <br />
            컴퓨터실에서부터
          </h1>
          <HistoryImage src={"/Images/testImage.png"} isDekstop={isDesktop}/>
        </HistoryTitle>
        <BackgroundCard
          color={"#35B6F7"}
          height={"35vh"}
          translateX={"-65.5vw"}
          translateY={"-20vh"}
          type={"bordered"}
        />
        <BackgroundCard
          color={"#C7E7FF"}
          height={"35vh"}
          translateX={"50vw"}
          translateY={"11vh"}
          type={"filled"}
        />
        <HistoryContents isDekstop={isDesktop}>
          <p>
            DEF:CON은 성보고등학교 컴퓨터실에서 시작된 동아리로
            소프트웨어를 좋아하는 학생들이 모여 재미있는 일을 하던
            데에서 시작되었습니다. 학교 행사에도 적극적으로 참여해
            우리가 좋아하는 것들을 다른 학생들과 나눴죠.
          </p>
          <HistoryButton isDekstop={isDesktop}>
            <Link
              href="https://play.google.com/store/apps/details?id=com.defcon.sungbo&hl=ko&gl=US"
              target="_blank"
              rel="noreferrer"
            >
              <Dbutton
                text={"성보고 App"}
                textColor={"#FFFFFF"}
                textSize={20}
                width={12}
                height={3}
                btnColor={"#001E2E"}
                direction={"left"}
              />
            </Link>
            <Link
              href="https://sungbo.sen.hs.kr/"
              target="_blank"
              rel="noreferrer"
            >
              <Dbutton
                text={"성보고 알아보기"}
                textColor={"#FFFFFF"}
                textSize={20}
                width={12}
                height={3}
                btnColor={"#001E2E"}
                direction={"left"}
              />
            </Link>
          </HistoryButton>
        </HistoryContents>
      </MainHistoryWrapper>
    </>
  );
};

const MainHistoryWrapper = styled.div<Props>`
  display: flex;
  flex-direction: ${props => props.isDekstop ? "row" : "column"};
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: "Noto Sans KR";
`;

const HistoryTitle = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.isDekstop ? "flex-start" : "center"};
  h1 {
    text-align: ${props => props.isDekstop ? "left" : "center"};
    font-size: ${props => props.isDekstop ? "55pt" : "40pt"};
    letter-spacing: ${props => props.isDekstop ? "-7px" : "-5px"};
  }
`;

const HistoryImage = styled.img<Props>`
  width: ${props => props.isDekstop ? "600px" : "400px"};
  margin-top: 2vh;
  border-radius: 20px;
`;

const HistoryButton = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.isDekstop ? "right" : "center"};
  margin: 0.5rem 0rem 0rem 0rem;
`;

const HistoryContents = styled.div<Props>`
  margin-top: ${props => props.isDekstop ? "200px" : "10px"};
  margin-left: ${props => props.isDekstop ? "160px" : "0px"};

  p {
    width: ${props => props.isDekstop ? "34vw" : "90vw"};
    text-align: ${props => props.isDekstop ? "right" : "center"};
    font-size: ${props => props.isDekstop ? "18pt" : "15pt"};
    font-weight: 300;
  }
`;

export default MainHistory;
