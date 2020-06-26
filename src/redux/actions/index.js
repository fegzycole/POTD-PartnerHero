export const actions = {
  ADD_DATE: 'ADD_DATE',
};

export const addDate = payload => ({
  type: actions.ADD_DATE,
  payload,
});
