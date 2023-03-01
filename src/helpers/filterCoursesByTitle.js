const filterCoursesByTitle = (courses, title) => {
  return courses.filter((course) => {
    return course.title.toLowerCase().includes(title.toLowerCase());
  });
};

export default filterCoursesByTitle;
