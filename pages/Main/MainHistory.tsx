import styled from "styled-components";
import Link from "next/link";
import Dbutton from "../../src/Common/Dbutton";
import BackgroundCard from "../../src/Common/BackgroundCard";

const MainHistory = () => {
  return (
    <MainHistoryContainer>
      <MainHistoryWrapper>
        <HistoryTitle>
          <h1>
            시작은 성보고 꼭대기
            <br />
            컴퓨터실에서부터
          </h1>
          <HistoryImage src={"/Images/testImage.png"} />
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
            DEF:CON은 성보고등학교 컴퓨터실에서 시작된 동아리로
            소프트웨어를 좋아하는 학생들이 모여 재미있는 일을 하던
            데에서 시작되었습니다. 학교 행사에도 적극적으로 참여해
            우리가 좋아하는 것들을 다른 학생들과 나눴죠.
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
        </HistoryContents>
      </MainHistoryWrapper>
    </MainHistoryContainer>
  );
};

const MainHistoryContainer = styled.div`
 @media all and (min-width: 1280px) {
        width: 1400px;
    }
    
    /* 노트북 & 테블릿 가로 (해상도 1024px ~ 1279px)*/ 
    @media all and (min-width:1024px) and (max-width:1279px) {
        width: 1024px;
    }   
    
    /* 테블릿 가로 (해상도 768px ~ 1023px)*/ 
    @media all and (min-width:768px) and (max-width:1023px) {
        width: 768px;
    } 
    
    /* 모바일 가로 & 테블릿 세로 (해상도 480px ~ 767px)*/ 
    @media all and (min-width:480px) and (max-width:767px) {
        width: 480px;
    } 
    
    /* 모바일 세로 (해상도 ~ 479px)*/ 
    @media all and (max-width:479px) {
        width: 360px;
    }
  
`;
const MainHistoryWrapper = styled.div`
  display: flex;
  @media all and (min-width: 1280px) {
    flex-direction: row;
  }
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: "Noto Sans KR";
  margin-bottom: 200px;
`;

const HistoryTitle = styled.div`
  display: flex;
  flex-direction: column;
  @media all and (min-width: 1280px) {
    align-items: flex-start;
  }
  align-items: center;
  h1 {
    @media all and (min-width: 1280px) {
      text-align: left;
      font-size:55pt;
      letter-spacing: -7px;
    }
    text-align: center;
    font-size: 40pt;
    letter-spacing: -5px;
  }
`;

const HistoryImage = styled.img`
  @media all and (min-width: 1280px) {
    width: 600px;
  }
  width: 400px;
  margin-top: 2vh;
  border-radius: 20px;
`;

const HistoryButton = styled.div`
  display: flex;
  flex-direction: row;
  @media all and (min-width: 1280px) {
    justify-content: right;
  }
  justify-content: center;
  margin: 0.5rem 0rem 0rem 0rem;
`;

const HistoryContents = styled.div`
  @media all and (min-width: 1280px) {
    margin: 200px 0px 0px 160px;
  }
  margin:10px 0px 0px 0px;

  p {
    @media all and (min-width: 1280px) {
      width: 34vw;
      text-align: right;
      font-size: 18pt;
    } 
    width: 90vw;
    text-align: center;
    font-size: 15pt;
    font-weight: 300;
  }
`;

export default MainHistory;
