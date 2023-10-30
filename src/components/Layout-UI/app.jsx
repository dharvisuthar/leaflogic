import { CssBaseline } from "@mui/material";
import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { componentRoutes } from "../../common/constants";
import { ThemeProvider } from "../../common/contexts";
import { AppContextWrapper } from "./app-context-wrapper";
import Home from "../home";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export const App = (props) => {
  return (
    <ThemeProvider>
      <AppContextWrapper>
        <CssBaseline />
        <ToastContainer position="top-center" autoClose="3000" />
        <Routes>
          <Fragment>
            <Route path={`${componentRoutes.home}*`} element={<Home />} />
            {/* 
            <Route path='/' element={<PrivateRoute />}>
              <Route path={componentRoutes.home} element={<Home />} />
              <Route path={componentRoutes.details} element={<Product />} />
              <Route path={componentRoutes.shop} element={<Details />} />
              <Route path={componentRoutes.cart} element={<Cart />} />
              <Route path={componentRoutes.checkout} element={<Checkout />} />
              <Route path={componentRoutes.about} element={<About />} />
              <Route path={componentRoutes.contact} element={<Contact />} />
            </Route> */}
          </Fragment>
        </Routes>
      </AppContextWrapper>
    </ThemeProvider>
  );
};
