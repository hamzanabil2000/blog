import React from "react";
import CategoryFormContextProvider from "./contexts/CategoryFormContext";

export default function Layout({ children }) {
  return <CategoryFormContextProvider>{children}</CategoryFormContextProvider>;
}
