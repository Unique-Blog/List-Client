import axios from 'axios';


//json으로 content, completed, userId
export const addListReq = async(listdata) => {
    const sendJson = {
        content: listdata,
        completed: false,
        userId: '1'
    }
//userId 로컬에서 가져오기.
    try{
        const response = await axios.post(
            "http://10.114.10.19:8080/todo/save",
            sendJson,
            {
                headers: {
                'Content-Type': 'application/json',
                },
            }
        );
        console.log('데이터 추가 성공');
        console.log(response);
        return response;
    } catch (error) {
        const statusCode = error.response.status;
        console.log('데이터 추가 실패코드: ', statusCode);
        return statusCode;
    }
};

export const searchListReq = async(data) => {
    try{
        const response = await axios.post(
            "http://10.114.10.19:8080/todo/search",
            data,
            {
                headers: {
                'Content-Type': 'application/json',
                },
            }
        );
        console.log('서버 통신 성공');
        console.log(response);
        return response;
    } catch (error) {
        console.log('서버 통신 실패');
        console.log(error);
    }
};

export const checkBoxClickReq = async(data) => {
    try{
        const response = await axios.post(
            "http://10.114.10.19:8080/todo/search",
            data,
            {
                headers: {
                'Content-Type': 'application/json',
                },
            }
        );
        console.log('서버 통신 성공');
        console.log(response);
        return response;
    } catch (error) {
        console.log('서버 통신 실패');
        console.log(error);
    }
};