export const langReducer = function (state = 'en', {type, payload}) {
    let nextState = state;

    if (type === "CHANGE_LANGUAGE") {
        nextState = payload;
    }

    return nextState;
  };
