import React from "react";
import { Link } from "react-router-dom";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { IconComponent } from "./icon-component";
import { createStyles, makeStyles } from "@mui/styles";
import { useAllApi, useLayout } from "../../../common/hooks";
const useStyles = makeStyles((theme) =>
  createStyles({
    menuItem: {
      fontSize: "14px",
      textTransform: "capitalize",
      textDecoration: 'none',
    },
    menuItemIcon: {
      color: "#97c05c",
    },
    subCategoryItem: {
      "& .MuiListItemText-primary": {
        fontWeight: 600,
        fontSize: "14px",
        textTransform: "capitalize",
        textDecoration: 'none',
      },
    },
    mainCategoryExpanded: {
      "&.MuiListItem-root": {
        margin: "10px 0"
      },
      "&.MuiListItem-button": {
        backgroundColor: "#909499 !important",
        textDecoration: 'none',
        color: "#FFF !important",
        "& .MuiListItemIcon-root": {
          color: "#FFF",
          minWidth: "40px",
        },
        "&:hover": {
          textDecoration: "none",
          color: "#FFF",
          backgroundColor: "#909499",
          "& .MuiListItemText-root .MuiListItemText-primary": {
            fontWeight: 600,
            fontSize: "14px",
            textTransform: "capitalize",
            color: "#FFF",
            textDecoration: 'none',
          },
          "& .MuiListItemIcon-root": {
            fontWeight: 600,
            fontSize: "14px",
            textTransform: "capitalize",
            color: "#FFF",
            textDecoration: 'none',
          },
        }
      },
      "& .MuiListItemText-root .MuiListItemText-primary": {
        fontWeight: 600,
        color: "#FFF",
        fontSize: "14px",
        textTransform: "capitalize",
        textDecoration: 'none',
      },
    },
    mainCategory: {
      "&.MuiListItem-root": {
        margin: "10px 0"
      },
      "& .MuiListItemText-root .MuiListItemText-primary": {
        fontWeight: 600,
        fontSize: "14px",
        textTransform: "capitalize",
        color: "#909499",
        textDecoration: 'none',
      },
      "& .MuiListItemIcon-root": {
        color: "#909499",
        minWidth: "40px",
      },
      "&  .MuiSvgIcon-root": {
        color: "#909499",
      }
    },
    childItems: {
      // paddingLeft: "30px",
    },
  })
);
export const MenuLinkItem = ({ keyIndex, model, handleSelectedMenuItem }) => {
  const classes = useStyles();
  const { serMenuName, menuName } = useLayout();
  const { setDataStatus } = useAllApi();

  const renderListItemText = (menuItem) => {
    return <ListItemText primary={menuItem.name}></ListItemText>;
  };

  const renderListItemIcon = (menuItem) => {
    return (
      menuItem.icon && (
        <ListItemIcon>
          <IconComponent
            className={
              menuItem.active ? classes.mainCategoryExpanded : classes.mainCategory
            }
            iconName={menuItem.icon}
          ></IconComponent>
        </ListItemIcon>
      )
    );
  };

  const renderListItem = (menuItem, hasChildren) => {
    return (
      <ListItem
        title={menuItem.name}
        className={menuItem.active ? classes.mainCategoryExpanded : classes.mainCategory}
        onClick={() => {
          handleSelectedMenuItem(menuItem);
          setDataStatus("")
        }
        }
        button
      >
        {renderListItemIcon(menuItem)}
        {renderListItemText(menuItem)}
        {hasChildren ? menuItem.active ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItem>
    );
  };

  const renderMenuItem = (menuItem, keyIndex) => {
    if (menuItem.children && menuItem.children.length) {
      const hasActiveItem =
        menuItem.active ||
        menuItem.children.some((childMenuItem) => {
          return childMenuItem.active === true;
        });

      return (
        <div key={keyIndex}>
          {renderListItem(menuItem, true)}
          <Collapse
            style={{ marginLeft: 4 }}
            in={menuItem.active}
            timeout="auto"
            unmountOnExit
          >
            {menuItem.children &&
              menuItem.children.map((childMenu, index) => {
                return renderMenuItem(childMenu, index);
              })}
          </Collapse>
        </div>
      );
    } else {
      return (
        <Link
          style={{ textDecoration: 'none' }}
          to={"/" + menuItem.component}
          key={keyIndex}
          onClick={() => serMenuName(menuItem.name)}
        >
          {renderListItem(menuItem, false)}
        </Link>
      );
    }
  };

  return renderMenuItem(model, keyIndex);
};
