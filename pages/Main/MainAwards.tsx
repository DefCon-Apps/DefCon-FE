import styled from "styled-components";
import Link from "next/link";
import Dbutton from "../../src/Common/Dbutton";

const MainAwards = () => {
  return (
    <MainHistoryStyle>
      <HistoryContents>
          <p>
            DEF:CON은 매년 &apos;스마트 서울 모바일 앱 공모전&apos; 수상을<br />
            목표로 꾸준히 참가해왔습니다.<br />
            2019년, 마지막으로 열린 공모전에서 우리는 마침내 오랜<br />
            염원을 이루고 219팀 중 11위를 달성하여 장려상을 수상<br />
            하는 쾌거를 이뤘습니다.<br />
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
          DEF:CON의 오랜 염원<br />
          마침내 이루다
        </h1>
        <HistoryImage></HistoryImage>
      </HistoryTitle>
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
  h1 {
    text-align: right;
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
export default MainAwards;
