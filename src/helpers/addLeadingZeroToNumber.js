const addLeadingZeroToNumber = (number, numberOfDigits = 2) =>
  ('0' + number).slice(-numberOfDigits);

export default addLeadingZeroToNumber;
