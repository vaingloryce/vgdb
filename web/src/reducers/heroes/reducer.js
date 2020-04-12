import {
  HEROES_LIST_FETCHING,
  HEROES_LIST_SUCCESS,
  HEROES_LIST_FAILURE,
} from '../../models/heroes/constants';

const INITIALSTATE = {
  list: [],
  isFetching: false,
  error: null
};

export default function (state = INITIALSTATE, action) {
  switch (action.type) {
    case HEROES_LIST_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case HEROES_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.payload
      };
    case HEROES_LIST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return { ...state }
  }
};
