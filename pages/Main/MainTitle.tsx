import Crab from "../../src/Common/Crab";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

interface Props {
  isDesktop: boolean;
}

const MainTitle = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width:768px)",
  });

  return (
    <MainTitleStyle>
      <TitleContentsStyle isDesktop={isDesktop}>
      <Crab width={isDesktop ? 18 : 10} height={isDesktop ? 18 : 10} marginTop={2} />
      <IntroStyle isDesktop={isDesktop}>
        <p>&quot;이거 님이 만드신 거였군요!&quot;</p>
        <h1>TEAM DEF:CON</h1>
        <p id="intro">
          당신의 일상 속 유용한 소프트웨어가
          <br />
          우리의 작품이었으면 좋겠습니다.
          <br />
          <br />
          2023년 새로워진 대학생 프로그래밍팀 DEF:CON을 만나보세요.
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
`;

const TitleContentsStyle = styled.div<Props>`
    display: flex;
    flex-direction: ${props=>props.isDesktop ? "row" : "column"};
    justify-content: center;
    align-items: center;
    text-align: ${props=>props.isDesktop ? "right" : "center"};
    margin-top: 15rem;

    h1 {
      font-size: ${props=>props.isDesktop ? "100px" : "50px"};
      font-weight: bolder;
      letter-spacing: -5px;
    }
    p {
      font-size: ${props=>props.isDesktop ? "30px" : "15px"};
      font-weight: bold;
    }

    #intro {
      font-size: ${props=>props.isDesktop ? "25px" : "15px"};
      font-weight: 300;
    }
`;

const IntroStyle = styled.div<Props>`
  letter-spacing: 0.1rem;
  margin: ${props=>props.isDesktop ? "5px 0px 0px 100px" : "100px 0px 0px 0px"};
  font-size: ${props=>props.isDesktop ? "25px" : "10px"};
`;

const ScrollIconStyle = styled.div`
  margin-top: 180px;
  justify-content: center;
`;

export default MainTitle;
