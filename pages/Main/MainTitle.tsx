import Crab from "../../src/Common/Crab";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

const MainTitle = () => {
  const desktop = useMediaQuery({
    query: "(min-width:1208px)",
  });
  const [isDesktop, setDesktop] = useState(false);

  useEffect(() => {
    if (desktop) setDesktop(true);
  }, [desktop]);

  return (
    <MainTitleStyle>
      <TitleContentsStyle>
        <Crab
          width={isDesktop ? 18 : 12}
          height={isDesktop ? 18 : 12}
          marginTop={2}
        />
        <IntroStyle>
          <p>&quot;이거 님이 만드신 거였군요!&quot;</p>
          <h1>TEAM DEF:CON</h1>
          <p id="intro">
            당신의 일상 속 유용한 소프트웨어가
            <br />
            우리의 작품이었으면 좋겠습니다.
            <br />
            <br />
            2023년, 새로워진 대학생 프로그래밍팀 DEF:CON을 만나보세요.
          </p>
        </IntroStyle>
      </TitleContentsStyle>
      <ScrollIconStyle>
        <FontAwesomeIcon icon={faAngleDoubleDown} color="#4C6170" size="3x" />
      </ScrollIconStyle>
    </MainTitleStyle>
  );
};

const MainTitleStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans KR";
  height: 100vh;
`;

const TitleContentsStyle = styled.div`
  display: flex;
  margin-top: 20px;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    text-align: right;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  h1 {
    font-weight: bolder;
    letter-spacing: -5px;
    @media screen and (min-width: 1280px) {
      font-size: 70pt;
    }

    @media screen and (max-width: 768px) {
      font-size: 40pt;
    }
  }

  p {
    font-weight: 300;
    letter-spacing: -1px;

    @media screen and (min-width: 1280px) {
      font-size: 25pt;
    }

    @media screen and (max-width: 768px) {
      font-size: 15pt;
    }
  }

  #intro {
    font-weight: 300;

    @media screen and (min-width: 1280px) {
      font-size: 20pt;
    }

    @media screen and (max-width: 768px) {
      width: 85vw;
      margin-top: 2vh;
      margin-bottom: 2vh;
      font-size: 15pt;
    }
  }
`;

const IntroStyle = styled.div`
  letter-spacing: 0.1rem;
  @media screen and (min-width: 1280px) {
    margin: 5px 0px 0px 100px;
    font-size: 25px;
  }
  margin: 100px 0px 0px 0px;
  font-size: 10px;
`;

const ScrollIconStyle = styled.div`
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

  @media screen and (min-width: 1280px) {
    margin-top: 180px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
  transform: translatey(0px);
  animation: float 2s ease-in-out infinite;
`;

export default MainTitle;
