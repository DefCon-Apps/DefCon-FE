import styled from "styled-components";
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import WorksCard from "../../src/Common/WorksCard";

const dummyArray = [
  {
    id: 'w1',
    title: 'Android',
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const MainWorks = () => {
    return(
        <MainWorksWrapper>
					<h1>여기다가 가로스크롤 구현하기!!!</h1>
					<ScrollMenu>
						<WorksCard text={"Android"}/>
						<WorksCard text={"iOS"}/>
						<WorksCard text={"Self-Repair"}/>
						<WorksCard text={"Web"}/>
						<WorksCard text={"etc"}/>
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