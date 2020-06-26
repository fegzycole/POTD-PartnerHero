export const getTodayDate = () => {
  const today = new Date();
  return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
};

export const getPrevDate = date => {
  let prevDate = new Date(date);

  prevDate = prevDate.setDate(prevDate.getDate() - 1);

  return `${prevDate.getFullYear()}-${prevDate.getMonth() + 1}-${prevDate.getDate()}`;
};

export const getNextDate = date => {
  let prevDate = new Date(date);

  prevDate = prevDate.setDate(prevDate.getDate() + 1);

  return `${prevDate.getFullYear()}-${prevDate.getMonth() + 1}-${prevDate.getDate()}`;
};
