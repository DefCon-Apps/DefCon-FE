import styled from "styled-components";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import WorksCard from "../../src/Common/WorksCard";

const dummyArray = [
  {
    id: "w1",
    text: "Android",
		image: "testImage.png"
  },
  {
    id: "w2",
    text: "iOS",
		image: "testImage.png"
  },
  {
    id: "w3",
    text: "Self-Repair",
		image: "testImage.png"
  },
  {
    id: "w4",
    text: "Web",
		image: "testImage.png"
  },
  {
    id: "w5",
    text: "Chat Bot",
		image: "testImage.png"
  },
];


const MainWorks = () => {
  return (
    <MainWorksWrapper>
      <WorksTitle>
        <h1>우리가 즐겨온 일들</h1>
        <p>
          우리 DEF:CON이 관심을 갖고 즐겨온 일들의 카테고리입니다.<br />
          소프트웨어가 사용될 수 있다면 우리는 뭐든 재미있게 갖고 놀 수
          있습니다.<br />
        </p>
      </WorksTitle>
			<ScrollMenuWrapper>
        <ScrollMenu>
          {dummyArray.map((items) => (
            <WorksCard key={items.id} text={items.text} image={items.image} />
          ))}
        </ScrollMenu>
			</ScrollMenuWrapper>
    </MainWorksWrapper>
  );
};

const MainWorksWrapper = styled.div`
  height: 100vh;
`;

const WorksTitle = styled.div`
  display: flex;
  flex-direction: column;
	margin: 0rem 0rem 5rem 22rem;

	h1 {
    text-align: left;
    font-size: 55pt;
    letter-spacing: -7px;
  }

  p {
    margin-top: 10px;
    font-size: 18pt;
    font-weight: 300;
  }
`;

const ScrollMenuWrapper = styled.div`
	margin: 0rem 22rem 0rem 22rem;
`


export default MainWorks;
