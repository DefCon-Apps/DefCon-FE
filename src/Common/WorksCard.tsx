import styled from "styled-components";
interface Props {
  text: string;
}
const WorksCard = (props : Props) => {
  return(
		<WorksCardWrapper>
			<ImageBoxStyle/>
			<h1>{props.text}</h1>
		</WorksCardWrapper>
	);
};

const WorksCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: 100px;

	h1{
		margin-top : 1rem;
		font-size: 3rem;
	}
`

const ImageBoxStyle = styled.div`
  width: 600px;
  height: 400px;
  background-color: grey;
	border-radius: 20px;
`;

export default WorksCard;
