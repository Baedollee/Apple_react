import React from 'react';
import styled from 'styled-components';

const Form = ({ inputForm, todoList, setInputForm, setTodoList }) => {
  const handleTitle = (e) => {
    setInputForm({ ...inputForm, title: e.target.value });
  };
  const handleContents = (e) => {
    setInputForm({ ...inputForm, contents: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      { ...inputForm, id: todoList.length + 1, done: false },
    ]);
    setInputForm({ title: '', contents: '' });
  };
  console.log(todoList);
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
