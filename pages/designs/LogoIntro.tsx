import styled from "styled-components";

const LogoIntro = () => {
  return (
    <LogoIntroWrapper>
      <LogoIntroContainer>
        <LogoIntroTitle>
          <h1>
            아주 짧은 고민이 만든
            <br />
            의미 있는 DEF:CON의 얼굴
          </h1>
        </LogoIntroTitle>

        <LogoIntroContents>
          <LogoIntroImg src="/Images/mainLogo.svg" />
          <p>
            우리들의 로고는 30분 남짓의 아주 짧은 시간에 고안되었습니다.
            고등학교 짧은 점심시간을 충분히 활용한 결과라고 할 수 있죠. 로고에
            사용된 메인 색상은 Windows 10의 테마의 색상에서 영감을 얻었고
            &quot;DEF:CON CRAB&quot;과 세미콜론(;)은 우리의 메인 테마 컬러를
            입혀 단조로울 수 있는 텍스트 중심의 로고에 포인트 요소가 되었습니다.
          </p>
        </LogoIntroContents>
      </LogoIntroContainer>
    </LogoIntroWrapper>
  );
};

const LogoIntroWrapper = styled.div`
  width: 1030px;
  height: 100vh;
  display: flex;
  justify-content: center;
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
    width: 100%;
    margin: 0 10px 0 10px;
  }
`;

const LogoIntroContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  /* 테블릿 가로 (해상도 768px ~ 1023px)*/
  @media all and (max-width: 1023px) {
    align-items: center;
  }
`;

const LogoIntroTitle = styled.div`
  width: 70%;

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
      flex: 1;
      text-align: center;
      font-size: 3em;
      letter-spacing: -5px;
    }
  }

  /* 모바일 가로 & 세로 & 테블릿 세로 ( ~ 767px)*/
  @media all and (max-width: 767px) {
    width: 100%;

    & > h1 {
      flex: 1;
      text-align: center;
      font-size: 2.5em;
      letter-spacing: -5px;
    }
  }
`;

const LogoIntroImg = styled.img`
  margin-top: 1em;
  width: 45%;

  /* 노트북 & 테블릿 가로 (해상도 1024px ~ 1279px)*/
  @media all and (min-width: 1024px) and (max-width: 1279px) {
    margin-top: 1em;
    width: 45%;
  }

  /* 모바일 가로 & 세로 & 테블릿 세로 & 테블릿 가로 (해상도 ~ 1023px)*/
  @media all and (max-width: 1023px) {
    margin-top: 1em;
    width: 70%;
  }
`;

const LogoIntroContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 1em;

  & > p {
    width: 50%;
    font-size: 1.5em;
    font-weight: 100;
    text-align: left;
  }

  /* 노트북 & 테블릿 가로 (해상도 1024px ~ 1279px)*/
  @media all and (min-width: 1024px) and (max-width: 1279px) {
    & > p {
      width: 50%;
      font-size: 1em;
    }
  }

  /* 모바일 가로 & 세로 & 테블릿 세로 & 테블릿 가로 (해상도 768px ~ 1023px)*/
  @media all and (max-width: 1023px) {
    flex-direction: column;

    & > p {
      width: 90%;
      margin-top: 1.2em;
      font-size: 1.2em;
      font-weight: 100;
      text-align: center;
    }
  }
`;

export default LogoIntro;
