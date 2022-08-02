import React, { useEffect, useState } from 'react';
import Form from '../components/Form/Form';
import Header from '../components/Header/Header';
import Todo from '../components/Todo/Todo';
import styled from 'styled-components';
import Done from '../components/Done/Done';
import { useSelector } from 'react-redux';

const Home = () => {
  const todoList = useSelector((state) => state.listReducer.list);
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Wrap>
      <Header />

      <Form />

      <InputTitle>해야할일!</InputTitle>

      <TodoListWrap>
        {todoList.map((item, index) => {
          if (!item.done) {
            return (
              <Todo
                key={item.id}
                title={item.title}
                contents={item.contents}
                id={item.id}
              />
            );
          } else {
            return null;
          }
        })}
      </TodoListWrap>

      <InputTitle>완료!!</InputTitle>

      <TodoListWrap>
        {todoList.map((item, index) => {
          if (item.done) {
            return (
              <Done
                key={item.id}
                title={item.title}
                contents={item.contents}
                id={item.id}
              />
            );
          } else {
            return null;
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
  margin-inline-start: 20px;
  margin-inline-end: 0px;
  font-weight: bold;
`;
const TodoListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export default Home;
