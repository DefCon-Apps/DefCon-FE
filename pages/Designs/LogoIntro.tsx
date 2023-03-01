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
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans KR";
`;

const LogoIntroContainer = styled.div`
  @media screen and (min-width: 1024px) {
    width: 70vw;
  }
  display: flex;
  flex-direction: column;
`;

const LogoIntroTitle = styled.div`
  h1 {
    @media screen and (min-width: 1280px) {
      font-size: 45pt;
      letter-spacing: -5px;
      text-align: left;
    }
    @media screen and (max-width: 768px) {
      font-size: 27pt;
      letter-spacing: -2px;
      text-align: center;
    }
  }
`;

const LogoIntroImg = styled.img`
  @media screen and (min-width: 1280px) {
    flex:1;
    width: 30rem;
  }
  @media screen and (max-width: 768px) {
    width: 80vw;
    margin-top: 5vh;
  }
`;

const LogoIntroContents = styled.div`
  display: flex;
  @media screen and (min-width: 1280px) {
    font-size: 1.5em;
    font-weight: 100;
    text-align: right;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 15vh;
  }
  @media screen and (max-width: 768px) {
    font-size: 12pt;
    font-weight: 100;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  p {
    @media screen and (min-width: 1280px) {
      flex: 1;
      margin-left: 50px;
      text-align: right;
    }
    @media screen and (max-width: 768px) {
      margin: 3rem 2rem 2rem 2rem;
      text-align: center;
    }
  }
`;

export default LogoIntro;