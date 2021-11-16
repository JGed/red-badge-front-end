import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { AuthContext } from '../context';
import Admin from '../components/Admin';
import Moderator from '../components/Moderator';
class AdminPage extends React.Component<any , any> {
    render() {
        return (

            <AuthContext.Consumer>
                {auth => 
                    <>
                        <Navbar auth={auth} history={this.props.history} />
                        <Moderator auth={auth} />
                        <Footer auth={auth} />

                    </> 
                }
            </AuthContext.Consumer>
        )
    }
}

export default AdminPage;