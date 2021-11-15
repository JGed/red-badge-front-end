import React from 'react'
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import { AuthContext } from '../context';
class LoginPage extends React.Component<any, any> {
    render() {
    console.log(this.props);
        return (
            <>
            <AuthContext.Consumer>
                {auth => 
                    <>
                        <Login auth={auth} history={this.props.history}/>
                    </>
                }
            </AuthContext.Consumer>
                
            </>
        )
    }
}

export default LoginPage;