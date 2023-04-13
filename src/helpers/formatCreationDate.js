import addLeadingZeroToNumber from './addLeadingZeroToNumber';

const formatCreationDate = (date) => {
  return date
    .split('/')
    .map((number) =>
      number.length === 1 ? addLeadingZeroToNumber(number) : number
    )
    .join('.');
};

export default formatCreationDate;
