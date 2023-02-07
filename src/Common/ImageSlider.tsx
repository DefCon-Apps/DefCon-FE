import Slider, { Settings, CustomArrowProps } from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
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
    <SliderStyle>
      <Slider {...settings} >
        {props.images.map((url, i) => (
          <img src={url} key={i}/>
        ))}
      </Slider>
    </SliderStyle>
  );
}

const SliderStyle = styled.div`
  ${props => {
    return `
      @media all and (min-width:768px) {
        width: 600px;
        height: 450px;
        margin-bottom: 64px;
        img {
          width: 600px;
          height: 450px;
          object-fit: contain;
        }
      }
    
      /* 모바일 가로 & 테블릿 세로 (해상도 480px ~ 767px)*/ 
      @media all and (min-width:480px) and (max-width:767px) {
        width: 440px;
        height: 330px;
        margin-bottom: 64px;
        img {
          width: 440px;
          height: 330px;
          object-fit: contain;
        }
      } 
    
      /* 모바일 세로 (해상도 ~ 479px)*/ 
      @media all and (max-width:479px) {
        width: 360px;
        height: 270px;
        margin-bottom: 64px;
        img {
          width: 360px;
          height: 270px;
          object-fit: contain;
        }
      }
    `;
  }}
`;

export default ImageSlider;