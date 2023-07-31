import styled from "styled-components";
import Crab from "../../src/Common/Crab";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

const CrabIntro = () => {
  const desktop = useMediaQuery({
    query: "(min-width:1280px)",
  });
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    if (!desktop) setIsDesktop(false);
    else setIsDesktop(true);
  }, [desktop]);

  return (
    <CrabIntroWrapper>
      <CrabIntroContents>
        <CrabIntroDesc>
          <p>
            DEF:CON의 마스코트인 DEF:CON CRAB은 Windows 10의 블루스크린에서
            착안하였습니다.
            <br />
            <br />
            코딩을 하다보면 웃음을 지을 때보단 울상일 때가 더 많은 우리의
            표정과도 비슷한 DEF:CON CRAB은 DEF:CON의 초창기 로고부터 유지되어온
            DEF:CON의 헤리티지입니다.
          </p>
        </CrabIntroDesc>
        <CrabIntroTitle>
          <h1>
            우리의 헤리티지
            <br />
            DEF:CON CRAB
          </h1>
        </CrabIntroTitle>
      </CrabIntroContents>
      <CrabIntroLogoWrapper>
        <LogoHistoryWrapper>
          <Logo src="/Images/firstLogo.svg" />
          <Logo src="/Images/preLogo.svg" />
          <Logo src="/Images/mainLogo.svg" />
        </LogoHistoryWrapper>
        <Crab
          width={isDesktop ? 240 : 180}
          height={isDesktop ? 240 : 180}
          marginTop={0}
          anim={true}
        />
      </CrabIntroLogoWrapper>
    </CrabIntroWrapper>
  );
};

const CrabIntroWrapper = styled.div`
  width: 1030px;
  height: 100vh;
  padding-top: 10em;
  margin-bottom: 10em;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* 노트북 & 테블릿 가로 (해상도 1024px ~ 1279px)*/
  @media all and (min-width: 1024px) and (max-width: 1279px) {
    width: 700px;
    padding-top: 1em;
    margin-bottom: 3em;
  }

  /* 테블릿 가로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 500px;
    padding-top: 25em;
    margin-bottom: 30em;
  }

  /* 모바일 가로 & 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
    width: 400px;
    padding-top: 25em;
    margin-bottom: 30em;
  }

  /* 모바일 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    width: 400px;
    padding-top: 20em;
    margin-bottom: 25em;
  }
`;

const CrabIntroContents = styled.div`
  width: 100%;
  margin-bottom: 5em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  /* 테블릿 가로 (해상도 768px ~ 1023px)*/
  @media all and (max-width: 1023px) {
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
  }
`;

const CrabIntroTitle = styled.div`
  width: 60%;
  height: 40%;

  & > h1 {
    text-align: right;
    font-size: 4.5em;
    letter-spacing: -7px;
  }

  /* 노트북 & 테블릿 가로 (해상도 1024px ~ 1279px)*/
  @media all and (min-width: 1024px) and (max-width: 1279px) {
    & > h1 {
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
      font-size: 3em;
      letter-spacing: -5px;
    }
  }

  /* 모바일 가로 & 세로 & 테블릿 세로 ( ~ 767px)*/
  @media all and (max-width: 767px) {
    width: 100%;

    & > h1 {
      text-align: center;
      font-size: 2.5em;
      letter-spacing: -5px;
    }
  }
`;

const CrabIntroDesc = styled.div`
  width: 65%;

  & > p {
    font-size: 1.5em;
    font-weight: 100;
    text-align: left;
  }

  /* 노트북 & 테블릿 가로 (해상도 1024px ~ 1279px)*/
  @media all and (min-width: 1024px) and (max-width: 1279px) {
    width: 70%;

    & > p {
      font-size: 1em;
    }
  }

  /* 테블릿 가로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 90%;

    & > p {
      font-size: 1.2em;
      text-align: center;
    }
  }

  /* 모바일 가로 & 세로 & 테블릿 세로 & 테블릿 가로 (해상도 768px ~ 1023px)*/
  @media all and (max-width: 1023px) {
    width: 90%;

    & > p {
      margin-top: 1.2em;
      font-size: 1.2em;
      text-align: center;
    }
  }
`;

const CrabIntroLogoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  /* 모바일 가로 & 세로 & 테블릿 세로 & 테블릿 가로 (해상도 ~ 1023px)*/
  @media all and (max-width: 1023px) {
    flex-direction: column-reverse;
  }
`;

const LogoHistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  /* 노트북 & 테블릿 가로 & 모바일 가로 & 모바일 세로 & 테블릿 세로 & 테블릿 가로  (해상도  ~ 1279px)*/
  @media all and (max-width: 1023px) {
    margin-top: 5em;
  }
`;

const Logo = styled.img`
  width: 23em;
  margin-bottom: 3em;
  filter: drop-shadow(1px 1px 3px grey);

  /* 노트북 & 테블릿 가로 & 모바일 가로 & 모바일 세로 & 테블릿 세로 & 테블릿 가로  (해상도  ~ 1279px)*/
  @media all and (max-width: 1279px) {
    width: 15em;
  }
`;

export default CrabIntro;
