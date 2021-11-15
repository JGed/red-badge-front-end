import getUsers from '../api/user/getUsers';
import React from 'react';
import { Redirect } from 'react-router';
import MainContentContainer from './containers/MainContentContainer';

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],

        }
        
    }
    componentDidMount() {
        (async () => {
            const { status, json } = await getUsers(this.props.auth);
            if(status === 200) {
                this.setState({users: json.users})
            }
        })();
    }
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