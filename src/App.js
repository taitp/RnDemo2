import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Main from './components/Main'
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

// Bước 1: Tạo defaultState
const defaultState = {
  arrWords: [
    { id: 1, en: 'action', vn: 'hành động', memorized: true, isShow: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false, isShow: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true, isShow: false },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true, isShow: false },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false, isShow: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true, isShow: false },
    { id: 7, en: 'yard', vn: 'sân', memorized: false, isShow: false },
    { id: 8, en: 'yesterday', vn: 'hôm qua', memorized: true, isShow: false },
    { id: 9, en: 'young', vn: 'trẻ', memorized: true, isShow: false },
    { id: 10, en: 'zero', vn: 'số 0', memorized: false, isShow: false },
    { id: 11, en: 'abandon', vn: 'từ bỏ', memorized: true, isShow: false },
    { id: 12, en: 'above', vn: 'ở trên', memorized: false, isShow: false },
    { id: 13, en: 'against', vn: 'phản đối', memorized: true, isShow: false },
    { id: 14, en: 'arrange', vn: 'sắp xếp', memorized: false, isShow: false }
  ],
  filterStatus: 'SHOW_ALL',
  isAdding: false
};

// Bước 2: reducer -> tiên đoán action
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'FILTER_SHOW_ALL':
      return { ...state, filterStatus: 'SHOW_ALL' };
    case 'FILTER_MEMORIZED':
      return { ...state, filterStatus: 'MEMORIZED' };
    case 'FILTER_NEED_PRACTICE':
      return { ...state, filterStatus: 'NEED_PRACTICE' };
    case 'TOGGLE_MEMORIZED':
      return {
        ...state,
        arrWords: state.arrWords.map(e => {
          if (e.id !== action.id) return e;
          return { ...e, memorized: !e.memorized };
        })
      };
    case 'TOGGLE_SHOW':
      return {
        ...state,
        arrWords: state.arrWords.map(e => {
          if (e.id !== action.id) return e;
          return { ...e, isShow: !e.isShow };
        })
      };
    case 'TOGGLE_IS_ADDING':
      return {
        ...state,
        isAdding: !state.isAdding
      };
    case 'ADD_WORD':
      return {
        ...state,
        arrWords: [{
          id: state.arrWords.length + 1,
          en: action.en,
          vn: action.vn,
          memorized: false,
          isShow: true
        }].concat(state.arrWords)
      };
    default:
      break;
  }
  return state;
}
// Bước 3: Tạo ra store
// Cài đặt thư viện redux: yarn add redux
const store = createStore(reducer);

// Bước 4: tích hợp vào trong ứng dụng react native
// Cài đặt thư viện react-redux: yarn add react-redux

// Tích hợp vào trong ứng dụng react - Provider -> 1 componet 

