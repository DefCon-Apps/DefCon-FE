import Crab from "../../src/Common/Crab";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

const MainTitle = () => {
  const desktop = useMediaQuery({
    query: "(min-width:1280px)",
  });
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    if (!desktop) setIsDesktop(false);
    else setIsDesktop(true);
  }, [desktop]);

  return (
    <MainTitleStyle>
      <TitleContentsStyle>
        <Crab
          width={isDesktop ? 360 : 240}
          height={isDesktop ? 360 : 240}
          marginTop={2}
          anim={true}
        />
        <IntroWrapper>
          <p>&quot;이거 님이 만드신 거였군요!&quot;</p>
          <h1>TEAM DEF:CON</h1>
          <p>
            당신의 일상 속 유용한 소프트웨어가
            <br />
            우리의 작품이었으면 좋겠습니다.
            <br />
            <br />
            2023년, 새로워진 대학생 프로그래밍팀 DEF:CON을 만나보세요.
          </p>
        </IntroWrapper>
      </TitleContentsStyle>
      <ScrollIconStyle>
        <FontAwesomeIcon icon={faAngleDoubleDown} color="#4C6170" size={isDesktop ? "3x" : "2x"} />
      </ScrollIconStyle>
    </MainTitleStyle>
  );
};

const MainTitleStyle = styled.div`
  width: 1030px;
  font-family: "Noto Sans KR";
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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

const TitleContentsStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media all and (min-width: 1024px) and (max-width: 1279px) {
  }

  /* 테블릿 가로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
  }

  /* 모바일 가로 & 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
  }

  /* 모바일 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
  }

  @media screen and (max-width: 820px) {
    // iPad Air (820 * 1180) 이하의 기기에서 적용될 스타일
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

const IntroWrapper = styled.div`
  width: 100%;
  text-align: right;
  margin-top: 5em;

  & > p {
    font-size: 1.5em;
    font-weight: 100;
    line-height: 1.5em;
  }

  & > h1 {
    font-size: 5em;
    font-weight: 900;
    letter-spacing: -0.1rem;
  }

  @media all and (min-width: 1024px) and (max-width: 1279px) {
    & > p {
      font-size: 1em;
    }

    & > h1 {
      font-size: 3em;
    }
  }

  /* 테블릿 가로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
  }

  /* 모바일 가로 & 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
  }

  /* 모바일 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
  }

  @media screen and (max-width: 820px) {
    // iPad Air (820 * 1180) 이하의 기기에서 적용될 스타일
    margin-left: 0rem;
    padding-top: 5rem;
    text-align: center;
    p {
      font-size: 1.5rem;
    }

    h1 {
      font-size: 5rem;
    }
  }
`;

const ScrollIconStyle = styled.div`
  padding-top: 15em;
  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }

  transform: translatey(0px);
  animation: float 2s ease-in-out infinite;

  @media all and (min-width: 1024px) and (max-width: 1279px) {
    padding-top: 10em;
  }

  @media screen and (max-width: 820px) {
    // iPad Air (820 * 1180) 이하의 기기에서 적용될 스타일
    padding-top: 5rem;
  }

  @media screen and (max-width: 414px) {
    // iPhone XR (414 * 896) 이하의 기기에서 적용될 스타일
    padding-top: 3rem;
  }
`;

export default MainTitle;
