import styled from "styled-components";

interface Props {
  width: number;
  height: number;
}

const Crab = (props: Props) => {
  return(
    <CrabStyle width={props.width} height={props.height}>
        <img src="/Images/crab.svg"/>
    </CrabStyle>
  )
};

const CrabStyle = styled.div<Props>`
    width : ${props => props.width + 'rem'};
    height: ${props => props.height + 'rem'};
    transform: rotate(15deg);
    filter: drop-shadow(0 0.3rem 0.3rem grey);
`;
export default Crab;
