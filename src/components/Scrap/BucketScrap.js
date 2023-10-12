import { Container, BtnContainer, Modify, Delete, Text } from './style';
import { useState } from 'react';

//APIs
import { bucketUpdateText, bucketDeleteText } from '../../utils/axiosAPIs/axiosAPIs';

const BucketScrap = ({isOpen, closeModal, id, userId, onDataChange, completed}) => {
  const [updateContent, setUpdateText] = useState("");
  //input으로 입력받아 저장하는 텍스트
  const [text, setText] = useState("");
  
  const handleOnChange = (e) => {
    setText(e.target.value);
    const text = e.target.value;
    setUpdateText(text);
  }

  //update하는 부분
  const bucketUpdateClick = () => {
    const updateData = async () => {
      try{
        const response = await bucketUpdateText(updateContent, id, userId, completed);
        if(response === 400){
          alert("값을 입력해 주세요");
        }else{
          onDataChange(response.data);
          
        } 
      }catch(error){
          console.log('데이터 수정 실패: ', error);
        }
    };
    updateData();
    setText('');
  }
  
  //삭제하는 부분
  const bucketDeleteClick = () => {
    const deleteData = async () => {
      try{
        const response = await bucketDeleteText(id, userId);
        console.log("데이터 삭제 성공: ", response);
        onDataChange(response.data);
        console.log("버켓 삭제 데이터 전달 확인: ", response.data);
      }catch (error){
        console.log("데이터 삭제 실패: ", error);
      }
    };
    deleteData();
    setText('');
  }

  return (
    <>
      <Container style={{display: isOpen ? "block" : "none"}}>
        <Text 
          type='text' 
          placeholder='수정하기'
          name="userModifyValue"
          onChange={handleOnChange}
          />
        <BtnContainer>
          <Modify onClick={() => {
            closeModal();
            bucketUpdateClick();
          }}>수정</Modify>
          <Delete onClick={() => {
            closeModal();
            bucketDeleteClick();
          }}>삭제</Delete>
        </BtnContainer>
      </Container>
    </>
  );

}

export default BucketScrap;