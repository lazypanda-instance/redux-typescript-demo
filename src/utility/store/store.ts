import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { UserState } from "../type";
import UserReducer from "./UserReducer";

const saveToSessionStorage = (state: UserState) => {
  try {
    const serialisedState = JSON.stringify(state);
    sessionStorage.setItem("state", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

const loadFromSessionStorage = () => {
  try {
    const serialisedState = sessionStorage.getItem("state");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const store = createStore(UserReducer, loadFromSessionStorage(), applyMiddleware(thunk));

store.subscribe(() => saveToSessionStorage(store.getState()));

export default store;