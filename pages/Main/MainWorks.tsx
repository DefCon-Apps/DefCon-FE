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
      <MainWorksContents>
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
      </MainWorksContents>
    </MainWorksWrapper>
  );
};

const MainWorksWrapper = styled.div`
  width: 70vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
	margin-top : 100px;
`;

const MainWorksContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const WorksTitle = styled.div`
  display: flex;
  flex-direction: column;

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
  width: 80%;
`;


export default MainWorks;
