import styled from 'styled-components';
import bg from './images/main_bg.jpg';
export const GlobalBackground = styled.div`
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover; /* 'cover'로 수정 */
    background-position: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`;