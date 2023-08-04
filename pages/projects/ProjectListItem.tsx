import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface Props {
  id: string;
  image: string;
  title: string;
}

const ProjectListItem = (props: Props) => {
  return (
    <ListItemWrapper>
      <Link href={`projects/${props.id}`}>
        <ListItemImage alt="Project Image" src={props.image} width={544} height={305} />
      </Link>
    </ListItemWrapper>
  );
}

const ListItemWrapper = styled.div`
  margin: 0 10px 0 10px;
  @media all and (min-width: 768px) {
    margin: 0 20px 0 20px;
  }
`;

const ListItemImage = styled(Image)`
  width: 544px;
  height: 305px;
  
  @media all and (min-width: 768px) {
    width: 560px;
    height: 324px;
  }

  /* 모바일 가로 & 테블릿 세로 (해상도 480px ~ 767px)*/ 
  @media all and (min-width:480px) and (max-width:767px) {
    width: 420px;
    height: 243px;
  } 

  /* 모바일 세로 (해상도 ~ 479px)*/ 
  @media all and (max-width:479px) {
    width: 280px;
    height: 162px;
  }
`;

export default ProjectListItem