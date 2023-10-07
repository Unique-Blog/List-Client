import Header from './Header';
import Form from './LoginForm';
import Button from './Button';
import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        id: '',
        password: '',
    });

    const handleFormSubmit = () => {
        // Form 컴포넌트에서 전달된 데이터를 사용
        const dataToSend = formData;

        // axios를 사용하여 서버로 데이터를 보냄
        axios
        .post('서버의 주소', dataToSend, {
            headers: {
            'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            const data = response.data;
            if (data.message === 'SUCCESS') {
            alert('회원가입 성공!');
            } else {
            alert('회원가입 실패...');
            }
        })
        .catch((error) => {
            console.error('에러 발생:', error);
        });
    };

    return (
        <>
        <Header />
        <Form formData={formData} setFormData={setFormData} onSubmit={handleFormSubmit} />
        <Button type="submit" onClick={handleFormSubmit} />
        </>
    );
};

export default LoginPage;
