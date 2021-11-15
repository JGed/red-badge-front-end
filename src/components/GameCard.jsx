import {
    Card,
    CardActionArea,
    CardMedia,
    Divider,
    CardContent,
    Typography,
    Grid,
} from '@mui/material';
import { Link } from 'react-router-dom';

const GameCard = ({ game }) => {
    return (
        <Grid item container xs={12} md={6} lg={4} xl={3} sx={{ mb: 4, justifyContent: 'center'}}>
            <Card sx={{ width: 350, height: 250 }}>
                <CardActionArea sx={{ height: '100%' }}>
                    <Link className="router-card" to={`/game/id/${game.id}`}>
                        <CardMedia
                            component="img"
                            height="150"
                            image={game.photoURL}
                            alt={game.title}
                        />
                        <CardContent>
                            <Grid container>
                                <Grid item xs={10}>
                                    <Typography
                                        variant="h6"
                                        component="div"
                                        noWrap
                                    >
                                        {game.title}
                                    </Typography>
                                    <Divider sx={{ mb: 1 }} />
                                    <Typography
                                        variant="subtitle1"
                                        color="text.secondary"
                                        noWrap
                                    >
                                        Rating: {game.rating ? `${game.rating}/5` : 'N/A'}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Link>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default GameCard;
