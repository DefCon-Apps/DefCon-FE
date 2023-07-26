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
          width={isDesktop ? 420 : 240}
          height={isDesktop ? 420 : 240}
          marginTop={2}
          anim={true}
        />
        <IntroStyle>
          <p>&quot;이거 님이 만드신 거였군요!&quot;</p>
          <h1>TEAM DEF:CON</h1>
          <IntroContents>
            당신의 일상 속 유용한 소프트웨어가
            <br />
            우리의 작품이었으면 좋겠습니다.
            <br />
            <br />
            2023년, 새로워진 대학생 프로그래밍팀 DEF:CON을 만나보세요.
          </IntroContents>
        </IntroStyle>
      </TitleContentsStyle>
      <ScrollIconStyle>
        <FontAwesomeIcon icon={faAngleDoubleDown} color="#4C6170" size="3x" />
      </ScrollIconStyle>
    </MainTitleStyle>
  );
};

const MainTitleStyle = styled.div`
  font-family: "Noto Sans KR";

  width:70vw;
  height: 100%;

  padding-top: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 820px) {
    // iPad Air (820 * 1180) 이하의 기기에서 적용될 스타일
    padding-top: 10rem;
    height: 50%;
  }

  @media screen and (max-width: 414px) {
    // iPhone XR (414 * 896) 이하의 기기에서 적용될 스타일
    padding-top: 10rem;
    height: 90vh;
  }
`;

const TitleContentsStyle = styled.div`
  /* width: 65%; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 820px) {
    // iPad Air (820 * 1180) 이하의 기기에서 적용될 스타일
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

const IntroStyle = styled.div`
  margin-left: 10rem;
  padding-top: 2rem;
  text-align: right;
  p{
    font-size: 1.5rem;
    font-weight: 100;
  }
  h1 {
    font-size: 6rem;
    font-weight: 900;
    letter-spacing: -0.1rem;
  }

  @media screen and (max-width: 820px) {
    // iPad Air (820 * 1180) 이하의 기기에서 적용될 스타일
    margin-left: 0rem;
    padding-top: 5rem;
    text-align: center;
    p{
      font-size: 1.5rem;
    }

    h1{
      font-size: 5rem;
    }
  }


  @media screen and (max-width: 414px) {
    // iPhone XR (414 * 896) 이하의 기기에서 적용될 스타일
    margin-left: 0rem;
    text-align: center;
    p{
      font-size: 1.2rem;
    }

    h1{
      font-size: 4rem;
    }
  }
`;

const IntroContents = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 100;

  @media screen and (max-width: 820px) {
    // iPad Air (820 * 1180) 이하의 기기에서 적용될 스타일
    width: 80vw;
    font-size: 2rem;
    line-height: 2.5rem;
  }

  @media screen and (max-width: 414px) {
    // iPhone XR (414 * 896) 이하의 기기에서 적용될 스타일
    width: 75vw;
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
  
`;

const ScrollIconStyle = styled.div`
  padding-top: 15rem;
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
