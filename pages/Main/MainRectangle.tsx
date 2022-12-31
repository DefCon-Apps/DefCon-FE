import styled from "styled-components";
import BackgroundCard from "../../src/Common/BackgroundCard";

// color: string;
//     height: string;
//     translateX: string;
//     translateY: string;
//     type: 'bordered' | 'filled';

const mainRectangle = [
  {
    id: "r1",
    color: "#35B6F7",
    height: "22rem",
    tranX: "-78rem",
    tranY: "7rem",
    typeR: "bordered",
  },
  {
    id: "r2",
    color: "#C7E7FF",
    height: "22rem",
    tranX: "60rem",
    tranY: "27rem",
    typeR: "filled",
  },
  {
    id: "r3",
    color: "#35B6F7",
    height: "22rem",
    tranX: "61rem",
    tranY: "76rem",
    typeR: "filled",
  },
  {
    id: "r4",
    color: "#00658F",
    height: "22rem",
    tranX: "59rem",
    tranY: "71rem",
    typeR: "filled",
  },
  {
    id: "r5",
    color: "#00658F",
    height: "22rem",
    tranX: "-78rem",
    tranY: "105.6rem",
    typeR: "bordered",
  },
  {
    id: "r6",
    color: "#C7E7FF",
    height: "22rem",
    tranX: "-78rem",
    tranY: "143rem",
    typeR: "bordered",
  },
  {
    id: "r7",
    color: "#35B6F7",
    height: "22rem",
    tranX: "59rem",
    tranY: "160rem",
    typeR: "bordered",
  },
];

const MainRectangle = () => {
  return (
    <>
      {mainRectangle.map((items) => (
        <BackgroundCard
          key={items.id}
          color={items.color}
          height={items.height}
          translateX={items.tranX}
          translateY={items.tranY}
          type={items.typeR}
        />
      ))}
    </>
  );
};

export default MainRectangle;
