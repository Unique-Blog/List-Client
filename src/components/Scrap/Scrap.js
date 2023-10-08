import { Container, BtnContainer, Modify, Delete, Text } from './style';

const Scrap = ({isOpen, closeModal}) => {
  return (
    <>
      <Container style={{display: isOpen ? "block" : "none"}}>
        <Text type='text' placeholder='수정하기'/>
        <BtnContainer>
          <Modify onClick={closeModal}>수정</Modify>
          <Delete onClick={closeModal}>삭제</Delete>
        </BtnContainer>
      </Container>
    </>
  );
}

export default Scrap;