import React, { Component } from "react";
import Slider from "react-slick";
import arrow from "../../images/arrow.png"
import checkbox from "../../images/checkbox.png"
import uncheckbox from "../../images/uncheckbox.png"

import { SlideText, BackButton, FrontButton, BackImg, FrontImg, CheckBoxImg} from "./style";

import styled from 'styled-components';

const StyledSlider = styled(Slider)`
.slick-slide div{
      outline: none;
      font-size: 18px;
      margin-left:5px;
      margin-top: 6px;
      height: 30px;
    }
    .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;

function SimpleSlider({userData, bucketData}) {
  const a = userData || [];
  const b = bucketData || [];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    rows: 3,
    nextArrow: (
      <FrontButton>
        <FrontImg  alt="오른쪽화살표" src={arrow}/>
      </FrontButton>
    ),
    prevArrow: (
      <BackButton>
        <BackImg  alt="왼쪽화살표" src={arrow}/>
      </BackButton>
    ),
  };
  return (
    <div >
      <StyledSlider {...settings}>
        {a.map((a, index) => (
          <div key={index}>
            <SlideText>
              <CheckBoxImg alt= "체크박스" src={checkbox}></CheckBoxImg>
              {a.content}
            </SlideText> 
            </div>
        ))}
        {b.map((b, index) => (
          <div key={index}>
            <SlideText>
              <CheckBoxImg alt= "체크박스" src={checkbox}></CheckBoxImg>
              {b.content}
            </SlideText> 
            </div>
        ))}
      </StyledSlider>
      
    </div>
  );
}

export default SimpleSlider;