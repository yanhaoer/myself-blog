import React from "react";
import { Navigate } from "react-router-dom";
import Login from "../views/login";
import Dashboard from "../views/dashboard";

const element = [
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];

export default element;
