import { Container, Grid, Typography, Button, Box } from '@mui/material';
import React from 'react';
import { Redirect } from 'react-router';
import { getGameById } from '../api';
import MainContentContainer from './containers/MainContentContainer';
import ReviewCard from './ReviewCard';
import ReviewCreate from './ReviewCreate';
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            game: {},
            reviews: [],
            canReview: true,
            open: false,
            error: false,
        };
    }
    componentDidMount() {
        (async () => {
            const { status, json } = await getGameById(
                this.props.auth,
                this.props.gameId
            );
            if (status === 200) {
                this.setState({
                    game: json.game,
                    reviews: json.reviews,
                    canReview: json.canReview,
                });
            } else {
                this.setState({ error: true });
            }
        })();
    }
    render() {
        return this.state.error  || this.props.auth.role === '' ? (
            <Redirect to="/" />
        ) : (
            <MainContentContainer>
                <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography variant="h1">
                        {this.state.game.title}
                    </Typography>
                </Container>
                {this.state.canReview ? (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            pb: 2,
                        }}
                    >
                        <Button
                            color="secondary"
                            variant="contained"
                            onClick={(e) => this.setState({ open: true })}
                        >
                            Write A Review
                        </Button>
                        <ReviewCreate
                            auth={this.props.auth}
                            gameId={this.state.game.id}
                            open={this.state.open}
                            setOpen={(value) => this.setState({ open: value })}
                        />
                    </Box>
                ) : (
                    <></>
                )}
                <Grid
                    container
                    sx={{
                        pb: 5,
                        display: 'flex',
                        flex: '1 1 auto',
                    }}
                >
                    <Grid
                        item
                        md={12}
                        lg={5}
                        sx={{
                            py: 5,
                            px: 3,
                        }}
                    >
                        <img height='400' src={this.state.game.photoURL} alt="cover art" />
                        <Typography variant="h4">
                            Platform: {this.state.game.platform}
                        </Typography>
                        <Typography variant="h5">
                            Rating:{' '}
                            {this.state.game.rating
                                ? `${this.state.game.rating}/5 (${this.state.reviews.length})`
                                : 'N/A'}
                        </Typography>
                    </Grid>
                    <Grid item spacing={4} md={12} lg={6} sx={{ px: 2 }}>
                        {this.state.reviews.map((review) => (
                            <ReviewCard key={review.id} review={review} />
                        ))}
                    </Grid>
                </Grid>
            </MainContentContainer>
        );
    }
}

export default Game;
