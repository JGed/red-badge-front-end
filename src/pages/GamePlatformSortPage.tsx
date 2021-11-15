import React from 'react';
import Navbar from '../components/Navbar';
import GamePlatform from '../components/GamePlatform';
import { AuthContext } from '../context';
import Footer from '../components/Footer';

class GamePlatformSortPage extends React.Component<any, any> {
    render() {
        return (

            <AuthContext.Consumer>
                {auth => 
                    <>
                        <Navbar auth={auth} history={this.props.history}/>
                        <GamePlatform auth={auth} platform={this.props.match?.params.platform} />
                        <Footer auth={auth} />
                    </>
                }
            </AuthContext.Consumer>
        )
    }
}

export default GamePlatformSortPage;