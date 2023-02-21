import styled from "styled-components";

interface Props {
  width: number;
  height: number;
  marginTop: number;
  float: boolean;
}

const Crab = (props: Props) => {
  return (
    <CrabStyle
      width={props.width}
      height={props.height}
      marginTop={props.marginTop}
      float={props.float}
    >
      <img src="/Images/crab.svg" />
    </CrabStyle>
  );
};

const CrabStyle = styled.div<Props>`
  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }
  width: ${(props) => props.width + "rem"};
  height: ${(props) => props.height + "rem"};
  margin-top: ${(props) => props.marginTop + "rem"};
  transform: rotate(15deg);
  filter: drop-shadow(0 0.3rem 0.3rem grey);
  animation: ${(props) => props.float && "float 2s ease-in-out infinite"};
`;
export default Crab;
