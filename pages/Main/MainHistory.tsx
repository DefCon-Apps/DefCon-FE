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
  width: 70vw;
  height: 100vh;
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: "Noto Sans KR";

  @media screen and (max-width: 820px) {
    // iPad Air (820 * 1180) 이하의 기기에서 적용될 스타일
    align-items: center;
  }
`;

const HistoryTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  h1 {
    align-items: flex-start;
    flex: 1;
    text-align: left;
    font-size: 5rem;
    letter-spacing: -7px;
  }

  @media screen and (max-width: 820px) {
    // iPad Air (820 * 1180) 이하의 기기에서 적용될 스타일
    h1 {
      text-align: center;
      font-size: 4rem;
      letter-spacing: -5px;
    }
  }

  @media screen and (max-width: 414px) {
    // iPhone XR (414 * 896) 이하의 기기에서 적용될 스타일
    h1 {
      text-align: center;
      font-size: 2.2rem;
      letter-spacing: -2px;
    }
  }
`;

const HistoryContents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 100;

  p {
    flex: 1;
    text-align: right;
    font-size: 1.5rem;
    letter-spacing: -1px;
    margin: 35px 40px 40px 40px;
  }

  @media screen and (max-width: 820px) {
    // iPad Air (820 * 1180) 이하의 기기에서 적용될 스타일
    flex-direction: column;
    align-items: center;

    p {
      text-align: center;
      font-size: 2rem;
      letter-spacing: -1px;
    }
  }

  @media screen and (max-width: 414px) {
    // iPhone XR (414 * 896) 이하의 기기에서 적용될 스타일
    p {
      text-align: center;
      margin: 2rem 2rem 2rem 2rem;
      font-size: 1.2rem;
      letter-spacing: -1px;
    }
  }
`;

const HistoryImage = styled.img`
  border-radius: 2rem;
  width: 28vw;

  @media screen and (max-width: 820px) {
    // iPad Air (820 * 1180) 이하의 기기에서 적용될 스타일
    margin-top: 2vh;
    width: 45vw;
  }

  @media screen and (max-width: 414px) {
    // iPhone XR (414 * 896) 이하의 기기에서 적용될 스타일
    width: 60vw;
  }
`;

const HistoryButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0.5rem 0rem 0rem 0rem;
  padding: 0rem 3rem 2rem 0rem;

  @media screen and (max-width: 820px) {
    // iPad Air (820 * 1180) 이하의 기기에서 적용될 스타일
    padding: 0rem;
    justify-content: center;
  }

  @media screen and (max-width: 414px) {
    // iPhone XR (414 * 896) 이하의 기기에서 적용될 스타일
    margin: 1rem 1rem 0rem 1rem;
  }
`;

const HistoryContentsBackground = styled.div`
  width: 50%;
  margin-left: 2rem;
  
  @media screen and (max-width: 820px) {
    // iPad Air (820 * 1180) 이하의 기기에서 적용될 스타일
    width: 90%;
    margin-left: 0rem;
  }
`;

export default MainHistory;
