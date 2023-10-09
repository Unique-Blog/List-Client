//style
import {
    ListContainer,
    ProgressContainer,
    BodyContainer,
    Progress,
    Progress2,
    Dealt,
    SlideContainer,
    PercentNum,
    NaNButton,
    PencilImg
    
} from './style';
import pencil from '../../images/pencil.png'

//library
import { useState } from 'react';
import SimpleSlider from './SimpleSlider';
import { useNavigate } from "react-router-dom";

const ToBuList = ({ userData, dataType }) => {
    const navigate = useNavigate();

    //히위 컴포넌트에서 데이터를 전달 받는 함수
    const Todo = Math.floor(userData.percentage) || ["0"];   
    const [dealt, setDealt] = useState("0");
   

    const handleDataChange = (newDealt) => {
        setDealt(newDealt);
    };
    
    const navigateHandler = () => {
        if(dataType === "To do list"){
            navigate('/ToDoListPage');
        }
        else{
            navigate('/BucketListPage');
        }
    }

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
                    { userData.percentage === "NaN" ?
                    <NaNButton
                    onClick={() => navigateHandler()}>
                        리스트 작성하기
                        <PencilImg src = {pencil} alt = "연필"/>
                    </NaNButton>
                    :
                    <SimpleSlider onDataChange={handleDataChange} 
                    userData={userData}
                    dataType={dataType} />
                    }   
                </SlideContainer>
            </BodyContainer>
        </ListContainer>
    );
}

export default ToBuList;