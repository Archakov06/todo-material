const initialState = {
  filterBy: 'all',
};

export function filterReducer(state = initialState, action) {
  if (action.type === 'SET_FILTER') {
    return {
      ...state,
      filterBy: action.payload,
    };
  }

  return state;
}
