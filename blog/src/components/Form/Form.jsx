import React from 'react';

const Form = ({ inputForm, todoList, setInputForm, setTodoList }) => {
  const handleTitle = (e) => {
    setInputForm({ ...inputForm, title: e.target.value });
  };
  const handleContents = (e) => {
    setInputForm({ ...inputForm, contents: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todoList, inputForm]);
    setInputForm({ title: '', contents: '' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={inputForm.title} onChange={handleTitle} />
        <input value={inputForm.contents} onChange={handleContents} />
        <button type="submit">버튼</button>
      </form>
    </div>
  );
};

export default Form;
