const addLeadingZeroToNumber = (number, numberOfDigits = 2) => {
  return ('0' + number).slice(-numberOfDigits);
};

export default addLeadingZeroToNumber;
