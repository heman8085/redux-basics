const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "incrementBy2":
      return {
        counter: state.counter + 2,
      };
    case "decrementBy2":
      return {
        counter: state.counter - 2,
      };
    default:
      return state;
  }
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "incrementBy2" });
store.dispatch({ type: "decrementBy2" });
