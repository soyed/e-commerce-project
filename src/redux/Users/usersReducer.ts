import { STATUS } from '../Category/utils';

const initialState = {
  status: STATUS.IDLE,
  message: '',
  user: null,
};

const usersReducer = (state = initialState, action: any) => {
  switch (action) {
    default:
      return initialState;
  }
};

export default usersReducer;
