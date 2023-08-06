import styled from "styled-components";
import Link from "next/link";
import Dbutton from "../../src/Common/Dbutton";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const MainHistory = () => {
  const desktop = useMediaQuery({
    query: "(min-width:1280px)",
  });
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    if (!desktop) setIsDesktop(false);
    else setIsDesktop(true);
  }, [desktop]);

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
              href="https://play.google.com/store/apps/details?id=com.sungbospot.lunch&hl=ko&gl=US"
              target="_blank"
              rel="noreferrer"
            >
              <Dbutton
                text={"성보고 App"}
                textColor={"#FFFFFF"}
                textSize={isDesktop ? 20 : 18}
                width={isDesktop ? 11 : 9}
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
                textSize={isDesktop ? 20 : 18}
                width={isDesktop ? 11 : 9}
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
  width: 1030px;
  padding-top: 10rem;
  margin-bottom: 5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: "Noto Sans KR";

  /* 노트북 & 테블릿 가로 (해상도 1024px ~ 1279px)*/
  @media all and (min-width: 1024px) and (max-width: 1279px) {
    width: 700px;
  }

  /* 테블릿 가로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 500px;
  }

  /* 모바일 가로 & 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
    width: 400px;
  }

  /* 모바일 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    width: 400px;
  }
`;

const HistoryTitle = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  & > h1 {
    flex: 1;
    text-align: left;
    font-size: 4.5em;
    letter-spacing: -7px;
  }

  /* 노트북 & 테블릿 가로 (해상도 1024px ~ 1279px)*/
  @media all and (min-width: 1024px) and (max-width: 1279px) {
    & > h1 {
      flex: 1;
      text-align: left;
      font-size: 2.8em;
      letter-spacing: -5px;
    }
  }

  /* 테블릿 가로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 100%;

    & > h1 {
      text-align: center;
      font-size: 3.5em;
      letter-spacing: -5px;
    }
  }

  /* 모바일 가로 & 세로 & 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
    width: 100%;

    & > h1 {
      text-align: center;
      font-size: 3em;
      letter-spacing: -2px;
    }
  }

  /* 모바일 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    width: 100%;

    & > h1 {
      text-align: center;
      font-size: 2.5em;
      letter-spacing: -2px;
    }
  }
`;

const HistoryContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  p {
    flex: 1;
    text-align: right;
    font-size: 1.5em;
    line-height: 1.5em;
    letter-spacing: -1px;
    font-weight: 100;
    margin-bottom: 1em;
  }

  /* 노트북 & 테블릿 가로 (해상도 1024px ~ 1279px)*/
  @media all and (min-width: 1024px) and (max-width: 1279px) {
    p {
      flex: 1;
      text-align: right;
      font-size: 1em;
      line-height: 1.5em;
      letter-spacing: -1px;
      font-weight: 100;
      margin-bottom: 1em;
    }
  }

  /* 테블릿 가로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
    height: 80%;
    flex-direction: column;

    p {
      flex: 1;
      text-align: center;
      font-size: 1.5em;
      line-height: 1.5em;
      letter-spacing: -1px;
      font-weight: 100;
      padding-top:1em;
    }
  }

  /* 모바일 가로 & 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
    height: 80%;
    flex-direction: column;

    p {
      flex: 1;
      text-align: center;
      font-size: 1.5em;
      line-height: 1.5em;
      letter-spacing: -1px;
      font-weight: 100;
      padding-top:1em;
    }

  }

  /* 모바일 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    height: 80%;
    flex-direction: column;

    p {
      flex: 1;
      text-align: center;
      font-size: 1.2em;
      line-height: 1em;
      letter-spacing: -1px;
      font-weight: 100;
      padding-top: 1em;
    }
  }
`;

const HistoryImage = styled.img`
  border-radius: 2rem;
  width: 45%;

  /* 노트북 & 테블릿 가로 (해상도 1024px ~ 1279px)*/
  @media all and (min-width: 1024px) and (max-width: 1279px) {
    border-radius: 1em;
    width: 50%;
  }

  /* 테블릿 가로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
    border-radius: 1.5em;
    margin-top: 1em;
    width: 90%;
  }

  /* 모바일 가로 & 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
    border-radius: 1.5em;
    margin-top: 1em;
    width: 90%;
  }

  /* 모바일 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    border-radius: 1em;
    margin: 1em 0em 0.5em 0em;
    width: 80%;
  }
`;

const HistoryButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

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
