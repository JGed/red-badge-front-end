import React from 'react';
import { createUser, loginUser } from '../api';
import { IAuth } from '../interfaces';
import MainContentContainer from './containers/MainContentContainer';
import { Grid, Box, Typography, Stack, TextField, Button, Container } from '@mui/material';
import { Redirect } from 'react-router-dom';
interface LoginProps {
    auth: IAuth,
    history: any
}

interface LoginState {
    loginUsername: string;
    loginPassword: string;
    registerUsername: string;
    registerPassword: string;
    registerEmail: string;
}

class Login extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps | Readonly<LoginProps>) {
        super(props) 
        this.state = {
            loginUsername: '',
            loginPassword: '',
            registerUsername: '',
            registerPassword: '',
            registerEmail: '',
        }
    }

    handleLogin = async (e: React.MouseEvent) => {
        try {
            const { status, json } = await loginUser({
                username: this.state.loginUsername,
                password: this.state.loginPassword
            })        
            console.log(status, json);
            if(status === 200) {
                if(this.props.auth.setAuth) {
                    this.props.auth.setAuth(json.sessionToken, json.role);
                }
                this.props.history.push('/');
            }
        }
        catch(err) {
            console.log(err);
        }
    }

    handleRegister = async (e: React.MouseEvent) => {
        try {
            const { status, json } = await createUser({
                username: this.state.registerUsername,
                password: this.state.registerPassword,
                email: this.state.registerEmail
            })
            console.log(status, json);
            if(status === 200) {
                if(this.props.auth.setAuth) this.props.auth.setAuth(json.sessionToken, json.role);
                this.props.history.push('/')
            }
        }
        catch(err) {
            console.log(err);
        }
    }
    render() {
        return (
            this.props.auth.role !== '' ? <Redirect to='/' /> : 
            <>
            <MainContentContainer>
                <Typography variant='h1' align='center'>
                    Video Game Reviews
                </Typography>
                <br />
                <Container>
                <Typography variant='h6' align='center'>
                    Welcome new and existing users, since all our reviews are user created we ask that all visitors create an account.  Please report reviews that contain innapropriate content and include a reason to help our Moderators.  Thank You!
                </Typography>
                </Container>
                <br />
                <br />
                <Grid 
                    container 
                >
                    <Grid sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} item md={12} lg={6}>
                        <Box
                            component='form'
                            noValidate
                            autoComplete='off'
                            sx={{
                                height: '500px'
                            }}
                        >
                            <Typography variant='h2' sx={{pb: 5}}>
                                Login
                            </Typography>
                            <Stack spacing={4}>
                                <Box>
                                    <TextField
                                        label='username'
                                        value={this.state.loginUsername}
                                        color='info'
                                        onChange={e => this.setState({loginUsername: e.target.value})}
                                        required
                                    />
                                </Box>
                                <Box>
                                    <TextField
                                        label='password'
                                        type='password'
                                        value={this.state.loginPassword}
                                        color='info'
                                        onChange={e => this.setState({loginPassword: e.target.value})}
                                        required
                                    />
                                </Box>
                                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <Button onClick={this.handleLogin}>
                                        Login
                                    </Button>
                                </Box>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} item md={12} lg={6}>
                        <Box
                            component='form'
                            noValidate
                            autoComplete='off'
                            sx={{
                                height: '500px'
                            }}
                        >
                            <Typography variant='h2' sx={{pb: 5}}>
                                Register
                            </Typography>
                            <Stack spacing={4}>
                                <Box>
                                    <TextField
                                        label='email'
                                        value={this.state.registerEmail}
                                        color='info'
                                        onChange={e => this.setState({registerEmail: e.target.value})}
                                        required
                                    />
                                </Box>
                                <Box>
                                    <TextField
                                        label='username'
                                        value={this.state.registerUsername}
                                        color='info'
                                        onChange={e => this.setState({registerUsername: e.target.value})}
                                        required
                                    />
                                </Box>
                                <Box>
                                    <TextField
                                        label='password'
                                        type='password'
                                        value={this.state.registerPassword}
                                        color='info'
                                        onChange={e => this.setState({registerPassword: e.target.value})}
                                        required
                                    />
                                </Box>
                                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <Button onClick={this.handleRegister}>
                                        Register
                                    </Button>
                                </Box>
                            </Stack>
                        </Box>
                    </Grid>

                </Grid>
            </MainContentContainer>
            </>
                        
        )
    }
}

export default Login;