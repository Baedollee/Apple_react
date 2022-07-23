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

  let [like, likeChange] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

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
          </span>
          {like}
        </h4>
        <p>7월 22일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
          }}>
          {text[1]}
        </h4>
        <p>7월 22일 발행</p>
      </div>

      <Title />
      <div>
        {text.map(function (a, i) {
          return (
            <div className="list" key={i}>
              <h4>
                {text[i]}
                <span
                  onClick={() => {
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
      </div>
      {modal == true ? <Modal text={text} /> : null}
    </div>
  );
}

let Modal = (props) => {
  return (
    <div className="modal">
      <h4>{props.text}</h4>
      <p>day</p>
      <p>detail</p>
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
