import { createSlice } from '@reduxjs/toolkit';

export const listSlice = createSlice({
  name: 'list',
  // 초기값 설정
  initialState: {
    list: [
      { title: '타이틀', contents: '컨텐츠', done: false, id: '0_타이틀' },
    ],
  },
  reducers: {
    postList: (state, action) => {
      // action.payload = {title, contents, id}
      state.list = [...state.list, action.payload];
    },
    deleteList: (state, action) => {
      // action.payload = id
      let dummyArray = [];
      state.list.map((item) => {
        if (item.id === action.payload) {
        } else {
          dummyArray.push(item);
        }
        state.list = dummyArray;
      });
    },
    changeDoneList: (state, action) => {
      // action.payload = id
      state.list.map((item) => {
        if (item.id === action.payload) {
          item.done = !item.done;
          return;
        }
      });
    },
  },
});

export const { postList, deleteList, changeDoneList } = listSlice.actions;

export default listSlice.reducer;
