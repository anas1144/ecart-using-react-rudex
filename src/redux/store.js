import { createStore } from "redux";
import rootReduxers from "./reduxer";

const store = createStore(rootReduxers);

export default store;
