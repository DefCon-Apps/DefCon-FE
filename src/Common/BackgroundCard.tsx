import styled, { css } from "styled-components";

interface Props {
    color: string;
    height: string;
    translateX: string;
    translateY: string;
    type: string;

}

const BackgroundCard = styled.div<Props>`
    position: absolute;
    left: 0;
    width: 100vw;
    height: ${props => props.height};
    border-radius: 2rem;
    z-index: -3;
    ${props => css`transform: translate(${props.translateX}, ${props.translateY});`}
    ${props => {
        switch(props.type) {
            case 'bordered':
                return css`
                    border: 1rem solid;
                    border-color: ${props.color};
                `;
            case 'filled':
                return css`
                    background-color: ${props.color};
                `;
        }
    }}
`;

export default BackgroundCard;