import React from 'react';
import styled from 'styled-components';
import { changeDoneList, deleteList } from '../../redux/reducer/listReducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Done = ({ title, contents, setTodoList, todoList, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteList(id));
  };
  const handleCancel = () => {
    dispatch(changeDoneList(id));
  };
  let navigate = useNavigate();
  return (
    <>
      <Wrap>
        <NavDiv
          onClick={() => {
            navigate(`/detail/${id}`);
          }}>
          상세보기
        </NavDiv>
        <Title>{title}</Title>
        <Contents>{contents}</Contents>
        <ButtonWrap>
          <ButtonDelete onClick={handleDelete}>삭제하기</ButtonDelete>
          <ButtonComplete onClick={handleCancel}>취소</ButtonComplete>
        </ButtonWrap>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  border: 4px solid teal;
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 270px;
  margin: 12px;
`;
const Title = styled.h3`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;
const Contents = styled.h3`
  display: block;
`;
const ButtonWrap = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;
const ButtonDelete = styled.button`
  background-color: #fff;
  border: 2px solid red;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 50%;
`;
const ButtonComplete = styled.button`
  background-color: #fff;
  border: 2px solid green;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 50%;
`;
const NavDiv = styled.div`
  color: -webkit-link;
  cursor: pointer;
`;

export default Done;
