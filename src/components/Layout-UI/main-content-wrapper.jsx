import React from "react";
import { layoutStyle } from "../Layout-UI/sidebar/style";
import { BackdropComponent } from './backdrop-component';
import { useLayout } from "../../common/hooks";

export const MainContentWrapper = ({ children }) => {
  const classes = layoutStyle();
  const { isOpen } = useLayout();


  return (
    <div>
      <BackdropComponent></BackdropComponent>
      <div className={isOpen ? classes.mainContent : classes.mainContentOff}>{children}</div>
    </div>
  );
};
