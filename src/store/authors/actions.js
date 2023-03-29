import * as AuthorsTypes from './types';

export const getAuthorsAction = (payload) => ({
  type: AuthorsTypes.GET_AUTHORS,
  payload,
});
