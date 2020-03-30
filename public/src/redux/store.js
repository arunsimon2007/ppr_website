import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";

import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./root-reducer";
import rootEpic from "./root-epic";

const epicMiddleware = createEpicMiddleware();
const middlewares = [epicMiddleware];

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  epicMiddleware.run(rootEpic);
  return store;
}
