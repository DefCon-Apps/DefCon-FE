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
        <ListItemImage src={props.image} />
        <ListItemTitle>{props.title}</ListItemTitle>
      </Link>
    </ListItemWrapper>
  );
}

const ListItemWrapper = styled.div`
  text-align: center;
  margin 0 40px 0 40px;
`;

const ListItemImage = styled.img`
  width: 560px;
  height: 324px;
  border-radius: 20px;
  object-fit: cover;
`;

const ListItemTitle = styled.h2`
  margin 8px 0 16px 0;
`;

export default ProjectListItem