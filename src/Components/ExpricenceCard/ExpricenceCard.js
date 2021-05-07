import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import libery from '../../FontAwsomeLibery'
import Fade from "react-reveal"

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

    return (
        <Fade left>
            <div className="col-md-4 col-12 col-sm-10 mb-sm-2 mt-3 Padding425">
                <Card className={classes.root}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                <img src={exprience.companylogo} alt="companyLogo" />
                            </Avatar>
                        }
                        title={exprience.company}
                        subheader={exprience.date}
                    />
                    <CardMedia
                        className={classes.media}
                        image={exprience.img}
                        title="projectPIc"
                    />
                    <CardContent>
                    </CardContent>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="m-1">
                            <button className="mb-2 btn btn-outline-warning">
                                <a className="exBtn" href={exprience.live}>Live</a>
                            </button>
                        </div>
                        <div className="m-1">
                            <button className="mb-2 btn btn-outline-warning">
                                <a className="exBtn" href={exprience.github}>
                                    <FontAwesomeIcon icon={['fab', 'github']} />
                                </a>
                            </button>
                        </div>
                    </div>
                </Card>
            </div>
        </Fade>
    );
};

export default ExpricenceCard;