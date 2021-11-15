import {
    Typography,
    Box,
    Button,
    Grid,
    Divider,
} from '@mui/material';
import React from 'react';
import { Redirect } from 'react-router';
import getReviewById from '../api/review/getReviewById';
import MainContentContainer from './containers/MainContentContainer';
import ReportCreate from './ReportCreate';
class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            review: {},
            error: false,
            open: false,
        };
    }
    componentDidMount() {
        (async () => {
            const { status, json } = await getReviewById(
                this.props.auth,
                this.props.reviewId
            );
            console.log(status, json);
            if (status === 200) {
                this.setState({ review: json.review });
            } else {
                this.setState({ error: true });
            }
        })();
    }
    render() {
        return this.props.auth.role === '' || this.state.error ? (
            <Redirect to="/" />
        ) : (
            <MainContentContainer>
                <Typography variant="h1" align="center">
                    {this.state.review.title}
                </Typography>
                <Grid container sx={{ display: 'flex', flex: '1 1 auto' }}>
                    <Grid
                        item
                        md={12}
                        lg={5}
                        sx={{
                            py: 5,
                            px: 3,
                        }}
                    >
                        <Typography variant="h2" align="center">
                            {this.state.review.game?.title}
                        </Typography>
                        <img
                            src={this.state.review.game?.photoURL}
                            alt="cover art"
                        />
                        <Typography variant="h4" align="center">
                            Platform: {this.state.review.game?.platform}
                        </Typography>
                    </Grid>

                    <Grid item md={12} lg={6} sx={{ px: 2 }}>
                        <Box sx={{ pt: 10 }}>
                            <Typography align="center">
                                {this.state.review.text}
                            </Typography>
                            <Divider />
                            <Typography align="right">
                                Rating: {this.state.review.rating}/5
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Button color='error' variant="outlined" onClick={() => this.setState({open: true})}>
                                    Report Review
                                </Button>
                                <ReportCreate auth={this.props.auth} review={this.state.review} open={this.state.open} setOpen={value => this.setState({open: value})} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </MainContentContainer>
        );
    }
}

export default Review;
