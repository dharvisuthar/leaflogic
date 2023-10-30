import { makeStyles } from "@mui/styles";
import { styled, alpha } from '@mui/material/styles';

export const headerStyle = makeStyles((theme) => {
    return {
        root: {
            width: "100%",
            position: "fixed"
        },
        menuHeader: {
            display: "flex",
            alignItems: "center",
            WebkitAlignContent: "center",
            backgroundColor: "#FFFFFF",
            borderBottom: "1px solid #c5d0d7",
            height: 72,
            top: 0,
            width: "100%",
            zIndex: 10,
        },
        menuContent: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            WebkitBoxPack: "justify",
            WebkitBoxAlign: "center",
            width: "100%",
            margin: "0 auto",
            maxWidth: 1200,
            [theme.breakpoints.down("lg")]: {
                padding: "0px 2.5%",
            },
        },
        menuHeaderList: {
            borderBottom: "1px solid 3d7e4eb",
            boxShadow: "rgb(0 0 0 / 4%) 0px 3px 1px",
        },
        content_wrapper__Container: {
            backgroundColor: " #f3f6f8",
            borderTop: "none",
            padding: " 0px 20px",
            zIndex: 5,
            WebkitBoxFlex: 0,
            flexGrow: 0,
            borderBottom: " 1px solid #d6dadd",
            boxShadow: "none",
            [theme.breakpoints.down("lg")]: {
                padding: "0px 2.5% !important",
            }
        },
        edUsIQ: {
            position: "relative",
            margin: "0px auto",
            maxWidth: 1200,
            width: "100%"
        },
        dtQgEK: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            WebkitBoxAlign: "center",
            WebkitBoxFlex: 0,
            flexGrow: 0,
            height: 63,
        },
        fmKOYW: {
            display: "flex",
            height: 63,
            marginLeft: -10,
            alignItems: "center",
        },
        eEvsyi: {
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: 14,
            padding: 10,
            marginRight: 20,
            color: "#242526",
        },
        serchWrap: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: "#FFFFFF",
            '&:hover': {
                backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            border: '1px solid #d6dadd',
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        },
        serchIconWrap: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        serchInput: {
            color: 'inherit',
            '& .MuiInputBase-input': {
                padding: theme.spacing(1, 1, 1, 0),
                // vertical padding + font size from searchIcon
                paddingLeft: `calc(1em + ${theme.spacing(4)})`,
                transition: theme.transitions.create('width'),
                width: '100%',
                [theme.breakpoints.up('sm')]: {
                    width: '12ch',
                    '&:focus': {
                        width: '20ch',
                    },
                },
            },
        }
    }
});
