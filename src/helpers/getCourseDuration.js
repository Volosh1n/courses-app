import addLeadingZeroToNumber from './addLeadingZeroToNumber';

const getCourseDuration = (minutes) => {
  const hours = addLeadingZeroToNumber(Math.trunc(minutes / 60));
  const restOfMinutes = addLeadingZeroToNumber(minutes - hours * 60);
  return `${hours}:${restOfMinutes} hours`;
};

export default getCourseDuration;
