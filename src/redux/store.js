import { createStore } from "redux";
import rootReducer from "./root-reducers.js";

const store = createStore(rootReducer);

export default store;
