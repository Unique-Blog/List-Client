import { Header, Container } from "./style";
import ToBuList from "../../components/ToBuList/ToBuList";


import SimpleSlider from '../../components/ToBuList/SimpleSlider';


const HomePage = () => {
    return (
        <>
            <Header>나만의 리스트</Header>
            <Container>
                <ToBuList/>
                <ToBuList/>
            </Container>
        </>
    );

}
export default HomePage;


