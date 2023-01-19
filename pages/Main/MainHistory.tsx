import styled from "styled-components";
import Link from "next/link";
import Dbutton from "../../src/Common/Dbutton";
import BackgroundCard from "../../src/Common/BackgroundCard";

const MainHistory = () => {
  return (
    <>
    <MainHistoryWrapper>
      <HistoryTitle>
        <h1>
          시작은 성보고 꼭대기<br />
          컴퓨터실에서부터
        </h1>
        <HistoryImage src={"/Images/testImage.png"}/>
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
      <HistoryContents>
          <p>
            DEF:CON은 성보고등학교 컴퓨터실에서 시작된 동아리로<br />
            소프트웨어를 좋아하는 학생들이 모여 재미있는 일을 하던<br />
            데에서 시작되었습니다. 학교 행사에도 적극적으로 참여해<br />
            우리가 좋아하는 것들을 다른 학생들과 나눴죠.<br />
          </p>
          <HistoryButton>
            <Link href="https://play.google.com/store/apps/details?id=com.defcon.sungbo&hl=ko&gl=US" target="_blank" rel="noreferrer">
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
            <Link href="https://sungbo.sen.hs.kr/" target="_blank" rel="noreferrer">
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

const MainHistoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: "Noto Sans KR";
`;

const HistoryTitle = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    text-align: left;
    font-size: 55pt;
    letter-spacing: -7px;
  }
`;

const HistoryImage = styled.img`
  width: 600px;
  height: 400px;
  margin-top: 2vh;
  border-radius: 20px;
`;

const HistoryButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin: 0.5rem 0rem 0rem 0rem;
`;

const HistoryContents = styled.div`
  margin-top: 12rem;
  margin-left: 8rem;

  p {
    text-align: right;
    font-size: 18pt;
    font-weight: 300;
    color: rbg(--foreground-rgb);
  }
`;

export default MainHistory;