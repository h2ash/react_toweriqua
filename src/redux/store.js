import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import users from './reducers/users';

const rootRerducer = combineReducers({
  users,
});

const store = createStore(
  rootRerducer,
  composeWithDevTools(),
);

export default store;
