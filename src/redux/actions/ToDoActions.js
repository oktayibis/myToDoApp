import AsyncStorage from '@react-native-community/async-storage';
import {
  ADD_NEW_TODO,
  SET_LOCAL_LIST,
  SET_TODO_LIST,
  UPDATE_TODO,
  DELETE_TODO,
} from './type';

export const addToList = (payload) => {
  return (dispatch) => {
    dispatch({type: ADD_NEW_TODO, payload});
  };
};

export const getTodoList = () => {
  return async (dispatch) => {
    let data = await AsyncStorage.getItem(SET_LOCAL_LIST);

    if (data) {
      dispatch({type: SET_TODO_LIST, payload: JSON.parse(data)});
    }
  };
};

export const updateItemInList = (payload) => {
  return (dispatch) => {
    dispatch({type: UPDATE_TODO, payload});
  };
};

export const deleteItem = (payload) => {
  return (dispatch) => {
    dispatch({type: DELETE_TODO, payload});
  };
};
