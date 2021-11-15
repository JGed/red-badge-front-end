import React from 'react';
import { AuthContext } from '../context';
import Navbar from '../components/Navbar';
import GameGenre from '../components/GameGenre';
import Footer from '../components/Footer';
class GameGenreSortPage extends React.Component<any> {
    render() {
        return (
            <AuthContext.Consumer>
                {auth => 
                    <>
                        <Navbar auth={auth} history={this.props.history} />
                        <GameGenre auth={auth} genre={this.props.match?.params.genre} />
                        <Footer auth={auth} />
                    </>
                }
            </AuthContext.Consumer>
        )
    }
}

export default GameGenreSortPage;