import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AuthContext } from '../context';
import Game from '../components/Game';

class GamePage extends React.Component<any, any> {
    render() {
        return (
            <AuthContext.Consumer>
                {auth => 
                    <>
                        <Navbar auth={auth} history={this.props.history} />
                        <Game auth={auth} gameId={this.props.match?.params.id} />
                        <Footer auth={auth} />
                    </>
                }
            </AuthContext.Consumer>
        )
    }
}

export default GamePage;