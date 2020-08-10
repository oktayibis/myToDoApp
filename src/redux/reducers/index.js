import {combineReducers} from 'redux';
import ToDoListReducers from './ToDoListReducers';

export default combineReducers({
  listResponse: ToDoListReducers,
});
