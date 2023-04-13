import * as Types from './types.js';
import * as actions from './actions.js';
import * as services from '../../services';

export const coursesReducer = (state = [], action) => {
  switch (action.type) {
    case Types.GET_COURSES:
      return action.payload;

    default:
      return state;
  }
};

export const getCourses = () => {
  return async (dispatch) => {
    dispatch(actions.getCoursesAction(await services.getCourses()));
  };
};
