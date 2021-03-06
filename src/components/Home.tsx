import { Grid, Typography } from '@mui/material';
import React from 'react'
import { Redirect } from 'react-router';
import getTopGames from '../api/game/getTopGames';
import MainContentContainer from './containers/MainContentContainer';
import GameCard from './GameCard';

class Home extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            games: [],
        };
    }

    componentDidMount() {
        (async () => {
            const { status, json } = await getTopGames(this.props.auth)
            console.log(status, json);
            if(status === 200) {
                this.setState({ games: json.games });
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
                    Top Games:
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

export default Home;