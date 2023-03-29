import * as Types from './types';
import * as actions from './actions';
import * as services from '../../services';

export const authorsReducer = (state = [], action) => {
  switch (action.type) {
    case Types.GET_AUTHORS:
      return action.payload;

    default:
      return state;
  }
};

export const getAuthors = () => {
  return async (dispatch) => {
    dispatch(actions.getAuthorsAction(await services.getAuthors()));
  };
};
