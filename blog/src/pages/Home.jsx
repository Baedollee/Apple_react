import React, { useState } from 'react';
import Form from '../components/Form/Form';
import Header from '../components/Header/Header';
import Todo from '../components/Todo/Todo';
import styled from 'styled-components';
import Done from '../components/Done/Done';

const Home = () => {
  const [todoList, setTodoList] = useState([
    { title: '이니셜 타이틀', contents: '이니셜 콘텐츠1', done: false },
    { title: '이니셜 타이틀', contents: '이니셜 콘텐츠2', done: true },
  ]);
  const [inputForm, setInputForm] = React.useState({
    title: '',
    contents: '',
    done: false,
  });

  return (
    <Wrap>
      <Header />

      <Form
        inputForm={inputForm}
        todoList={todoList}
        setInputForm={setInputForm}
        setTodoList={setTodoList}
      />

      <InputTitle>해야할일!</InputTitle>

      <TodoListWrap>
        {todoList.map((item, index) => {
          if (!item.done) {
            return (
              <div key={item.id}>
                <Todo
                  title={item.title}
                  contents={item.contents}
                  todoList={todoList}
                  setTodoList={setTodoList}
                />
              </div>
            );
          }
        })}
      </TodoListWrap>

      <InputTitle>완료!!</InputTitle>

      <TodoListWrap>
        {todoList.map((item, index) => {
          if (item.done) {
            return (
              <div key={item.id}>
                <Done
                  title={item.title}
                  contents={item.contents}
                  todoList={todoList}
                  setTodoList={setTodoList}
                />
              </div>
            );
          }
        })}
      </TodoListWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;
`;

const InputTitle = styled.h2`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;
const TodoListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export default Home;
