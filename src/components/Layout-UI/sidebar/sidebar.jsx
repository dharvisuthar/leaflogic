import React, { } from "react";
import { Drawer, List } from "@mui/material";
import { layoutStyle } from "./style";
import { MenuLinkItem } from "./menu-link-item";
import { useAllApi, useLayout } from "../../../common/hooks";

export const Sidebar = () => {
  const classes = layoutStyle();
  const { isOpen, menuItems, updateActiveMenuItem } = useLayout();
  const { setDataStatus, setData } = useAllApi();


  const handleSelectedMenuItem = (selectedItem) => {
    updateActiveMenuItem(selectedItem);
    setDataStatus("")
    setData(null)
  };


  const getMenuItems = () => {
    return (
      <List style={{ padding: 10, marginTop: 0 }}>
        {menuItems &&
          menuItems.map((menuItem, index) => {
            return (
              <MenuLinkItem
                keyIndex={index}
                key={index}
                model={menuItem}
                handleSelectedMenuItem={handleSelectedMenuItem}
              />
            );
          })}
      </List>
    );
  };

  return (
    <Drawer
      variant="permanent"
      className={
        isOpen
          ? `${classes.drawer} ${classes.drawerOpen}`
          : `${classes.drawer} ${classes.drawerClose}`
      }
      classes={{
        paper: isOpen ? classes.drawerOpen : classes.drawerClose,
      }}
      anchor="left"
      open={isOpen}
    >
      {getMenuItems(classes)}
    </Drawer>
  );
};
