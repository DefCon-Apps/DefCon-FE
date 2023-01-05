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
          로고의 전반적인 컬러와 &quot;:(&quot;는 Windows 10의 블루스크린에서 착안하였으며<br/>
					게와 비슷한 실루엣을 활용하여 &quot;DEF:CON CRAB&quot;라는 이름을 붙였고<br/>
					DEF:CON을 나타내는 상징이자 마스코트로 활용되고 있습니다.
          <br /><br/>
          &quot;DEF:CON CRAB&quot;과 세미콜론(;)은 우리의 메인 테마 컬러를 입혀<br/>
					단조로울 수 있는 텍스트 중심의 로고에 포인트 요소가 되었습니다.
        </p>
      </LogoIntroContext>
    </LogoIntroWrapper>
  );
};

const LogoIntroWrapper = styled.div`
  height: 100vh;
	margin-bottom: 10vh;
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
  font-size: 45pt;
	letter-spacing: -5px;
`;

const LogoIntroImg = styled.img`
  width: 25vw;
	margin-top: 10vh;
`;

const LogoIntroContext = styled.div`
	margin-top: 25vh;
  p {
    font-size: 16pt;
		font-weight: 100;
		text-align: right;
  }
`;


export default LogoIntro;
