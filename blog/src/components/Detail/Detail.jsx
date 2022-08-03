import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Detail = () => {
  const [item, setItem] = useState({});
  const params = useParams();
  const { id } = params;
  const listItem = useSelector((state) => state.listReducer.list);

  useEffect(() => {
    if (!listItem || listItem.length <= 0) {
      return;
    }
    listItem.map((item, index) => {
      if (item.id === id) {
        setItem(item);
        return;
      }
    });
    return () => {
      setItem({});
    };
  }, [id, listItem]);

  if (!item || !item.id || !item.title || !item.contents) {
    return <></>;
  }

  return (
    <WrapDiv>
      <BoxDiv>
        <div>
          <HeadDiv>
            <p>ID:{item.id}</p>
            <Btn>
              <Link to={`../`}>이전으로</Link>
            </Btn>
          </HeadDiv>
          <TitleH1>{item.title}</TitleH1>
          <ContentH3>{item.contents}</ContentH3>
        </div>
      </BoxDiv>
    </WrapDiv>
  );
};

const WrapDiv = styled.div`
  border: 2px solid rgb(238, 238, 238);
  width: 100%;
  height: 100vh;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;
const BoxDiv = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;
const HeadDiv = styled.div`
  display: flex;
  height: 80px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0px 24px;
  -webkit-box-align: center;
  align-items: center;
`;
const Btn = styled.button`
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 120px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  cursor: pointer;
`;
const TitleH1 = styled.h1`
  padding: 0px 24px;
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;
const ContentH3 = styled.h3`
  padding: 0px 24px;
  display: block;
`;

export default Detail;
