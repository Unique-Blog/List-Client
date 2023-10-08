import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 250px;
  height: 150px;
  border: 1px solid #bababa;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
  background-color: white;
`;

export const Text = styled.input`
  width: 200px;
  border: none;
  border-bottom: 1px solid;
  outline: none;
`;

export const BtnContainer = styled.div`
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px
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