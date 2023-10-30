import React, { useState, useCallback, createContext, useContext } from "react";
import { executeApi } from "./base-context";
import { AuthenticateApi } from "../api/authenticate-api";
import { NotificationContext } from "./notification-context";
import { LoaderContext } from "./loader-context";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState();

  const { addMessage } = useContext(NotificationContext);
  const { showLoading } = useContext(LoaderContext);

  const executeUserApi = async (apiFunction, request) => {
    const response = await executeApi(
      apiFunction,
      request,
      showLoading,
      addMessage
    );

    return response;
  };

  const loginUser = async (request) => {
    showLoading(true);
    try {
      const response = await executeUserApi(

        AuthenticateApi.authenticateUser,
        request
      );
      if (response?.tokenId) {
        setUserData(response);
        setLoggedIn(true);
        showLoading(false);
      } else {
      }
    } catch (error) {
      console.log(error);
      setLoggedIn(false);
      showLoading(false);
    }
  };


  const contextValue = {
    loggedIn,
    userData,
    onLoginUser: useCallback((request) => {
      loginUser(request);
    }, []),
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
