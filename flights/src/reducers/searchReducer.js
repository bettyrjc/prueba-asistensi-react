import { GET_SEARCHS, LOADING, END_LOADING } from "../actions/types";

const initialState = {
  loading: false,
  search: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case END_LOADING:
      return {
        ...state,
        loading: false,
      };
    case GET_SEARCHS:
      return {
        ...state,
        loading: false,
        search: action.payload,
      };

    default:
      return state;
  }
}
