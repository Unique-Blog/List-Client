import React, { Component } from "react";
import Slider from "react-slick";
import arrow from "../../images/arrow.png"
import checkbox from "../../images/checkbox.png"
import uncheckbox from "../../images/uncheckbox.png"

import { SlideText, BackButton, FrontButton, BackImg, FrontImg} from "./style";

import styled from 'styled-components';

const StyledSlider = styled(Slider)`
.slick-slide div{
      display: flex;
      flex-direction: row;
      outline: none;
      font-size: 18px;
      margin-left:15px;
      margin-top: 6px;
      height: 30px;
    }
    .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;

function SimpleSlider() {
  const a = ['방 청소하기', '운영체제 쪽지시험 준비하기', '운동하기', 'mango', 'podo', '1', '2', '3', '4', '5', '6'];
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
            <FrontImg alt= "체크박스" src={checkbox}></FrontImg>
            {a}
            </div>
        ))}
      </StyledSlider>
    </div>
  );
}

export default SimpleSlider;