import styled, { css } from "styled-components";
import React from "react";

interface Props {
  color: string;
  width: string;
  height: string;
  translateX: string;
  translateY: string;
  type: string;
}

const BackgroundCard = (props: Props) => {
  return (
    <>
      <CardStyled
        color={props.color}
        width={props.width}
        height={props.height}
        translateX={props.translateX}
        translateY={props.translateY}
        type={props.type}
      />
    </>
  );
};

const CardStyled = styled.div<Props>`
  position: absolute;
  left: 0;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 2rem;
  z-index: -3;
  ${(props) =>
    css`
      transform: translate(${props.translateX}, ${props.translateY});
    `}
  ${(props) => {
    switch (props.type) {
      case "bordered":
        return css`
          border: 1rem solid;
          border-color: ${props.color};
        `;
      case "filled":
        return css`
          background-color: ${props.color};
        `;
    }
  }}
`;

BackgroundCard.defaultProps = {
  width: "100vw",
};

export default BackgroundCard;
