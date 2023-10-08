//style
import { SlideText, BackButton, FrontButton, BackImg, FrontImg, CheckBoxImg} from "./style";
import styled from 'styled-components';
//library
import React, { useEffect , useState, useMemo } from "react";
import Slider from "react-slick";
import axios from "axios";
//images
import arrow from "../../images/arrow.png"
import checkbox from "../../images/checkbox.png"
import uncheckbox from "../../images/uncheckbox.png"

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

function SimpleSlider({userData, bucketData, onDataChange, $Done}) {
  const [bool, setBool] = useState(null);
  const onToggleHandle = () => {
    setBool(!bool);
  }

  const Todo = userData || [];
  const bucket = bucketData || [];

  async function TodoData(id) {
    const formDataId = new FormData();
    formDataId.append("id", id);
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/todo/completed`, 
          formDataId,
        );
        console.log("서버 응답:", response.data);
      } catch (error) {
        console.error("데이터 전송 중 오류 발생:", error);
      }
    }

    async function BucketData(id){
      const formDataId = new FormData();
      formDataId.append("id", id);
        try {
          const response = await axios.post(
            `${process.env.REACT_APP_SERVER_URL}/todo/completed`, 
            formDataId,
          );
          console.log("서버 응답:", response.data);
        } catch (error) {
          console.error("데이터 전송 중 오류 발생:", error);
        }
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
        {Todo.map((Todo, index) => (
          <div key={index}>
            <SlideText>
              <CheckBoxImg
                alt="체크박스"
                $Done={Todo.completed}
                onClick={() => {
                onToggleHandle($Done);
                const id =Todo.id;
                TodoData(id);
              }}
              />

              {Todo.content}
            </SlideText> 
            </div>
        ))}
        {bucket.map((bucket, index) => (
          <div key={index}>
            <SlideText onClick={() => {
              const id = bucket.id
              BucketData(id);
            }}>
              <CheckBoxImg
                alt="체크박스"
              />
              {bucket.content}
            </SlideText> 
            </div>
        ))}
      </StyledSlider>
      
    </div>
  );
}

export default SimpleSlider;