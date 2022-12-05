/* eslint-disable default-param-last */
const homeReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_SAVED_CURRENCY':
      if (action.error) return state;
      return {
        ...state,
        currency: action.data,
      };

    default:
      return state;
  }
};

export default homeReducer;
