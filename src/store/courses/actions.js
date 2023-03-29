import * as CoursesTypes from './types';

export const getCoursesAction = (payload) => ({
  type: CoursesTypes.GET_COURSES,
  payload,
});

export const addCourseAction = (payload) => ({
  type: CoursesTypes.ADD_COURSE,
  payload,
});
