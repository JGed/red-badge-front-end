import React from 'react'
import { Redirect } from 'react-router';
import { Card, CardActionArea, CardContent, Grid, Typography, Box, Button } from '@mui/material';
import ReviewCard from './ReviewCard';
import { deleteReview } from '../api';
import getMyReviews from '../api/review/getMyReviews';
import MainContentContainer from './containers/MainContentContainer';
import { Link } from 'react-router-dom';
import ReviewEdit from './ReviewEdit';
class Profile extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            reviews: [],
            reviewToEdit: undefined,
            error: false,
            open: false
        }
    }
    componentDidMount() {
        (async () => {
            const { status, json } = await getMyReviews(this.props.auth);
            console.log(status, json)
            if(status === 200) {
                this.setState({reviews: json.reviews})
            }
            else {
                this.setState({error: true});
            }
        })();
    }
    handleEdit = (review: any) => (e: React.MouseEvent) => {
        this.setState({reviewToEdit: {...review }, open: true})
    }
    handleDelete = (review: any) => (e: React.MouseEvent) => {
        (async () => {
            const { status, json } = await deleteReview(this.props.auth, review)
            console.log(status, json);
            if(status === 200) {
                this.setState({reviews: this.state.reviews.filter((r: any) => r.id !== review.id)});
            }
            else {
                this.setState({error: true})
            }
        })();
    }
    render() {
        return (
            this.props.auth.role === '' || this.state.error ?
            <Redirect to='/' />
            :
            <MainContentContainer>
                <Typography variant='h3' align='center' sx={{pt: 2}}>
                    Your Reviews: 
                </Typography>
                <Grid container spacing={4} sx={{py: 3}}>
                        {this.state.reviews.map((review: any) => (
                            <Grid
                                item
                                container xs={12}
                                md={6} lg={4} xl={3}
                                sx={{mb: 4, justifyContent: 'center'}}
                            >
                                <Card sx={{width: 350, height: 200}}>
                                    <Link to={`review/${review.id}`}>
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography variant='h6' noWrap>
                                                    {review.title}
                                                </Typography>
                                                <Typography variant='subtitle1' noWrap>
                                                    Rating: {review.rating}
                                                </Typography>
                                                <Typography variant='subtitle2' noWrap>
                                                    For: {review.game?.title}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Link>
                                    <CardContent>
                                        <Box sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                                            <Button variant='contained' color='success' onClick={this.handleEdit(review)}>
                                                Edit
                                            </Button>
                                            <Button variant='contained' color='error' onClick={this.handleDelete(review)}>
                                                Delete
                                            </Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                </Grid>
                {this.state.reviewToEdit && (
                    <ReviewEdit  
                            auth={this.props.auth}
                            review={this.state.reviewToEdit}
                            open={this.state.open}
                            setOpen={(value: boolean) => this.setState({ open: value })}
                    />
                )}
            </MainContentContainer>
        );
    }
}

export default Profile;
