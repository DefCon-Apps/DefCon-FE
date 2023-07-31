import LogoIntro from "./LogoIntro";
import CrabIntro from "./CrabIntro";
import styled from "styled-components";

const Designs = () => {
  return (
    <DesignStyle>
      <LogoIntro />
      <CrabIntro />
    </DesignStyle>
  );
};

const DesignStyle = styled.div`
  font-family: "Noto Sans KR";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Designs;
