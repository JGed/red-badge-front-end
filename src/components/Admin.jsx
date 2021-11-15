import React from 'react';
import { Redirect } from 'react-router';
import MainContentContainer from './containers/MainContentContainer';

class Admin extends React.Component {
    render() {
        return (
            this.props.auth.role === 'admin' ?
            <MainContentContainer>
                Admin
            </MainContentContainer>
            :
            <Redirect to='/' />
        )
    }
}

export default Admin;