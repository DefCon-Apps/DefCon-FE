import styled from "styled-components";
import Link from "next/link";
import Dbutton from "../../src/Common/Dbutton";
import BackgroundCard from "../../src/Common/BackgroundCard";

const MainHistory = () => {
  return (
    <MainHistoryWrapper>
        <HistoryTitle>
          <h1>
            시작은 성보고 꼭대기
            <br />
            컴퓨터실에서부터
          </h1>
          <HistoryImage src={"/Images/defcon_history.jpeg"} />
        </HistoryTitle>
        <HistoryContents>
          <HistoryContentsBackground>
            <p>
              DEF:CON은 성보고등학교 컴퓨터실에서 시작된 동아리로 소프트웨어를
              좋아하는 학생들이 모여 재미있는 일을 하던 데에서 시작되었습니다.
              학교 행사에도 적극적으로 참여해 우리가 좋아하는 것들을 다른
              학생들과 나눴죠.
            </p>
            <HistoryButton>
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
          </HistoryContentsBackground>
        </HistoryContents>
    </MainHistoryWrapper>
  );
};

const MainHistoryWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  font-family: "Noto Sans KR";

  @media screen and (min-width: 769px) {
    width: 80%;
    flex-direction: row;
    margin-bottom: 200px;
    margin-left: 64px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 300px;
  }
`;


const HistoryTitle = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1280px) {
    align-items: flex-start;
  }
  align-items: center;
  h1 {
    @media screen and (min-width: 1280px) {
      width: 100%;
      text-align: left;
      font-size: 55pt;
      letter-spacing: -7px;
    }

    text-align: center;
    font-size: 40pt;
    letter-spacing: -5px;

    @media screen and (max-width: 768px) {
      margin-bottom: 3vh;
    }
  }
`;

const HistoryImage = styled.img`
  @media screen and (min-width: 1280px) {
    width: 600px;
  }
  width: 400px;
  margin-top: 2vh;
  border-radius: 20px;
`;

const HistoryButton = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (min-width: 769px) {
    justify-content: right;
    padding: 0px 64px 64px 0px;
  }
  justify-content: center;
  margin: 0.5rem 0rem 0rem 0rem;
`;

const HistoryContents = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 769px) {
    align-items: flex-end;
    margin: 192px 0 0 64px;
    padding-right: 15px;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }

  p {
    @media screen and (min-width: 769px) {
      text-align: right;
      font-size: 18pt;
      margin-right: 0px;
      padding: 64px 64px 16px 64px;
    }

    @media screen and (max-width: 768px) {
      text-align: center;
      font-size: 15pt;
      margin: 64px 16px 64px 16px;
    }
    font-weight: 300;
    
  }
`;

const HistoryContentsBackground = styled.div`
  @media screen and (min-width: 769px) {
    border-radius: 2rem 2rem 2rem 2rem;
    background-color: #c7e7ff;
  }
`;

export default MainHistory;
