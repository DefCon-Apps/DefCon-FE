import styled from "styled-components";
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import WorksCard from "../../src/Common/WorksCard";

const dummyArray = [
  {
		id : 'w1',
  	text: 'Android',
		image: 'red'
  },
	{
		id : 'w2',
  	text: 'iOS',
		image: 'blue'
  },
	{
		id : 'w3',
  	text: 'Self-Repair',
		image: 'grey'
  },
	{
		id : 'w4',
  	text: 'Web',
		image: 'green'
  },
	{
		id : 'w5',
  	text: 'Chat Bot',
		image: 'yellow',
  }
];

const MainWorks = () => {
    return(
        <MainWorksWrapper>
					<h1>여기다가 가로스크롤 구현하기!!!</h1>
					<ScrollMenu>
						{dummyArray.map((items) => (<WorksCard key={items.id} text={items.text} image={items.image} />))}
					</ScrollMenu>
        </MainWorksWrapper>
    );
};

const MainWorksWrapper = styled.div`
	height: 100vh;

`;

const Test = styled.div`
	width: 540px;
	height: 400px;
	background-color: red;
	border-radius: 20px;
	margin-right: 20px;
`;

export default MainWorks;