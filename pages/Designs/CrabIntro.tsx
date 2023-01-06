import styled from "styled-components";
import Crab from "../../src/Common/Crab";
import BackgroundCard from "../../src/Common/BackgroundCard";

// color: string;
//   height: string;
//   translateX: string;
//   translateY: string;
//   type: string;

const CrabIntro = () => {
  return (
    <CrabIntroWrapper>
			<CrabIntroContents>
				<CrabIntroDesc>
					<p>
            DEF:CON의 마스코트인 DEF:CON CRAB은 메인 컬러와 마찬가지로<br/>
            Windows 10의 블루스크린에서 착안하였습니다.<br/>
					  DEF:CON의 철자 C의 앞에 콜론 (:)을 삽입하여 블루스크린의 이모티콘인<br/>
            &quot;:(&quot;을 연상할 수 있게 만들어냈죠.<br/><br/>

					  코딩을 하다보면 웃음을 지을 때보단 울상일 때가 더 많은 우리의 <br/>
					  표정과도 비슷한 DEF:CON CRAB은 DEF:CON의 초창기 로고부터 <br/>
					  유지되어온 DEF:CON의 헤리티지입니다. <br/>
					</p>
				</CrabIntroDesc>
				<CrabIntroTitle>
					우리의 헤리티지<br/>
					DEF:CON CRAB
          <BackgroundCard color="#C7E7FF" height="22rem" translateX="1150px" translateY="-245px" type="filled"/>
				</CrabIntroTitle>
			</CrabIntroContents>

      <CrabIntroLogoWrapper>
        <LogoHistoryWrapper>
        <Logo src="/Images/firstLogo.svg"/>
        <Logo src="/Images/preLogo.svg"/>
        <Logo src="/Images/mainLogo.svg"/>
        </LogoHistoryWrapper>
        <Crab width={15} height={15} marginTop={8} />

      </CrabIntroLogoWrapper>
    </CrabIntroWrapper>
  );
};

const CrabIntroWrapper = styled.div`
  height: 100vh;
  margin-bottom: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans KR";
`;

const CrabIntroContents = styled.div`
	display: flex;
	flex-direction: row;
	
`;

const CrabIntroTitle = styled.h1`
	font-size: 45pt;
	letter-spacing: -5px;
`;

const CrabIntroDesc = styled.div`
  margin-right: 14vw;
  p{
    font-size: 16pt;
    font-weight: 200;
  }
`;


const CrabIntroLogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8vh;
  
`;

const LogoHistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
  margin-right: 20vw;
`;


const Logo = styled.img`
  width: 20vw;
  margin-bottom: 8vh;
  filter : drop-shadow(1px 1px 3px grey);
  
`;

export default CrabIntro;
