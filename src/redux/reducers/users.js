import {
  SAVE_USERS
} from '../../lib/constants';

export const users = (state = [], action) => {
  switch (action.type) {
    case SAVE_USERS: 
      return action.usersToSave;
    default:
      return state;
  }
};
