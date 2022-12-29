import Crab from "../../src/Common/Crab";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

const MainTitle = () => {
  return (
    <MainTitleStyle>
      <TitleContentsStyle>
        <Crab width={18} height={18} marginTop={2} />

        <IntroStyle>
          <p>&quot;이거 님이 만드신 거였군요!&quot;</p>
          <h1>TEAM DEF:CON</h1>
          당신의 일상 속 유용한 소프트웨어가
          <br />
          우리의 작품이었으면 좋겠습니다.
          <br />
          <br />
          2023년 새로워진 대학생 프로그래밍팀 DEF:CON을 만나보세요.
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

const TitleContentsStyle = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15rem;

  h1 {
    font-size: 4em;
    font-weight: 900;
  }
  p {
    font-weight: bold;
    font-size: 1rem;
  }
`;

const IntroStyle = styled.div`
  letter-spacing: 0.1rem;
  margin-left: 8rem;
  margin-top: 8rem;
`;

const ScrollIconStyle = styled.div`
  margin-top: 15rem;
  justify-content: center;
`;

export default MainTitle;
