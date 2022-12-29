import styled from "styled-components";
import MainTitle from "./MainTitle";
import MainHistory from "./MainHistory";
import MainAwards from "./MainAwards";

const Main = () => {
  return (
    <MainStyle>
      <MainTitle/>
      <MainHistory/>
      <MainAwards/>
    </MainStyle>
  );
};

const MainStyle = styled.div`
  font-family: "Noto Sans KR";
  margin-bottom: 200px;
`;




export default Main;
