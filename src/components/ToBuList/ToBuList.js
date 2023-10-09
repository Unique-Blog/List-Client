//style
import {
    ListContainer,
    ProgressContainer,
    BodyContainer,
    Progress,
    Progress2,
    Dealt,
    SlideContainer,
    PercentNum
    
} from './style';

//library
import { useState } from 'react';
import SimpleSlider from './SimpleSlider';

const ToBuList = ({ userData, dataType }) => {
    //히위 컴포넌트에서 데이터를 전달 받는 함수
    const Todo = Math.floor(userData.percentage) || ["0"];   
    const [dealt, setDealt] = useState("0");
   

    const handleDataChange = (newDealt) => {
        setDealt(newDealt);
    };

    return (
        <ListContainer>
            <ProgressContainer>
                {dataType}
                <Progress2>
                    <Progress>
                        <Dealt 
                        style={{ width: `${dealt === "0" ? Todo : dealt}%` }} 
                        />
                    </Progress>
                </Progress2>
                <div>  </div>
                <PercentNum>
                    {`${dealt === "0" ? Todo : dealt}`}%
                    </PercentNum>
            </ProgressContainer>
            <BodyContainer>
                <SlideContainer>
                    <SimpleSlider onDataChange={handleDataChange} 
                    userData={userData}
                    dataType={dataType} />
                </SlideContainer>
            </BodyContainer>
        </ListContainer>
    );
}

export default ToBuList;