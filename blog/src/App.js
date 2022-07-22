import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집 메롱';
  let [text, textChange] = useState([
    '마자 코트 추천',
    '가열 코트 추천',
    '나동 코트 추천',
  ]);

  let [like, likeChange] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: 'red', fontSize: '20px' }}>블로그다!</h4>
      </div>

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

      <div className="list">
        <h4>
          {text[0]}
          <span
            onClick={() => {
              likeChange(like + 1);
            }}>
            👍
          </span>{' '}
          {like}
        </h4>
        <p>7월 22일 발행</p>
      </div>
      <div className="list">
        <h4>{text[1]}</h4>
        <p>7월 22일 발행</p>
      </div>
      <div className="list">
        <h4>{text[2]}</h4>
        <p>7월 22일 발행</p>
      </div>

      <Modal></Modal>
      <Modal />
    </div>
  );
}

let Modal = () => {
  return (
    <div className="modal">
      <h4>title</h4>
      <p>day</p>
      <p>detail</p>
    </div>
  );
};

export default App;
