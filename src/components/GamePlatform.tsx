import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Redirect } from 'react-router-dom';
import MainContentContainer from './containers/MainContentContainer';
import GameCard from './GameCard';
import getGamesByPlatform from '../api/game/getGamesByPlatform';
class GamePlatform extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            games: [],
        }
    }
    componentDidMount() {
        (async () => {
            const { status, json } = await getGamesByPlatform(this.props.auth, this.props.platform);
            console.log(status, json);
            if(status === 200) {
                this.setState({games: json.games})
            }
        })();
    }
    render() {
        return (
            this.props.auth.role === '' ? 
            <Redirect to='/login' />
            :
            <MainContentContainer>
                <Typography variant='h2' align='center' sx={{pb: 2}}>
                    {this.props.platform[0].toUpperCase() + this.props.platform.substring(1)} Games:
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

export default GamePlatform;