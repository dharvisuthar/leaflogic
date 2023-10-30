import React, { useState, useCallback, createContext } from "react";
import { getMenuItems } from "../services";

export const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [menuName, serMenuName] = useState("");
  const [menuItems, setMenuItems] = useState(getMenuItems());

  const handleActiveMenuItem = (activateItem) => {
    let newItems = getUpdatedMenuItems([...menuItems], activateItem.component);
    setMenuItems(newItems);
  };

  const getUpdatedMenuItems = (menuItemCollection, activateComponent) => {
    menuItemCollection.forEach((m) => {
      if (m.component === activateComponent) {
        if (m.children && m.children.length) {
          m.active = !m.active;
        } else {
          m.active = true;
        }
      } else {
        if (m.children && m.children.length) {
          m.children = getUpdatedMenuItems(m.children, activateComponent);
        } else {
          m.active = false;
        }
      }
    });

    return menuItemCollection;
  };

  const contextValue = {
    isOpen,
    menuItems,
    setIsOpen,
    serMenuName,
    menuName,
    updateSidebarStatus: useCallback((data) => {
      setIsOpen(data);
    }, []),
    updateActiveMenuItem: useCallback((data) => {
      handleActiveMenuItem(data);
    }, []),
  };

  return (
    <LayoutContext.Provider value={contextValue}>
      {children}
    </LayoutContext.Provider>
  );
};
