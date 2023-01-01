import styled from "styled-components";

interface Props {
  name: string;
  description: string;
  children?: React.ReactNode;
}

const ProjectSection = (props: Props) => {
  return (
    <SectionWrapper>
      <div>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        {props.children}
      </div>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 1400px;
  }
  
  h1 {
    text-align: left;
    font-size: 55pt;
  }

  p {
    margin: 1.5rem 0 1.5rem 0;
    font-size: 18pt;
    font-weight: 300;
  }
`;

export default ProjectSection;