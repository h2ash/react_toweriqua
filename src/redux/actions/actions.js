import {
  SAVE_USERS
} from '../../lib/constants';

export const saveUsers = usersToSave => ({
  type: SAVE_USERS,
  usersToSave,
});
