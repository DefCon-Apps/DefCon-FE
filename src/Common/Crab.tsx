import styled from "styled-components";
import Image from "next/image";

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
      <Image src="/Images/crab.svg" alt="게새기" width={props.width} height={props.height}/>
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
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.height + "px"};
  margin-top: ${(props) => props.marginTop + "rem"};
  filter: drop-shadow(0 0.3rem 0.3rem grey);
  animation: ${(props) => props.anim && "crabFloat 2s ease-in-out infinite"};
`;
export default Crab;
