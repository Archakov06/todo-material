const initialState = [];

export function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_TASKS':
      return action.payload;

    case 'ADD_TASK':
      return [
        ...state,
        {
          id: state[state.length - 1].id + 1,
          text: action.payload.text,
          completed: action.payload.checked,
        },
      ];

    case 'REMOVE_TASK':
      return state.filter((obj) => obj.id !== action.payload);

    case 'TOGGLE_COMPLETED':
      return state.map((obj) =>
        obj.id === action.payload
          ? {
              ...obj,
              completed: !obj.completed,
            }
          : obj,
      );

    case 'COMPLETE_ALL':
      return state.map((obj) => ({
        ...obj,
        completed: true,
      }));

    case 'CLEAR':
      return [];

    default:
      return state;
  }
}
