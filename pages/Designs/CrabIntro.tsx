import styled from "styled-components";
import Crab from "../../src/Common/Crab";

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
				</CrabIntroTitle>
			</CrabIntroContents>

      <CrabIntroLogoWrapper>
        <Logo src="/Images/firstLogo.svg"/>
        <Logo src="/Images/preLogo.svg"/>
        <Logo src="/Images/mainLogo.svg"/>
        <Crab width={15} height={15} marginTop={5} />

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
  
`;

const CrabIntroLogo = styled.div`
  
`;

const Logo = styled.img`
  width: 10vw;
  
`;

const CrabWrapper = styled.div`
  
`;

export default CrabIntro;
