import { Container, BtnContainer, Modify, Delete, Text } from './style';
import { useState, useEffect } from 'react';

//APIs
import { updateText, deleteText, searchListReq } from '../../utils/axiosAPIs/axiosAPIs';


const Scrap = ({isOpen, closeModal, id, userId}) => {
  console.log('scrap id확인: ', id);

  //변경된 글 화면에 출력하는 부분
  const [serverListData, setServerListData] = useState([]);
  //서버에 보낼 텍스트
  const [updateContent, setUpdateText] = useState("");
  //input으로 입력받아 저장하는 텍스트
  const [text, setText] = useState("");

  const sendId = userId;

 {/*} //상위 컴포넌트로 serverListData 전달
  const sendDataToParent = ({updateContent}) => {
    updateContent(serverListData);
  }

  useEffect(() => {
        const loadData = async () => {
            try {
                const response = await searchListReq(sendId);
                console.log("서버 데이터 조회 결과: ", response.data);
                setServerListData(response.data.allList);
            } catch (error) {
                console.error('데이터 조회 실패:', error);
            }
        };
        loadData();
    }, []);*/}

  const handleOnChange = (e) => {
    setText(e.target.value);
    const text = e.target.value;
    setUpdateText(text);
    console.log("입력 되는지 확인: ", text);
  }
  
  //update하는 부분
  const updateClick = () => {
    const updateData = async () => {
      console.log("서버에 보낼 데이터 확인: ", text);
      try{
        const response = await updateText(updateContent, id);
        console.log("서버 데이터 수정 결과: ",
        response.data);
        
        if(response === 400){
          alert("값을 입력해 주세요");
        }else{

        } 
      }catch(error){
          console.log('데이터 수정 실패: ', error);
          console.log("입력할 데이터: ", text);
        }
    };
    updateData();
    setText('');
  }

  //삭제하는 부분
  const deleteClick = () => {
    const deleteData = async () => {
      console.log("삭제 id: ", id);
      try{
        const response = await deleteText(id);
        console.log("데이터 삭제 성공: ", response);
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
            updateClick();
          }}>수정</Modify>
          <Delete onClick={() => {
            closeModal();
            deleteClick();
          }}>삭제</Delete>
        </BtnContainer>
      </Container>
    </>
  );

}

export default Scrap;