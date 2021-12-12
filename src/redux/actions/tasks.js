export const addTask = (text, checked) => ({
  type: 'ADD_TASK',
  payload: {
    text,
    checked,
  },
});

export const removeTask = (id) => ({
  type: 'REMOVE_TASK',
  payload: id,
});

export const toggleCompleted = (id) => ({
  type: 'TOGGLE_COMPLETED',
  payload: id,
});

export const completeAll = () => ({
  type: 'COMPLETE_ALL',
});

export const clearAll = () => ({
  type: 'CLEAR',
});
