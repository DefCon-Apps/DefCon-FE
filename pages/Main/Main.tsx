import styled from "styled-components";
import MainTitle from "./MainTitle";
import MainHistory from "./MainHistory";

const Main = () => {
  return (
    <MainStyle>
      <MainTitle />
    </MainStyle>
  );
};

const MainStyle = styled.div`
  font-family: "Noto Sans KR";
  height: 100vh;
  text-align: right;
`;




export default Main;
