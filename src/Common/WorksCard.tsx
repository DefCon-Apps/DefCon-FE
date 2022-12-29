import styled from "styled-components";
interface Props {
	text: string,
	image: string
};

const WorksCard = (props : Props) => {
  return(
		<WorksCardWrapper>
			<ImageBoxStyle 
				image={props.image}/>
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

const ImageBoxStyle = styled.div<Props>`
  width: 600px;
  height: 400px;
  background-color: ${props => props.image};
	border-radius: 20px;
`;

export default WorksCard;
