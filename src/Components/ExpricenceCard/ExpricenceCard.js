import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import libery from '../../FontAwsomeLibery'

libery();

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const ExpricenceCard = ({ exprience }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    console.log(exprience);

    return (
        <div className="col-md-4">
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            <img src={exprience.companyLogo} alt="companyLogo" />
                        </Avatar>
                    }
                    title={exprience.company}
                    subheader={exprience.date}
                />
                <CardMedia
                    className={classes.media}
                    image={exprience.projectSs}
                    title="projectPIc"
                />
                <CardContent>
                </CardContent>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="m-1">
                        <button className="mb-2 btn btn-outline-warning">Details</button>
                    </div>
                    <div className="m-1">
                        <button className="mb-2 btn btn-outline-warning">Live</button>
                    </div>
                    <div className="m-1">
                        <button className="mb-2 btn btn-outline-warning">
                            <FontAwesomeIcon icon={['fab', 'github']} />
                        </button>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default ExpricenceCard;