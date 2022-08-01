import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { postList } from '../../redux/reducer/listReducer';

const Form = () => {
  const [inputForm, setInputForm] = useState({
    title: '',
    contents: '',
    done: false,
  });
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.listReducer.list);

  const handleTitle = (e) => {
    setInputForm({ ...inputForm, title: e.target.value });
  };
  const handleContents = (e) => {
    setInputForm({ ...inputForm, contents: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputForm.title === '' || inputForm.contents === '') {
      alert('값을 넣어주세요');
    } else {
      dispatch(
        postList({
          title: inputForm.title,
          contents: inputForm.contents,
          id: `${todoList.length}_${inputForm.title}`,
        })
      );
      setInputForm({ title: '', contents: '' });
    }
  };
  return (
    <Head>
      <InputWrap>
        <h2>제목</h2>
        <InputAdd value={inputForm.title} onChange={handleTitle} />
        <h2>내용</h2>
        <InputAdd value={inputForm.contents} onChange={handleContents} />
      </InputWrap>
      <InputBtn type="submit" onClick={handleSubmit}>
        추가하기
      </InputBtn>
    </Head>
  );
};

const Head = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;

  background-color: #eee;
  border-radius: 12px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px;
`;
const InputWrap = styled.form`
  align-items: center;
  display: flex;
  gap: 20px;
`;
const InputAdd = styled.input`
  border: none;
  border-radius: 12px;
  height: 40px;
  padding: 0 12px;
  width: 240px;
`;
const InputBtn = styled.button`
  background-color: orange;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  height: 40px;
  width: 140px;
`;
export default Form;
