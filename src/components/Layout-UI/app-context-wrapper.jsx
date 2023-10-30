import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import {
  LoaderProvider,
  NotificationProvider,
  AuthProvider,
  LayoutProvider,
  AllProvider
} from "../../common/contexts";
import { useTheme } from "../../common/hooks";
import { CookiesProvider } from "react-cookie";
import Compose from "./compose";

export const AppContextWrapper = ({ children }) => {
  const { currentTheme } = useTheme();

  const providers = [
    LayoutProvider,
    LoaderProvider,
    NotificationProvider,
    AuthProvider,
    AllProvider,
    CookiesProvider
  ]

  return (
    <ThemeProvider theme={currentTheme}>
      <Compose components={providers}>{children}</Compose>
    </ThemeProvider>
  );
};
