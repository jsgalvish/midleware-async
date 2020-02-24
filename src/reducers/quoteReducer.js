const initialState = { data: [], status: 'empty' };

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'QUOTE_REQUESTED':
      state = {
        ...state,
        status: 'waiting',
      };
      break;
    case 'QUOTE_RECEIVED':
      state = {
        ...state,
        data: [...action.payload],
        status: 'received',
      };
      break;
    case 'QUOTE_FAILED':
      state = {
        ...state,
        status: 'failed',
        error: action.payload,
      };
      break;
    default:
      break;
  }
  return state;
};

export default quoteReducer;
