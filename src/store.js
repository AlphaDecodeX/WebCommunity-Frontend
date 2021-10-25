import { createStore } from "redux";
import reducers from "./components/reducers";

const store = createStore(reducers);

export default store;