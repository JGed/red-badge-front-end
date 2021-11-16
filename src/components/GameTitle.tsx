import { Grid } from '@mui/material';
import React from 'react';
import { Redirect } from 'react-router-dom';
import MainContentContainer from './containers/MainContentContainer';
import GameCard from './GameCard';
import getGamesByTitle from '../api/game/getGamesByTitle';
class GameTitle extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            games: []
        }
    }
    componentDidMount() {
        (async () => {
            const { status, json } = await getGamesByTitle(this.props.auth, this.props.title);
            if(status === 200) {
                this.setState({games: json.games})
            }
        })();
    }
    componentDidUpdate(prevProps: any) {
        if(prevProps.title !== this.props.title) {
            (async () => {
                const { status, json } = await getGamesByTitle(this.props.auth, this.props.title);
                if(status === 200) {
                    this.setState({games: json.games})
                }
            })();
        }
    }
    render() {
        return (
            this.props.auth.role === '' ? 
            <Redirect to='/login' />
            :
            <MainContentContainer>
                <Grid container spacing={4} sx={{py: 3}}>
               {
                   this.state.games.map((game: { id: React.Key | null | undefined; }) => (
                       <GameCard key={game.id} game={game} />
                   ))
               } 
               </Grid>
            </MainContentContainer>
        )
    }
}

export default GameTitle;