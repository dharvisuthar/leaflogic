import { makeStyles } from "@mui/styles";
const drawerWidth = 250;
const headerHeight = 135;


export const layoutStyle = makeStyles((theme) => {
    return {
        root: {
            display: "flex",
        },
        noTextDecoration: {
            textDecoration: "none",
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginLeft: 12,
            marginRight: 36,
        },
        hide: {
            display: "none",
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: "nowrap",
            boxSizing: 'border-box',
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            overflowX: 'hidden',
            top: "135px !important",
            maxHeight: `calc(100vh - 135px)`,
            position: "fixed"
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: `calc(${theme.spacing(7)} + 1px)`,
            [theme.breakpoints.up('sm')]: {
                width: `calc(${theme.spacing(8)} + 3px)`,
            },
            backgroundColor: theme.palette.primary.main,
            top: "135px !important",
            maxHeight: `calc(100vh - 135px)`,
            position: "fixed"
        },
        toolbar: {
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "0 8px",
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
        },
        primary: {
            color: theme.palette.primary.contrastText,
        },
        primaryActive: {
            backgroundColor: theme.palette.primary.contrastText,
            color: theme.palette.primary.main,
        },
        menuTopItem: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
        },
        menuList: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
        },
        menuListActive: {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.primary.main,
            "&:hover": {
                color: theme.palette.primary.contrastText
            }
        },
        list: {
            width: drawerWidth,
        },
        links: {
            textDecoration: "none",
        },
        menuHeader: {
            paddingLeft: "30px",
        },
        mainContent: {
            height: `calc(100vh - ${headerHeight}px)`,
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            marginTop: headerHeight,
            // marginTop: headerHeight,
            "& .MuiPaper-root-MuiDrawer-paper": {
                top: "inherit !important"
            },
        },
        mainContentOff: {
            height: `calc(100vh - ${headerHeight}px)`,
            width: `calc(100% - 65px)`,
            marginTop: headerHeight,
            // maxHeight: `calc(100vh - 135px)`,
            marginLeft: 65,
            // marginTop: headerHeight,
            "& .MuiPaper-root-MuiDrawer-paper": {
                top: "inherit !important"
            },
        },
    };
});