import styled from 'styled-components';
import bg from './images/main_bg.jpg';
export const GlobalBackground = styled.div`
    position: fixed;
    top: 5%;
    left: 5%;   
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: contain; /* 'cover'로 수정 */
    background-position: center;
    width: 90vw;
    height: 90vh;
`;