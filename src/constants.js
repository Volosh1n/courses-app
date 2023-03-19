const API_HOST = 'http://localhost:4000';

export const API_ROUTES = {
  login: API_HOST + '/login',
  register: API_HOST + '/register',
  course: (id) => {
    return API_HOST + `/courses/${id}`;
  },
  coursesAll: API_HOST + '/courses/all',
  newCourse: API_HOST + '/courses/add',
  authorsAll: API_HOST + '/authors/all',
  newAuthor: API_HOST + '/authors/add',
};
