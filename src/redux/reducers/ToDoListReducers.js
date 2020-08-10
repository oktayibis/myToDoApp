import AsyncStorage from '@react-native-community/async-storage';
import MockData from '../../mock/index';
import {SET_TODO_LIST, ADD_NEW_TODO, SET_LOCAL_LIST} from '../actions/type';
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
    default:
      return state;
  }
};
