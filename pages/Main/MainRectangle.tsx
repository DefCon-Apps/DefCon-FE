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
    type: "bordered"
  },
  {
    id: "r2",
    color: "#C7E7FF",
    height: "22rem",
    tranX: "60rem",
    tranY: "27rem",
    type: "filled"
  },
  {
    id: "r3",
    color: "#35B6F7",
    height: "22rem",
    tranX: "61rem",
    tranY: "76rem",
    type: "filled"
  },
  {
    id: "r4",
    color: "#00658F",
    height: "22rem",
    tranX: "59rem",
    tranY: "71rem",
    type: "filled"
  },
  {
    id: "r5",
    color: "#00658F",
    height: "22rem",
    tranX: "-78rem",
    tranY: "105.6rem",
    type: "bordered"
  },
  {
    id: "r6",
    color: "#C7E7FF",
    height: "22rem",
    tranX: "-78rem",
    tranY: "143rem",
    type: "bordered"
  },
  {
    id: "r7",
    color: "#35B6F7",
    height: "22rem",
    tranX: "59rem",
    tranY: "160rem",
    type: "bordered"
  },
];

const MainRectangle = () => {
  return (
    <>
      {}
      <BackgroundCard
        color={"#35B6F7"}
        height={"22rem"}
        translateX={"-78rem"}
        translateY={"7rem"}
        type={"bordered"}
      />

      <BackgroundCard
        color={"#C7E7FF"}
        height={"22rem"}
        translateX={"60rem"}
        translateY={"27rem"}
        type={"filled"}
      />

      <BackgroundCard
        color={"#35B6F7"}
        height={"22rem"}
        translateX={"61rem"}
        translateY={"76rem"}
        type={"filled"}
      />

      <BackgroundCard
        color={"#00658F"}
        height={"22rem"}
        translateX={"59rem"}
        translateY={"71rem"}
        type={"filled"}
      />

      <BackgroundCard
        color={"#00658F"}
        height={"22rem"}
        translateX={"-78rem"}
        translateY={"105.6rem"}
        type={"bordered"}
      />

      <BackgroundCard
        color={"#C7E7FF"}
        height={"22rem"}
        translateX={"-78rem"}
        translateY={"143rem"}
        type={"bordered"}
      />

      <BackgroundCard
        color={"#35B6F7"}
        height={"22rem"}
        translateX={"59rem"}
        translateY={"160rem"}
        type={"bordered"}
      />
    </>
  );
};

export default MainRectangle;
