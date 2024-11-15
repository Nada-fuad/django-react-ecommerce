import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducers,
  productDetailsReducer,
} from "./reducers/productReducers";
import { cartReducers } from "./reducers/cartReducers";

const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailsReducer,
  cart: cartReducers,
});
const cartItemFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const initialState = { cart: { cartItems: cartItemFromStorage } };
const middleware = [thunk];
const stor = createStore(
  reducer,
  initialState,

  composeWithDevTools(applyMiddleware(...middleware))
);
export default stor;
