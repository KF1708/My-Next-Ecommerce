"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";

//Receives the store (Redux store) as a prop. Wraps the children, making Redux's global state accessible throughout the app.

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
