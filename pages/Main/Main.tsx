import styled from "styled-components";
import MainTitle from "./MainTitle";
import MainHistory from "./MainHistory";
import MainAwards from "./MainAwards";
import MainWorks from "./MainWorks";

const Main = () => {
  return (
    <MainStyle>
      <MainTitle/>
      <MainHistory/>
      <MainAwards/>
      <MainWorks/>
    </MainStyle>
  );
};

const MainStyle = styled.div`
  font-family: "Noto Sans KR";
  margin-bottom: 200px;
`;




export default Main;
