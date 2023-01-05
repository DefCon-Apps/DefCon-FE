import Slider, { Settings, CustomArrowProps } from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Size {
  width: string;
  height: string;
}

interface Props extends Size {
  images: Array<string>;
}

const ImageSlider = (props: Props) => {
  const settings: Settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <SliderStyle width={props.width} height={props.height}>
      <Slider {...settings} >
        {props.images.map((url, i) => (
          <img src={url} key={i}/>
        ))}
      </Slider>
    </SliderStyle>
  );
}

const SliderStyle = styled.div<Size>`
  ${props => {
    return `
      width: ${props.width};
      height: ${props.height};
      margin-bottom: 64px;
      img {
        width: ${props.width};
        height: ${props.height};
        object-fit: contain;
      }
    `;
  }}
`;

export default ImageSlider;