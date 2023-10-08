import { Container, BtnContainer, Modify, Delete, Text } from './style';

const Scrap = () => {
  return (
    <>
      <Container>
        <Text type='text' placeholder='수정하기'/>
        <BtnContainer>
          <Modify>수정</Modify>
          <Delete>삭제</Delete>
        </BtnContainer>
      </Container>
    </>
  );
}

export default Scrap;