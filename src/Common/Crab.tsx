import styled from "styled-components";

interface Props {
  width: number;
  height: number;
  marginTop: number;
  anim: boolean;
}

const Crab = (props: Props) => {
  return (
    <CrabStyle
      width={props.width}
      height={props.height}
      marginTop={props.marginTop}
      anim={props.anim}
    >
      <img src="/Images/crab.svg" />
    </CrabStyle>
  );
};

const CrabStyle = styled.div<Props>`
  @keyframes crabFloat {
    0% {
      transform: rotate(15deg) translatey(0px);
    }
    50% {
      transform: rotate(15deg) translatey(-10px);
    }
    100% {
      transform: rotate(15deg) translatey(0px);
    }
  }
  width: ${(props) => props.width + "rem"};
  height: ${(props) => props.height + "rem"};
  margin-top: ${(props) => props.marginTop + "rem"};
  filter: drop-shadow(0 0.3rem 0.3rem grey);
  animation: ${(props) => props.anim && "crabFloat 2s ease-in-out infinite"};
`;
export default Crab;
