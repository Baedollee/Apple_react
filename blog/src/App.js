import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집 메롱';

  let [text, textChange] = useState([
    '테스트입니다',
    '여자 코트 추천',
    '남자 코트 추천',
    '아동 코트 추천',
  ]);

  let [like, likeChange] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [text_input, text_input_change] = useState('');
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: 'red', fontSize: '20px' }}>블로그다!</h4>
      </div>

      <>
        <button
          onClick={() => {
            let copy = [...text];
            copy.sort();
            textChange(copy);
          }}>
          가나다라순정렬
        </button>

        <button
          onClick={() => {
            let copy = [...text];
            copy[1] = '여자코트 추천';
            textChange(copy);
          }}>
          클릭
        </button>
      </>

      {text.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(true);
                setTitle(i);
              }}>
              {text[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...like];
                  copy[i] = copy[i] + 1;
                  likeChange(copy);
                }}>
                👍
              </span>
              {like[i]}
            </h4>
            <p>2월 18일 발행</p>
          </div>
        );
      })}

      <button
        onClick={() => {
          setTitle(0);
        }}>
        글제목0
      </button>
      <button
        onClick={() => {
          setTitle(1);
        }}>
        글제목1
      </button>
      <button
        onClick={() => {
          setTitle(2);
        }}>
        글제목2
      </button>

      <input
        onChange={(e) => {
          text_input_change(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let copy = [...text];
          copy.unshift(text_input);
          textChange();
        }}>
        추가
      </button>

      {modal == true ? (
        <Modal
          title={title}
          textChange={textChange}
          color={'skyblue'}
          text={text}
        />
      ) : null}
    </div>
  );
}

let Modal = (props) => {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.text[props.title]}</h4>
      <p>day</p>
      <p>detail</p>
      <button
        onClick={() => {
          props.textChange(['남자코트 추천']);
        }}>
        글수정
      </button>
    </div>
  );
};

function Title() {
  return (
    <div className="list">
      <h4>여자 옷!</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
export default App;
