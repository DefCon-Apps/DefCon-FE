import styled from "styled-components";
import BackgroundCard from "../../src/Common/BackgroundCard";

// color: string;
//     height: string;
//     translateX: string;
//     translateY: string;
//     type: 'bordered' | 'filled';

const MainRectangle = () => {
  return (
    <>
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
