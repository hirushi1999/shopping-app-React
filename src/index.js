import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NewpProduct from "./pages/NewpProduct";
import SignUp from "./pages/SignUp";
import { store } from "./redux/index";
import { Provider } from "react-redux";
import Category from "./pages/Category";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />}></Route>
      <Route path="order" element={<Order />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="newproduct" element={<NewpProduct />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="category" element={<Category/>} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

reportWebVitals();
