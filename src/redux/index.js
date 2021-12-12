import { createStore, combineReducers } from 'redux';
import { filterReducer } from './reducers/filter';
import { tasksReducer } from './reducers/tasks';

const rootRedcuer = combineReducers({
  filter: filterReducer,
  tasks: tasksReducer,
});

const store = createStore(rootRedcuer);

export default store;
