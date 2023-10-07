import styled from 'styled-components';
import bg from './images/main_bg.jpg';
export const GlobalBackground = styled.div`
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover; /* 'cover'로 수정 */
    background-position: top;
    position: fixed;
    width: 100vw;
    height: 100vh;
`;