import React from 'react';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import { AuthContext } from '../context';
import Footer from '../components/Footer';
class HomePage extends React.Component<any, any> {
    render() {
        return (
            <AuthContext.Consumer>
                {auth => 
                    <>
                        <Navbar auth={auth} history={this.props.history} />
                        <Home auth={auth} />
                        <Footer auth={auth} />

                    </> 
                }
            </AuthContext.Consumer>
        )
    }
}

export default HomePage;