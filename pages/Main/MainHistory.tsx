import styled from "styled-components";
import Link from "next/link";
import Dbutton from "../../src/Common/Dbutton";

const MainHistory = () => {
  return (
    <MainHistoryWrapper>
      <HistoryTitle>
        <h1>
          시작은 성보고 꼭대기
          <br />
          컴퓨터실에서부터
        </h1>
      </HistoryTitle>
      <HistoryContents>
        <HistoryImage src={"/Images/defcon_history.jpeg"} />
        <HistoryContentsBackground>
          <p>
            DEF:CON은 성보고등학교 컴퓨터실에서 시작된 동아리로 소프트웨어를
            좋아하는 학생들이 모여 재미있는 일을 하던 데에서 시작되었습니다.
            학교 행사에도 적극적으로 참여해 우리가 좋아하는 것들을 다른 학생들과
            나눴죠.
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
                width={11}
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
                width={11}
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
  flex-direction: column;
  justify-content: center;
  font-family: "Noto Sans KR";

  @media screen and (min-width: 1024px) {
    width: 70vw;
  }
`;

const HistoryTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  h1 {
    @media screen and (min-width: 1280px) {
      align-items: flex-start;
      flex: 2;
      text-align: left;
      font-size: 55pt;
      letter-spacing: -7px;
    }

    @media screen and (min-width: 1024px) and (max-width: 1279px) {
      align-items: center;
      text-align: center;
      font-size: 45pt;
      letter-spacing: -5px;
    }

    @media screen and (max-width: 1023px) {
      text-align: center;
      font-size: 32pt;
      letter-spacing: -2px;
    }
  }
`;

const HistoryContents = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 100;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    align-items: center;
  }

  @media screen and (max-width: 1279px) {
    flex-direction: column;
    align-items: center;
  }

  p {
    @media screen and (min-width: 1280px) {
      flex: 1;
      text-align: right;
      font-size: 20pt;
      letter-spacing: -1px;
      margin: 35px 40px 40px 40px;
    }

    @media screen and (min-width: 1024px) and (max-width: 1279px) {
      margin: 2rem 0rem 2rem 0rem;
      text-align: center;
      font-size: 20pt;
      letter-spacing: -1px;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
      font-size: 18pt;
      margin: 2rem 0 2rem 0;
      text-align: center;
    }

    @media screen and (max-width: 768px) {
      text-align: center;
      margin: 2rem 2rem 2rem 2rem;
      font-size: 16pt;
      letter-spacing: -1px;
    }
  }
`;

const HistoryImage = styled.img`
  border-radius: 2rem;
  @media screen and (min-width: 1280px) {
    flex: 1;
    width: 500px;
  }

  @media screen and (min-width: 1024px) and (max-width: 1279px) {
    margin-top: 2vh;
    width: 400px;
  }

  @media screen and (max-width: 1023px) {
    margin-top: 2vh;
    width: 400px;
  }

  @media screen and (max-width: 768px) {
    width: 350px;
  }
`;

const HistoryButton = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0rem 0rem 0rem;

  @media screen and (min-width: 1280px) {
    padding: 0px 35px 50px 0px;
    justify-content: flex-end;
  }

  @media screen and (max-width: 1279px) {
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    margin: 1rem 1rem 0rem 1rem;
  }
`;

const HistoryContentsBackground = styled.div`
  @media screen and (min-width: 1280px) {
    margin-left: 50px;
    border-radius: 2rem;
    background-color: #c7e7ff;
  }
`;

export default MainHistory;
