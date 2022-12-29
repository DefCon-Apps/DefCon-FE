import styled from "styled-components";
import MainTitle from "./MainTitle";

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
  padding: 18rem 23rem 0rem 23rem;
  text-align: right;
`;




export default Main;
