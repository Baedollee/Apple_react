import React, { useState } from 'react';
import Form from '../components/Form/Form';
import Header from '../components/Header/Header';
import Todo from '../components/Todo/Todo';
import styled from 'styled-components';
import Done from '../components/Done/Done';
const Home = () => {
  const [todoList, setTodoList] = useState([
    { title: '이니셜 타이틀', contents: '이니셜 콘텐츠', done: false },
    { title: '이니셜 타이틀', contents: '이니셜 콘텐츠', done: true },
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
      <TodoListWrap>
        {todoList.map((item, index) => {
          if (!item.done) {
            return (
              <div key={`${item.title}_${index}`}>
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
      {/* <TodoListWrap>
        {todoList.map((item, index) => {
          if (item.done) {
            return (
              <div key={`${item.title}_${index}`}>
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
      </TodoListWrap> */}
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  min-width: 800px;
  justify-content: center;
  align-items: center;
`;
const TodoListWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export default Home;
