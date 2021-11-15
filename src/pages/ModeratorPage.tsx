import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AuthContext } from '../context';
import Moderator from '../components/Moderator';

class ModeratorPage extends React.Component<any, any> {
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

export default ModeratorPage;