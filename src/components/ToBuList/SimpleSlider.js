//style
import { 
  BackButton,
  FrontButton, 
  BackImg, 
  FrontImg, 
  UserListItem 
} from "./style";

import styled from 'styled-components';
//library
import Slider from "react-slick";
import React from 'react';
//images
import arrow from "../../images/arrow.png"


const StyledSlider = styled(Slider)`
.slick-slide div{
      outline: none;
      font-size: 18px;
      margin-left:5px;
      margin-top: 5px;
      height: 30px;
      border: 0px solid #000;
    }
    
`;

function SimpleSlider({ userData, dataType, onDataChange}) {
 
  const userDataList = userData.allList || [];
  const handleDataChange = (newData) => {
      onDataChange(newData);
  }


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
        <FrontImg alt="오른쪽화살표" src={arrow} />
      </FrontButton>
    ),
    prevArrow: (
      <BackButton>
        <BackImg alt="왼쪽화살표" src={arrow} />
      </BackButton>
    ),
  };
  return (
    <div >
      <StyledSlider {...settings}>
        {userDataList.map((userDataList, index) => (
          <div key={index}>
            <UserListItem
              onDataChange={handleDataChange}
              dataType={dataType}
              $done={userDataList.completed}
              content={userDataList.content}
              id={userDataList.id}
            >
            </UserListItem>
          </div>

        ))}
      </StyledSlider>

    </div>
  );
}

export default SimpleSlider;