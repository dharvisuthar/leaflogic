import { AccountCircle, Close, FormatAlignRight, Search } from "@mui/icons-material";
import { AppBar, Hidden, IconButton, InputBase } from "@mui/material";
import React from "react";
import { useLayout } from "../../../common/hooks";
import { headerStyle } from "./style";

const Header = () => {
  const classes = headerStyle();
  const { isOpen, updateSidebarStatus, menuName } = useLayout();
  return (
    <AppBar position="sticky" elevation={0}>
      <div className={classes.root}>
        <div className={classes.menuHeader}>
          <div className={classes.menuContent}>
            <a href="">
              <img src={"/assets/logo.jpg"} alt="enjoypleasantrees" />
            </a>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle style={{ color: "#909499" }} />
            </IconButton>
          </div>
        </div>
        <div className={classes.menuHeaderList}>
          <div style={{ padding: 0 }} className={classes.content_wrapper__Container}>
            <div className={classes.edUsIQ}>
              <div className={classes.dtQgEK}>
                <div style={{ display: "initial" }}>
                  <nav className={classes.fmKOYW}>
                    <Hidden mdUp>
                      <IconButton onClick={() => isOpen ? updateSidebarStatus(false) : updateSidebarStatus(true)}>
                        {isOpen ? <Close /> : <FormatAlignRight />}
                      </IconButton>
                    </Hidden>
                    <a href="" className={classes.eEvsyi}>Sync {menuName === "Home" ? "All" : menuName}</a>
                  </nav>
                </div>
                <div className={classes.serchWrap}>
                  <div className={classes.serchIconWrap}>
                    <Search style={{ color: "#d6dadd" }} />
                  </div>
                  <InputBase
                    className={classes.serchInput}
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppBar>
  );
};
export default Header;
