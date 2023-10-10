import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  height: 150px;
  border: 1px solid #bababa;
  border-radius: 4px;
  background-color: white;
  position: fixed;
  top: 260px;
  margin-left: 11%;
`;

export const Text = styled.input`
  width: 200px;
  border: none;
  border-bottom: 1px solid;
  outline: none;
  position: absolute;
  top: 35px;
  left:20px;
`;

export const BtnContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  position: absolute;
  top: 80px;
  left: 20px;
`;

export const Modify = styled.div`
  width: 80px;
  height: 45px;
  border: 1px solid;
  border-radius: 4px;
  font-size: 20px;
  font-weight: bold;
  padding: 6px;
  text-align: center;
  background-color: #3DA5F5;
  color: white;
`;

export const Delete = styled.div`
  width: 80px;
  height: 45px;
  border: 1px solid;
  border-radius: 4px;
  font-size: 20px;
  font-weight: bold;
  padding: 6px;
  text-align: center;
  background-color: white;
  color: black;
`;