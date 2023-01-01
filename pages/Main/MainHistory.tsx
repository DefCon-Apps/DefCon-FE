import styled from "styled-components";
import Link from "next/link";
import Dbutton from "../../src/Common/Dbutton";
import MainRectangle from "./MainRectangle";

const MainHistory = () => {
  return (
    <>
    <MainRectangle/>
    <MainHistoryWrapper>
      <HistoryTitle>
        <h1>
          시작은 성보고 꼭대기<br />
          컴퓨터실에서부터
        </h1>
        <HistoryImage></HistoryImage>
      </HistoryTitle>
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

const HistoryImage = styled.div`
  width: 36rem;
  height: 24rem;
  margin-top: 2rem;
  border-radius: 1.5rem;
  background-color: grey;
`;
//추후 삽입될 이미지 확정시 img에 대한 스타일로 변경 필요

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
  }
`;
export default MainHistory;
