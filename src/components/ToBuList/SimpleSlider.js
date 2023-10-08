import React, { useEffect , useState, useMemo } from "react";
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

function SimpleSlider({userData, bucketData, onDataChange}) {
  const a = userData || [];
  const b = bucketData || [];

  const totalItems = useMemo(() => (userData ? userData.length : 0), [userData]);
  const [selectedImage, setSelectedImages] = useState({});
  const [clickedCount, setClickedCount] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImages((prevImages) => ({
      ...prevImages,
      [index]: prevImages[index] === checkbox ? uncheckbox : checkbox,
    }));
  if (selectedImage[index] === checkbox) {
        setSelectedImages((prevImages) => ({
          ...prevImages,
          [index]: uncheckbox,
        }));
        setClickedCount(clickedCount - 1);
      } else {
        // 이전 클릭을 취소하고 클릭 토글
        setSelectedImages((prevImages) => ({
          ...prevImages,
          [index]: checkbox,
        }));
        setClickedCount(clickedCount + 1);
      }
  };
  console.log("총 데이터 개수: ", totalItems)
  console.log("클릭된 데이터 개수: ", clickedCount)
  useEffect(() => {
    const calculatedDealt = Math.round((clickedCount / totalItems) * 100);
    onDataChange(calculatedDealt); // onDataChange로 전달
  }, [clickedCount, totalItems, onDataChange]);
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
            <SlideText onClick={() => {
              handleImageClick(index);
              }}>
              <CheckBoxImg
                alt="체크박스"
                src={selectedImage[index] || uncheckbox}
              />
              {a.content}
            </SlideText> 
            </div>
        ))}
        {b.map((b, index) => (
          <div key={index}>
            <SlideText onClick={() => {
              handleImageClick(index);
            }}>
              <CheckBoxImg
                alt="체크박스"
                src={selectedImage[index] || uncheckbox}
              />
              {b.content}
            </SlideText> 
            </div>
        ))}
      </StyledSlider>
      
    </div>
  );
}

export default SimpleSlider;