import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <h1>I am home</h1>
      <Outlet />
    </div>
  );
};

export default Home;
