import logo from './logo.svg';
import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import NotLoggedIn from "./components/NotLoggedIn";
import React from "react";

export default function App() {
  const [isloggedIn, setIsLoggedIn] = React.useState(true);
  let template;
  if (isloggedIn) {
    template = <HeaderComponent username="Debby" />;
  } else {
    template = <NotLoggedIn />;
  }
  return <div className="App">{template}</div>;
}

