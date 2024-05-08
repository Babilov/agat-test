import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/rootReducet";

export const store = configureStore({ reducer: rootReducer });
