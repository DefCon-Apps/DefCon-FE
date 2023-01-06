import styled from "styled-components";
import BackgroundCard from "../../src/Common/BackgroundCard";

// color: string;
//   height: string;
//   translateX: string;
//   translateY: string;
//   type: string;

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
          우리들의 로고는 30분 남짓의 아주 짧은 시간에 고안되었습니다.<br />
          고등학교 짧은 점심시간을 충분히 활용한 결과라고 할 수 있죠.<br />
					로고에 사용된 메인 색상은 Windows 10의 테마의 색상에서 영감을 얻었고<br/>
          &quot;DEF:CON CRAB&quot;과 세미콜론(;)은 우리의 메인 테마 컬러를 입혀<br/>
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
	margin-top: 15vh;
`;

const LogoIntroContext = styled.div`
	margin-top: 30vh;
  p {
    font-size: 16pt;
		font-weight: 100;
		text-align: right;
  }
`;


export default LogoIntro;
