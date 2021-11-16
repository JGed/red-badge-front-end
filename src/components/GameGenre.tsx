import { Typography, Grid } from '@mui/material';
import React from 'react';
import { Redirect } from 'react-router';
import getGamesByGenre from '../api/game/getGamesbyGenre';
import MainContentContainer from './containers/MainContentContainer';
import GameCard from './GameCard';

class GameGenre extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            games: []
        }
    }
    componentDidMount() {
        (async () => {
            const { status, json } = await getGamesByGenre(this.props.auth, this.props.genre);
            if(status === 200) {
                this.setState({games: json.games})
            }
        })();
    }
    componentDidUpdate(prevProps: any) {
        if(prevProps.genre !== this.props.genre) {
            (async () => {
                const { status, json } = await getGamesByGenre(this.props.auth, this.props.genre);
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
                <Typography variant='h2' align='center' sx={{pb: 2}}>
                    {this.props.genre[0].toUpperCase() + this.props.genre.substring(1)} Games:
                </Typography>
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

export default GameGenre;