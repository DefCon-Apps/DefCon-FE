import styled from "styled-components";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import WorksCard from "../../src/Common/WorksCard";
import testImage from "../../public/Images/testImage.png";

const dummyArray = [
  {
    id: "w1",
    text: "Android",
    image: "/Users/harenkei/Documents/defcon/DefCon-FE/public/Images/testImage.png",
  },
  {
    id: "w2",
    text: "iOS",
    image: "../../public/Images/testImage.png",
  },
  {
    id: "w3",
    text: "Self-Repair",
    image: "../../public/Images/testImage.png",
  },
  {
    id: "w4",
    text: "Web",
    image: "../../public/Images/testImage.png",
  },
  {
    id: "w5",
    text: "Chat Bot",
    image: "../../public/Images/testImage.png",
  },
];

console.log(typeof({testImage}));
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
      <ScrollWrapper>
        <ScrollMenu>
          {dummyArray.map((items) => (
            <WorksCard key={items.id} text={items.text} image={items.image} />
          ))}
        </ScrollMenu>
      </ScrollWrapper>
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
    font-size: 4rem;
    letter-spacing: -5px;
  }

  p {
    margin-top: 10px;
    font-size: 1.5rem;
    font-weight: 300;
  }
`;

const ScrollWrapper = styled.div`
`;

export default MainWorks;
