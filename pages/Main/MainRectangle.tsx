import styled from "styled-components";
import BackgroundCard from "../../src/Common/BackgroundCard";

// color: string;
//     height: string;
//     translateX: string;
//     translateY: string;
//     type: 'bordered' | 'filled' -> string;

const mainRectangle = [
  {
    id: "r1",
    color: "#35B6F7",
    height: "22rem",
    tranX: "-1250px",
    tranY: "112px",
    typeR: "bordered",
  },
  {
    id: "r2",
    color: "#C7E7FF",
    height: "22rem",
    tranX: "960px",
    tranY: "432px",
    typeR: "filled",
  },
  {
    id: "r3",
    color: "#35B6F7",
    height: "22rem",
    tranX: "976px",
    tranY: "1216px",
    typeR: "filled",
  },
  {
    id: "r4",
    color: "#00658F",
    height: "22rem",
    tranX: "944px",
    tranY: "1136px",
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
    tranX: "-1250px",
    tranY: "2288px",
    typeR: "bordered",
  },
  {
    id: "r7",
    color: "#35B6F7",
    height: "22rem",
    tranX: "944px",
    tranY: "2560px",
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
