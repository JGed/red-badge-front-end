import React from 'react';
import {
    Container,
    Grid,
    Box,
    Typography,
    Stack,
    Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = (props) => {
    return (
        <Container
            maxWidth="false"
            sx={{
                height: 100,
                backgroundColor: '#DAEBFB',
                flex: '0 1 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
        >
            <Grid container spacing={2} maxWidth="xl" alignItems="center">
                <Grid item xs={12} sx={{ display: 'flex' }}>
                    <Box>
                        <Typography sx={{ fontSize: '1.1em' }}>
                            © 2021 Video Game Reviews, LLC
                        </Typography>
                    </Box>
                    <Box sx={{ ml: 'auto' }}>
                        <Stack
                            direction="row-reverse"
                            divider={
                                <Divider orientation="vertical" flexItem />
                            }
                            spacing={2}
                        >
                            {props.auth.role === 'admin' ? (
                                    <>
                                    <Link
                                        to="/profile"
                                    >
                                        Profile
                                    </Link>
                                        <Link
                                            to="/moderator"
                                        >
                                            Moderator
                                        </Link>
                                        <Link
                                            to="/admin"
                                        >
                                            Admin
                                        </Link>
                                    </>
                                ) : 
                                props.auth.role === 'admin' ? (
                                    <>
                                    <Link
                                        to="/profile"
                                    >
                                        Profile
                                    </Link>
                                        <Link
                                            to="/moderator"
                                        >
                                            moderator
                                        </Link>
                                    </>
                                )
                            : (
                                <>
                                    <Link
                                        to="/profile"
                                    >
                                        Profile
                                    </Link>
                                </>
                            )}
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Footer;
