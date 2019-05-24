/** @format */
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../redux/rootReducer";

const middleware = [
  thunk,
  // more middleware
];

const store = createStore(rootReducer, {}, applyMiddleware(...middleware));

export default store
// const configureStore = () => {
//   let store = null;
//   if (__DEV__) {
//     if (Constants.useReactotron) {
//       store = Reactotron.createStore(
//         rootReducer,
//         INITIAL_STATE,
//         applyMiddleware(...middleware)
//       );
//       connectConsoleToReactotron();
//     } else {
//       const composeEnhancers =
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//       store = composeEnhancers(applyMiddleware(...middleware))(createStore)(
//         rootReducer
//       );

//       if (module.hot) {
//         // Enable Webpack hot module replacement for reducers
//         module.hot.accept(rootReducer, () => {
//           const nextRootReducer = rootReducer;
//           store.replaceReducer(nextRootReducer);
//         });
//       }

//     }
//   } else {
//     if (Constants.useReactotron) {
//       store = Reactotron.createStore(
//         rootReducer,
//         INITIAL_STATE,
//         applyMiddleware(...middleware)
//       );
//       connectConsoleToReactotron();
//     } else {
//       store = compose(applyMiddleware(...middleware))(createStore)(rootReducer);
//     }
//   }
//   return store;
// };

// export default configureStore();
