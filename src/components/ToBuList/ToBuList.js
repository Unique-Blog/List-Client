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
import { useState } from 'react';
import SimpleSlider from './SimpleSlider';

const ToBuList = ({ userData, bucketData, newData }) => {
    //히위 컴포넌트에서 데이터를 전달 받는 함수
    const [dealt, setDealt] = useState(50);
    const handleDataChange = (newDealt) => {
        setDealt(newDealt);
    };
    const listType = userData ? "To do list" : "Bucket";

    return (
        <ListContainer>
            <ProgressContainer>
                {listType}
                <Progress2>
                    <Progress>
                        <Dealt style={{ width: `${dealt}%` }} />
                    </Progress>
                </Progress2>
                {dealt}%
            </ProgressContainer>
            <BodyContainer>
                <SlideContainer>
                    <SimpleSlider onDataChange={handleDataChange} userData={userData || bucketData} />
                </SlideContainer>
            </BodyContainer>
        </ListContainer>
    );
}

export default ToBuList;