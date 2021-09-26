import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStylesFacebook = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        justifyContent: 'center'
    },
    bottom: {
        color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    top: {
        color: '#1a90ff',
        animationDuration: '550ms',
        position: 'absolute',
        left: 0,
    },
    circle: {
        strokeLinecap: 'round',
    },
}));

const FacebookCircularProgress = (props) => {
    const classes = useStylesFacebook();
  
    return (
        <div className={classes.root}>
            <CircularProgress
                variant="determinate"
                className={classes.bottom}
                size={props.size}
                thickness={4}
                {...props}
                value={100}
            />
            <CircularProgress
                variant="indeterminate"
                disableShrink
                className={classes.top}
                classes={{
                    circle: classes.circle,
                }}
                size={props.size}
                thickness={4}
                {...props}
            />
            <br/>
            {props.desc ? props.desc : "Loading"}
        </div>
    );
  }



const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        marginTop: '30vh'
    },
    disabledLoading: {
        display: 'none',
        flexDirection: 'row',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,1)',
        position: 'absolute', 
        top: 0,               
        right: 0,                
        bottom: 0,
        left: 0,
        opacity: 0.7,
        zIndex: '1000',
    },
    normalLoading: {
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
        backgroundColor: '#ffffff',
        position: 'relative',
    },
});

const Loading = (props) => {
    const classes = useStyles();
    return (  
        <div className={props.disabled ? classes.disabledLoading : classes.normalLoading}
            style={{
                fontSize: (props.size ? props.size*0.25 : 120*0.25),
                display: ((props.hidden) ? 'none' : 'flex'),
            }}
        >
            <div className={classes.root}>
                    <FacebookCircularProgress desc={props.desc} size={props.size} />
            </div>
        </div>
    );
}
 
export default Loading;