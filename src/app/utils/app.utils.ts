export const validateNumber = (evt, commaAccepted = false) => {
  const keyCodeName = 'keyCode';
  const key = evt[keyCodeName];
  return (key >= 48 && key <= 57) || (key === 44 && commaAccepted);
};

export const shuffle = (a: Array<any>) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return [a.slice(0, 5), a.slice(5, 10)];
};
