import styled from "styled-components";

interface Props {
  text: string;
  image: string;
}

const WorksCard = (props: Props) => {
  return (
    <WorksCardWrapper>
      <ImageBoxStyle src={`/Images/${props.image}`} />
      <h1>{props.text}</h1>
    </WorksCardWrapper>
  );
};

const WorksCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 50px;

  h1 {
    margin-top: 1rem;
    font-size: 2.5rem;
  }
`;

const ImageBoxStyle = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 10px;
`;

export default WorksCard;
