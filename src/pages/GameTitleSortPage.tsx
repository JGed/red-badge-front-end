import React from 'react';
import Footer from '../components/Footer';
import GameTitle from '../components/GameTitle';
import Navbar from '../components/Navbar';
import { AuthContext } from '../context';

class GameTitleSortPage extends React.Component<any, any> {
    render() {
        return (

            <AuthContext.Consumer>
                {auth => 
                    <>
                        <Navbar auth={auth} history={this.props.history}/>
                        <GameTitle auth={auth} platform={this.props.match?.params.title} />
                        <Footer auth={auth} />
                    </>
                }
            </AuthContext.Consumer>
        )
    }
}

export default GameTitleSortPage;