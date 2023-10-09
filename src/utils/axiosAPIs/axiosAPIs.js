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

//update
export const updateText = async(listdata, id) => {
    console.log('api id: ', id);
    const sendJson = {
        content: listdata,
        id: id,
        userId: '1'
    }
    try{
        const response = await axios.post(
            "http://10.114.10.19:8080/todo/update",
            sendJson,
            {
                headers: {
                'Content-Type': 'application/json',
                },
            }
        );
        console.log('데이터 수정 성공');
        console.log(response);
        return response;
    }catch (error){
        console.log('데이터 수정 실패');
        console.log(error);
    }
};

export const deleteText = async(id) => {
    console.log('api delete id: ', id);
    const sendJson = {
        id: id,
        userId: '1'
    }
    try{
        const response = await axios.delete(
            `http://10.114.10.19:8080/todo/delete/${id}`,
            sendJson)
            console.log('데이터 삭제 성공');
            console.log(response);
    }catch(error){
        console.log('데이터 삭제 실패');
        console.log(error)
    }
}