import addLeadingZeroToNumber from './addLeadingZeroToNumber';

const formatCreationDate = (date) => {
  const dateAsObject = new Date(date);
  const day = addLeadingZeroToNumber(dateAsObject.getDate());
  const month = addLeadingZeroToNumber(dateAsObject.getMonth());
  const year = dateAsObject.getFullYear();

  return `${day}.${month}.${year}`;
};

export default formatCreationDate;
