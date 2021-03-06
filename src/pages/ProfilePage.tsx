import React from 'react'
import { AuthContext } from '../context';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import Footer from '../components/Footer';
class ProfilePage extends React.Component<any, any> {
    render() {
        return (
            <AuthContext.Consumer>
                {auth => 
                    <>
                        <Navbar auth={auth} history={this.props.history}/>
                        <Profile auth={auth} />
                        <Footer auth={auth} />
                    </>
                }
            </AuthContext.Consumer>

        )
    }
}

export default ProfilePage;