//style
import {
    ListContainer,
    ProgressContainer,
    BodyContainer,
    Progress,
    Progress2,
    Dealt,
    SlideContainer,
} from './style';

//library


import SimpleSlider from './SimpleSlider';

const ToBuList = () => {

    const dealt = 50; // 여기에 전체 개수/ 완료한 개수 넣기

    return (
        <ListContainer>
            
            <ProgressContainer>
                To do list
                <Progress2>
                    <Progress>
                        <Dealt style={{ width: `${dealt}%` }} />
                    </Progress>
                </Progress2>
                {dealt}%
            </ProgressContainer>
            <BodyContainer>

                <SlideContainer>
                    <SimpleSlider />
                </SlideContainer>


            </BodyContainer>
        </ListContainer>
    );
}

export default ToBuList;