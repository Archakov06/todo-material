export const addTask = (text, checked) => ({
  type: 'ADD_TASK',
  payload: {
    text,
    checked,
  },
});

export const fetchTasks = () => async (dispatch) => {
  const resp = await fetch('https://61ba2ba348df2f0017e5a968.mockapi.io/tasks');
  if (resp.ok) {
    const data = await resp.json();
    dispatch({
      type: 'SET_TASKS',
      payload: data,
    });
  }
};

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
