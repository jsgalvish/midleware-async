export const getQuoteAction = () => (dispatch) => {
  dispatch({
    type: 'QUOTE_REQUESTED',
  });

  fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then((response) => response.json())
    .then((data) => dispatch({
      type: 'QUOTE_RECEIVED',
      payload: data,
    }))
    .catch((error) => dispatch({
      type: 'QUOTE_FAILED',
      payload: error,
    }));
};
