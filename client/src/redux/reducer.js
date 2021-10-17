import * as actions from "./actionTypes";
const reducer = (state = [], action) => {
   switch (action.type) {
      case actions.GET_POST:
         return action.payload;
      case actions.CREATE_POST:
         return [...state, action.payload];
      case actions.DELETE_POST:
         return state.filter((id) => id._id !== action.payload);

      default:
         return state;
   }
};

export default reducer;
