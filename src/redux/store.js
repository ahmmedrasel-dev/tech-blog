import rootReducer from "./reducer/rootReducer";

const { createStore } = require("redux");

const store = createStore(rootReducer);
export default store;