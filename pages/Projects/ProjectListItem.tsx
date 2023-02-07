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
      <Link href={`Projects/${props.id}`}>
        <ListItemImage alt="Project Image" src={`/${props.image}`} width={560} height={324} />
        <ListItemTitle>{props.title}</ListItemTitle>
      </Link>
    </ListItemWrapper>
  );
}

const ListItemWrapper = styled.div`
  text-align: center;
  @media all and (min-width: 768px) {
    margin 0 20px 0 20px;
  }
  margin 0 10px 0 10px;
`;

const ListItemImage = styled(Image)`
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
  border-radius: 20px;
  object-fit: cover;
`;

const ListItemTitle = styled.h2`
  margin 8px 0 16px 0;
`;

export default ProjectListItem