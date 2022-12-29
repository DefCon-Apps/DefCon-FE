import styled from "styled-components";
interface Props {
    text: string,
    textColor: string,
    btnColor: string,
    width: number,
    textSize: number,
    height: number
  }

const Dbutton = (props : Props) => {
    return(
        <DbuttonStyle
          text={props.text}
          textColor={props.textColor}
          textSize={props.textSize}
          btnColor={props.btnColor}
          width={props.width}
          height={props.height}
        >
          {props.text}
        </DbuttonStyle>
    );
};

const DbuttonStyle = styled.button<Props>`
  width: ${props => props.width + "rem" || "12rem"};
  height: ${props => props.height + "rem" || "3rem"};

  margin: 0.5rem 0rem 0rem 1rem;
  padding: 0;

  font-size: ${props => props.textSize + "px" || "1rem"};
  font-weight: lighter;
  font-family: 'Noto Sans KR';
  letter-spacing: 0.1rem;
  overflow: hidden;

  border-width: 0;
  outline: none;
  border-radius: 20px;
    
    
  background-color: ${props => props.btnColor || "#001E2E"};
  color: ${props => props.textColor || "#ffffff"};
    
  transition: background-color .3s;

  :hover, :focus{
    box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, .6);
  }
    
`;

export default Dbutton;