import {
    Card,
    CardActionArea,
    CardContent,
    Grid,
    Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const ReviewCard = ({ review }) => {
    return (
        <Card sx={{ width: 500, height: 100, mb: 3 }}>
            <CardActionArea sx={{ height: '100%' }}>
                <Link className="router-card" to={`/review/${review.id}`}>
                    <CardContent>
                        <Grid container>
                            <Grid item xs={8}>
                                <Typography variant="h6" noWrap>
                                    {review.title}
                                </Typography>
                                <Typography variant="subtitle1" noWrap>
                                    Rating: {review.rating}/5
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant='subtitle2' noWrap>
                                    Written: {new Date(review.createdAt).toLocaleDateString()}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Link>
            </CardActionArea>
        </Card>
    );
};

export default ReviewCard;
