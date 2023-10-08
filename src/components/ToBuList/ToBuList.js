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
import { useState, useEffect } from 'react';
import SimpleSlider from './SimpleSlider';

const ToBuList = ({ userData, bucketData, newData }) => {

    const [dealt, setDealt] = useState(0);

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