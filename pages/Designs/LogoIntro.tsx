import styled from "styled-components";
import BackgroundCard from "../../src/Common/BackgroundCard";

const LogoIntro = () => {
  return (
    <LogoIntroContainer>
      <LogoIntroWrapper>
        <LogoIntroContents>
          <LogoIntroTitle>
            아주 짧은 고민이 만든
            <br />
            의미 있는 DEF:CON의 얼굴
          </LogoIntroTitle>
          <LogoIntroImg src="/Images/mainLogo.svg" />
        </LogoIntroContents>
        <LogoIntroContext>
          <p>
            우리들의 로고는 30분 남짓의 아주 짧은 시간에 고안되었습니다.
            <br />
            고등학교 짧은 점심시간을 충분히 활용한 결과라고 할 수 있죠.
            <br />
            로고에 사용된 메인 색상은 Windows 10의 테마의 색상에서 영감을 얻었고
            <br />
            &quot;DEF:CON CRAB&quot;과 세미콜론(;)은 우리의 메인 테마 컬러를
            입혀
            <br />
            단조로울 수 있는 텍스트 중심의 로고에 포인트 요소가 되었습니다.
          </p>
        </LogoIntroContext>
        <BackgroundCard
          color="#00658F"
          height="22rem"
          translateX="-1000px"
          translateY="140px"
          type="bordered"
        />
      </LogoIntroWrapper>
    </LogoIntroContainer>
  );
};

const LogoIntroContainer = styled.div`
  height: 100%;
  @media all and (min-width: 1280px) {
    width: 1400px;
  }

  /* 노트북 & 테블릿 가로 (해상도 1024px ~ 1279px)*/
  @media all and (min-width: 1024px) and (max-width: 1279px) {
    width: 1024px;
  }

  /* 테블릿 가로 (해상도 768px ~ 1023px)*/
  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 768px;
  }

  /* 모바일 가로 & 테블릿 세로 (해상도 480px ~ 767px)*/
  @media all and (min-width: 480px) and (max-width: 767px) {
    width: 480px;
  }

  /* 모바일 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    width: 360px;
  }
`;

const LogoIntroWrapper = styled.div`
  height: 100vh;
  margin-bottom: 10vh;
  display: flex;
  @media all and (min-width: 1280px) {
    flex-direction: row;
  }
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans KR";
`;

const LogoIntroContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const LogoIntroTitle = styled.h1`
  @media all and (min-width: 1280px) {
    font-size: 45pt;
    letter-spacing: -5px;
    text-align: left;
  }

  @media all and (min-width: 768px) {
    font-size: 35pt;
    letter-spacing: -2px;
    text-align: center;
  }
  font-size: 20pt;
  letter-spacing: -2px;
  text-align: center;
`;

const LogoIntroImg = styled.img`
  @media all and (min-width: 1280px) {
    width: 25vw;
    margin-top: 15vh;
  }
  width: 60vw;
  margin-top: 5vh;
`;

const LogoIntroContext = styled.div`
  @media all and (min-width: 1280px) {
    margin-top: 30vh;

    p {
      font-size: 16pt;
      font-weight: 100;
      text-align: right;
    }
  }

  @media all and (min-width: 767px) {
    margin-top: 10vh;

    p {
      width: 80vw;
      font-size: 16pt;
      font-weight: 100;
      text-align: center;
    }
  }
  margin-top: 10vh;

  p {
    width: 80vw;
    font-size: 12pt;
    font-weight: 100;
    text-align: center;
  }
`;

export default LogoIntro;
