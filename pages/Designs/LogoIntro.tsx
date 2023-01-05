import styled from "styled-components";

const LogoIntro = () => {
  return (
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
          <br />
          로고의 전반적인 컬러와 &quot;:(&quot;는 Windows 10의 블루스크린에서<br/>
          고안되었으며 게와 비슷한 실루엣을 활용하여
          <br />
          &quot;DEF:CON CRAB&quot;라는 이름을 붙여 DEF:CON의 마스코트로 활용하고
          있습니다.
          <br />
          &quot;DEF:CON CRAB&quot;과 세미콜론(;)은 단조로울 수 있는 텍스트
          중심의 로고에 포인트 요소가 되었습니다.
        </p>
      </LogoIntroContext>
    </LogoIntroWrapper>
  );
};

const LogoIntroWrapper = styled.div`
  height: 100vh;
	padding-top: 8vh;
  display: flex;
  flex-direction: row;
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
  font-size: 50pt;
	letter-spacing: -5px;
`;

const LogoIntroImg = styled.img`
  width: 30vw;
	margin-top: 10vh;
`;

const LogoIntroContext = styled.div`
	margin-top: 25vh;
	margin-left: 10vh;
  p {
    font-size: 18pt;
		font-weight: 100;
		text-align: right;
  }
`;


export default LogoIntro;
