import React from 'react';
import {
    Box,
    Grid,
    Toolbar,
    Button,
    Menu,
    MenuItem,
    TextField,
    Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logo from '../logo.png';
interface NavbarState {
    width: number;
    platformMenu: boolean;
    genreMenu: boolean;
    profileMenu: boolean;
    anchorEl: any;
    title: string;
}
class Navbar extends React.Component<any, NavbarState> {
    constructor(props: any) {
        super(props);
        this.state = {
            width: window.innerWidth,
            platformMenu: false,
            genreMenu: false,
            profileMenu: false,
            anchorEl: null,
            title: '',
        };
    }

    handleResize = () => this.setState({ width: window.innerWidth });
    togglePlatformMenu = (e: React.MouseEvent) =>
        this.setState({
            platformMenu: !this.state.platformMenu,
            anchorEl: e.currentTarget,
        });
    toggleGenreMenu = (e: React.MouseEvent) =>
        this.setState({
            genreMenu: !this.state.genreMenu,
            anchorEl: e.currentTarget,
        });

    handleSearch = (e: React.MouseEvent) => {
        this.props.history.push(`/game/title/${this.state.title}`);
    };
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    render() {
        return (
            <Box sx={{ flex: '0 1 auto' }}>
                <Toolbar
                    sx={{
                        backgroundColor: '#DAEBFB',
                        minHeight: 100,
                    }}
                >
                    <Grid container>
                        <Grid item xs={3}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <Link to="/">
                                    <Box
                                        component="img"
                                        sx={{
                                            width: 50,
                                            maxHeight: { xs: 233, md: 167 },
                                            maxWidth: { xs: 350, md: 250 },
                                        }}
                                        alt="Game Logo"
                                        src={logo}
                                    />
                                </Link>
                                <Typography variant='h6' sx={{ml: 2}}>
                                    Video Game Reviews
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid
                            item
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                            }}
                            xs={6}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    mx: 2,
                                }}
                            >
                                <Button
                                    sx={{ mx: 5 }}
                                    variant="contained"
                                    color="secondary"
                                    onClick={this.togglePlatformMenu}
                                >
                                    Platform {<ExpandMoreIcon />}
                                </Button>
                            </Box>
                            <Menu
                                open={this.state.platformMenu}
                                onClose={() =>
                                    this.setState({
                                        platformMenu: false,
                                        anchorEl: null,
                                    })
                                }
                                anchorEl={this.state.anchorEl}
                            >
                                <MenuItem>
                                    <Link to="/game/platform/playstation">
                                        Playstation
                                    </Link>
                                </MenuItem>
                            </Menu>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    mx: 2,
                                }}
                            >
                                <Button
                                    sx={{ mx: 5 }}
                                    variant="contained"
                                    color="secondary"
                                    onClick={this.toggleGenreMenu}
                                >
                                    Genre <ExpandMoreIcon />
                                </Button>
                            </Box>
                            <Menu
                                open={this.state.genreMenu}
                                onClose={() =>
                                    this.setState({
                                        genreMenu: false,
                                        anchorEl: null,
                                    })
                                }
                                anchorEl={this.state.anchorEl}
                            >
                                <MenuItem>
                                    <Link to="/game/genre/action">Action</Link>
                                </MenuItem>
                            </Menu>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    ml: 'auto',
                                    justifyContent: 'flex-end',
                                }}
                            >
                                <TextField
                                    label="title search"
                                    value={this.state.title}
                                    onChange={(e) =>
                                        this.setState({ title: e.target.value })
                                    }
                                    required
                                />
                                <Button
                                    sx={{ ml: 1 }}
                                    color="secondary"
                                    variant="contained"
                                    onClick={this.handleSearch}
                                >
                                    Search
                                </Button>
                            </Box>
                        </Grid>
                        <Grid
                            item
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                            }}
                            xs={3}
                        >
                            <Button
                                onClick={(e) =>
                                    this.setState({
                                        profileMenu: true,
                                        anchorEl: e.currentTarget,
                                    })
                                }
                                color="secondary"
                                variant="contained"
                            >
                                <AccountBoxIcon />
                            </Button>
                            <Menu
                                open={this.state.profileMenu}
                                onClose={() =>
                                    this.setState({
                                        profileMenu: false,
                                        anchorEl: null,
                                    })
                                }
                                anchorEl={this.state.anchorEl}
                            >
                                <MenuItem>
                                    <Link to="/profile">Profile</Link>
                                </MenuItem>
                                {this.props.auth.role === 'moderator' ? (
                                    <MenuItem>
                                        <Link to="/moderator">Moderator</Link>
                                    </MenuItem>
                                ) : (
                                    null
                                )}
                                {this.props.auth.role === 'admin' ? (
                                    [
                                        <MenuItem>
                                            <Link to="/moderator">Moderator</Link>
                                        </MenuItem>
                                        ,
                                        <MenuItem>
                                            <Link to="/admin">Admin</Link>
                                        </MenuItem>
                                    ]
                                ) : (
                                    null
                                )}
                                <MenuItem>
                                    <Button
                                        onClick={(e) =>
                                            this.props.auth.removeAuth()
                                        }
                                        variant="contained"
                                        color="warning"
                                    >
                                        Logout
                                    </Button>
                                </MenuItem>
                            </Menu>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Box>
        );
    }
}

export default Navbar;
