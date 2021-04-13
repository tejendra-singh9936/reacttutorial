import { ADD_TO_CART, REMOVE_FROM_CART } from "../constant";

export default function cardItem(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      // console.log("reducer", action);
      return [...state, { cardData: action.data }];
    case REMOVE_FROM_CART:
      return (state.length = state.length - 1);
    default:
      return state;
  }
}
