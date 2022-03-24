import { React, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to="/">
                        <Typography variant="h6" noWrap component="div" color="white">
                            Daily News
                        </Typography>
                    </Link>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;