// Action Creators
export function fetchAstronauts(astronauts) {
  return function (dispatch) {
    dispatch({ type: "astronauts/astronautsLoading" });
    fetch("http://api.open_notify.org/astros.json")
    .then(r => r.json())
    .then(astronauts =>
        dispatch({
          type: "astronauts/astronautsLoaded",
          payload: astronauts.people,
        })
      );
  };
}

// Reducers
const initialState = {
  entities: [], //array of astronauts
  status: "idle", //loading status for fetch
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "astronauts/astronautsLoaded":
      return {
        ...state,
        status: "idle",
        entities: action.payload,
      };
    case "astronauts/astronautsLoading":
      return {
        ...state,
        status: "loading",
      };
    default:
      return state;
  }
}
