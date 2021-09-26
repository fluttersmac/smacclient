import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import getTitleFromPaths from '../system/functions/getTitleFromPaths';
import { connect } from 'react-redux';
import { setCurrentPageTitle } from '../../store/actions/Page';
import { withRouter } from 'react-router';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        //backgroundColor:'lightblue',
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(8) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    accountAvatar: {
        position: "absolute",
        top: "0px",
        right: "10px"
    },
    accountAvatarDrawer: {
        backgroundColor: "white",
        borderRadius: "10px",
        top: "inherit",
        right: "inherit",
        position: "inherit"
    },
}));

const SideMenu = ({ setCurrentPageTitle, pageTitle, user, sideMenuContents, avatarMenuContents, history }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [ isAvatarDrawerOpen, setIsAvatarDrawerOpen ] = useState(false);

  const closeAvatarDrawer = () => {
    setIsAvatarDrawerOpen(false);
  }

  useEffect(() => {
      window.addEventListener("click", closeAvatarDrawer, true);
      if(setCurrentPageTitle){
          var unListen = history.listen((location, action) => {
            setCurrentPageTitle(getTitleFromPaths(location.pathname.toString() || window.location.href));
          })
      }
      return () => {
          window.removeEventListener('click', closeAvatarDrawer, true);
          unListen();
      }
  }, [setCurrentPageTitle, history]);

  useEffect(() => {
    if(setCurrentPageTitle){
        setCurrentPageTitle(getTitleFromPaths(history.location.pathname.toString() || window.location.href));
    }
  }, [setCurrentPageTitle, history.location.pathname]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenuClick = (func) => {
    if(func){
        func();
    }
    setTimeout(() => {
        if(setCurrentPageTitle){
            setCurrentPageTitle(getTitleFromPaths(history.pathname || window.location.href))
        }
    },
        0.5
    );
    return;
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, {
                    [classes.hide]: open,
                    })}
                >
                    <MenuIcon />
                </IconButton>

                <Typography variant="h6" noWrap>
                    {pageTitle ? pageTitle : 'Title'}
                </Typography>

                <IconButton 
                    className={classes.accountAvatar}
                    onClick={ () => setIsAvatarDrawerOpen(!isAvatarDrawerOpen) }
                >

                    <Avatar 
                        src={user ? user.photoURL : null} 
                    >
                        { user ? user.displayName[0] : null }
                    </Avatar>
                
                </IconButton>

            </Toolbar>
        </AppBar>
            

        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
            })}
            classes={{
            paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            }),
            }}
        >
            <div className={classes.toolbar}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </div>
            <Divider />
            <List>
                {
                    sideMenuContents ? sideMenuContents.map((content) => {
                        return <Link 
                            to={content.path ? content.path : window.location.pathname} 
                            style={{ textDecoration: 'none', color: content.fontColor ? content.fontColor : 'inherit' }} 
                            key={ content.key ? content.key : uuidv4() }
                            onClick={() => handleMenuClick(content.function)}
                        >
                            <ListItem button >
                                <ListItemIcon>
                                    {content.icon ? content.icon : 'Icon'}
                                </ListItemIcon>
                                <ListItemText>
                                    {content.text ? content.text : 'Text'}
                                </ListItemText>
                            </ListItem>
                        </Link>
                    }) : null
                }
            </List>
        </Drawer>

        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="top"
            style={{ 
                position: "absolute",
                top: "32px",
                right: "5px",
                height: "300px"
            }}
            classes={{
                paper: classes.accountAvatarDrawer,
            }}
            open={isAvatarDrawerOpen}
        >
                <List>
                    <ListItem style={{backgroundColor: '#EEEADE'}} >
                        <ListItemIcon>
                            <Avatar>
                                { user ? user.displayName[0] : null }
                            </Avatar>
                        </ListItemIcon>
                        <ListItemText>
                            { user ? user.displayName : "Anonymous User" }
                        </ListItemText>
                    </ListItem>

                    {
                        
                        avatarMenuContents ? avatarMenuContents.map((content) => {
                            return <Link 
                                to={content.path ? content.path : window.location.pathname} 
                                style={{ textDecoration: 'none', color: content.fontColor ? content.fontColor : 'inherit' }} 
                                key={content.key ? content.key : uuidv4() }
                                onClick={ () => handleMenuClick(content.function) }
                            >
                                <ListItem button 
                                    onClick={ () => { 
                                            setIsAvatarDrawerOpen(false);
                                        }
                                    }
                                >
                                    <ListItemIcon>
                                        {content.icon ? content.icon : 'Icon'}
                                    </ListItemIcon>
                                    <ListItemText>
                                        {content.text ? content.text : 'Text'}
                                    </ListItemText>
                                </ListItem>
                            </Link>
                        }) : null
                    }
                </List>

        </Drawer>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        pageTitle: state.getPage.pageTitle,
        user: state.getAuthState.user,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentPageTitle: (pageTitle) => dispatch(setCurrentPageTitle(pageTitle))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SideMenu));

