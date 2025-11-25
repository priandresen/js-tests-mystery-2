export const mystery2 = (num) => {
  if (num % 4 !== 0) {
    return false;
  } else if (num % 100 === 0 && num % 400 !== 0) {
    return false;
  } else {
    return true;
  }
};
