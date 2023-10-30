import React, { useEffect, useState } from 'react';
import { Backdrop, CircularProgress, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useLayout, useLoader } from "../../common/hooks";

const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export const BackdropComponent = () => {
    const classes = useStyles();
    const { loading } = useLoader();
    const { menuName } = useLayout();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(loading);
    }, [loading]);

    return (
        <Backdrop
            className={classes.backdrop}
            open={open}
        >
            <CircularProgress size={25} color="inherit" /> <Typography style={{ marginLeft: 5 }}>{menuName === "Home" ? "Sync All" : "Sync" + " " + menuName}</Typography>
        </Backdrop>
    )
}