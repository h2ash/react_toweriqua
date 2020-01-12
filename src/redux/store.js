import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { users } from './reducers/users';

const rootReducer = combineReducers({
  users,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(),
);

export default store;
