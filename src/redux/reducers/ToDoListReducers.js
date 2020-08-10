import AsyncStorage from '@react-native-community/async-storage';
import MockData from '../../mock/index';
import {
  SET_TODO_LIST,
  ADD_NEW_TODO,
  SET_LOCAL_LIST,
  UPDATE_TODO,
  DELETE_TODO,
} from '../actions/type';
const INITIAL_STATE = {
  list: [...MockData],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TODO_LIST:
      return {
        ...state,
        list: action.payload,
      };
    case ADD_NEW_TODO:
      let arr = [action.payload, ...state.list];
      AsyncStorage.setItem(SET_LOCAL_LIST, JSON.stringify(arr));
      return {
        ...state,
        list: arr,
      };
    case UPDATE_TODO:
      arr = state.list;
      let index = arr.findIndex((val) => val.id === action.payload.id);
      arr.splice(index, 1, action.payload);
      AsyncStorage.setItem(SET_LOCAL_LIST, JSON.stringify(arr));
      return {
        ...state,
        list: [...arr],
      };
    case DELETE_TODO:
      let newArray = state.list.filter((val) => val.id !== action.payload.id);
      AsyncStorage.setItem(SET_LOCAL_LIST, JSON.stringify(newArray));
      return {
        ...state,
        list: [...newArray],
      };
    default:
      return state;
  }
};
