export const exampleReducer = function (state = {}, {type, payload}) {
    let nextState = state;

    if (type === "ANY_ACTION") {
        nextState = payload;
    }

    return nextState;
  };
