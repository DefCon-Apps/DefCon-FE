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
        height={"20rem"}
        translateX={"-78rem"}
        translateY={"7rem"}
        type={"bordered"}
      />

      <BackgroundCard
        color={"#C7E7FF"}
        height={"20rem"}
        translateX={"60rem"}
        translateY={"27rem"}
        type={"filled"}
      />

      <BackgroundCard
        color={"#35B6F7"}
        height={"20rem"}
        translateX={"62rem"}
        translateY={"73rem"}
        type={"filled"}
      />
      
      <BackgroundCard
        color={"#00658F"}
        height={"20rem"}
        translateX={"60rem"}
        translateY={"70rem"}
        type={"filled"}
      />
    </>
  );
};

export default MainRectangle;
