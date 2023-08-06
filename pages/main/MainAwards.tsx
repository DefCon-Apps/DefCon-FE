import styled from "styled-components";
import Link from "next/link";
import Dbutton from "../../src/Common/Dbutton";
import * as API from "../../src/Common/API";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

type MainEventData = {
  title: string;
  content: string;
  image: string;
};

const tmpEventData: MainEventData = {
  title: "",
  content: "",
  image: "",
};

const MainAwards = () => {
  const desktop = useMediaQuery({
    query: "(min-width:1280px)",
  });
  const [mainEvent, setMainEvent] = useState(tmpEventData);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    if (!desktop) setIsDesktop(false);
    else setIsDesktop(true);
  }, [desktop]);

  useEffect(() => {
    API.getMainEventData().then((apiResult: any) => {
      setMainEvent(apiResult);
    });
  }, []);

  return (
    <MainAwardsWrapper>
      <AwardsTitle>
        <h1>{mainEvent.title}</h1>
      </AwardsTitle>
      <AwardsContents>
        <AwardsContentsContext>
          <p>{mainEvent.content}</p>
          <AwardsButton>
            <Link
              href="https://github.com/yymin1022/SeoulHealing"
              target="_blank"
              rel="noreferrer"
            >
              <Dbutton
                text={"SOUL REST GitHub"}
                textColor={"#FFFFFF"}
                textSize={isDesktop ? 20 : 18}
                width={isDesktop ? 15 : 11}
                height={3}
                btnColor={"#001E2E"}
                direction={"right"}
              />
            </Link>
          </AwardsButton>
        </AwardsContentsContext>
        <AwardsImage src={mainEvent.image} />
      </AwardsContents>
    </MainAwardsWrapper>
  );
};

const MainAwardsWrapper = styled.div`
  width: 1030px;
  padding-top: 15rem;
  margin-bottom: 5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  font-family: "Noto Sans KR";

  /* 노트북 & 테블릿 가로 (해상도 1024px ~ 1279px)*/
  @media all and (min-width: 1024px) and (max-width: 1279px) {
    width: 700px;
  }

  /* 테블릿 가로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
    padding-top: 8rem;
    width: 500px;
  }

  /* 모바일 가로 & 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
    width: 400px;
  }

  /* 모바일 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    width: 100%;
    
    padding: 0 10px 0 10px;
  }
`;

const AwardsTitle = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;

  & > h1 {
    flex: 1;
    text-align: right;
    font-size: 4.5em;
    letter-spacing: -7px;
  }

  /* 노트북 & 테블릿 가로 (해상도 1024px ~ 1279px)*/
  @media all and (min-width: 1024px) and (max-width: 1279px) {
    & > h1 {
      flex: 1;
      text-align: right;
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

const AwardsContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  p {
    width: 90%;
    flex: 1;
    text-align: left;
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
      text-align: left;
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
    flex-direction: column-reverse;

    p {
      flex: 1;
      text-align: center;
      font-size: 1.5em;
      line-height: 1.5em;
      letter-spacing: -1px;
      font-weight: 100;
      padding-top: 1em;
    }
  }

  /* 모바일 가로 & 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
    height: 80%;
    flex-direction: column-reverse;

    p {
      flex: 1;
      text-align: center;
      font-size: 1.5em;
      line-height: 1.5em;
      letter-spacing: -1px;
      font-weight: 100;
      padding-top: 1em;
    }
  }

  /* 모바일 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    height: 80%;
    flex-direction: column-reverse;

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

const AwardsImage = styled.img`
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

const AwardsContentsContext = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 820px) {
    // iPad Air (820 * 1180) 이하의 기기에서 적용될 스타일
    align-items: center;
    margin-right: 0;
  }
`;

const AwardsButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

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

export default MainAwards;
