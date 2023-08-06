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
  width: 100%;
  padding-top: 96px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media all and (min-width: 1280px) {
    & > div {
      width: 1030px;
    }
    
    h1 {
      text-align: left;
      margin-left: 0.5rem;
      font-size: 55pt;
    }
  
    p {
      margin: 1.5rem 0 1.5rem 0.5rem;
      font-size: 18pt;
      font-weight: 300;
    }
  }

  /* 노트북 & 테블릿 가로 (해상도 1024px ~ 1279px)*/ 
  @media all and (min-width:1024px) and (max-width:1279px) {
    & > div {
      width: 700px;
    }
    
    h1 {
      text-align: left;
      margin-left: 0.5rem;
      font-size: 50pt;
    }
  
    p {
      margin: 1.5rem 0 1.5rem 0.5rem;
      font-size: 16pt;
      font-weight: 300;
    }
  }   

  /* 테블릿 가로 (해상도 768px ~ 1023px)*/ 
  @media all and (min-width:768px) and (max-width:1023px) {
    & > div {
      width: 500px;
    }
    
    h1 {
      text-align: left;
      margin-left: 0.5rem;
      font-size: 45pt;
    }
  
    p {
      margin: 1.5rem 0 1.5rem 0.5rem;
      font-size: 14pt;
      font-weight: 300;
    }
  } 

  /* 모바일 가로 & 테블릿 세로 (해상도 480px ~ 767px)*/ 
  @media all and (min-width:480px) and (max-width:767px) {
    padding-top: 64px;
    & > div {
      width: 400px;
    }
    
    h1 {
      text-align: left;
      margin-left: 0.5rem;
      font-size: 40pt;
    }
  
    p {
      margin: 1.5rem 0 1.5rem 0.5rem;
      font-size: 12pt;
      font-weight: 300;
    }
  } 

  /* 모바일 세로 (해상도 ~ 479px)*/ 
  @media all and (max-width:479px) {
    padding-top: 64px;
    & > div {
      width: 100%;
      padding: 0 10px 0 10px;
    }
    
    h1 {
      text-align: left;
      margin-left: 0.5rem;
      font-size: 30pt;
    }
  
    p {
      padding: 1.5rem 0 1.5rem 0.5rem;
      font-size: 10pt;
      font-weight: 300;
    }
  }
`;

export default ProjectSection;