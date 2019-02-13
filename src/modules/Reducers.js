const RATING = "RATING";

// Action Creators

const rating = (count, key) => ({
  type: RATING,
  count,
  key
});

const actionCreaters = {
  rating
};

// Reducer

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case RATING:
      return applyRating(state, action);
    default:
      return state;
  }
}

// Reducer Functions

function applyRating(state, action) {
  console.log("클릭 액션", action, "Action.key : ", action.key);
  return {
    ...state,
    count: action.key
  };
}

// Export Action Creaters

export { actionCreaters };

// Export Reducer

export default reducer;
