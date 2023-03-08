const filterCoursesByTitle = (courses, title) =>
  courses.filter((course) => {
    return course.title.toLowerCase().includes(title.toLowerCase());
  });

export default filterCoursesByTitle;
