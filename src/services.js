import { API_ROUTES } from './constants';

export const getCourses = async () => {
  const response = await fetch(API_ROUTES.coursesAll);
  const courses = await response.json();
  return courses.result;
};

export const getAuthors = async () => {
  const response = await fetch(API_ROUTES.authorsAll);
  const authors = await response.json();
  return authors.result;
};
