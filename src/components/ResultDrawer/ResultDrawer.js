import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import StyleIcon from '@material-ui/icons/Style';
import DoneIcon from '@material-ui/icons/Done';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import './ResultDrawer.css';

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        marginTop: 64,
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
        width: drawerWidth,
        marginTop: 64,
    },
    imgGrid: {
      paddingRight: 20,
      paddingLeft: 20,
      paddingTop: 10,
      paddingBottom: 10,
      maxHeight: 180,
    },
    buttonGrid: {
      height: '16vh',
      paddingLeft: 10,
      paddingRight: 10
    },
    listRoot: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    listButton: {
      height: '60px'
    },
    listText: {
      fontSize: '1.0em',
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
}));

export default function ResultDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [styleOpen, setStyleOpen] = React.useState(true);

  const handleStyleClick = () => {
    setStyleOpen(!styleOpen);
  };

  const dataReSelect = () => {
    // Add function which can proceed re_select task for re-training
    props.resultDataReset()
  }

  const dataAccept = () => {
    // Add function which can send accpted data to server
    props.allDataReset()
  }

  const drawer = (
    <Grid
      container
      direction="column"
      justify="flex-end"
      alignItems="stretch"
    >
      {/* Re-Select Button */}
      <Grid 
        className={classes.buttonGrid}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Link to="/" style={{ textDecoration: 'none', width: '100%' }}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth="true"
            disableElevation
            onClick={dataReSelect}
          >
            Re-select
          </Button>
        </Link>
        <Link to="/" style={{ textDecoration: 'none', width: '100%' }}>
          <Button
            variant="contained"
            color="default"
            fullWidth="true"
            disableElevation
            onClick={dataAccept}
          >
            Re-train
          </Button>
        </Link>
      </Grid>
      <Divider />
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.listRoot}
      >
        {/* Grid for selected Style data */}
        <ListItem button className={classes.listButton} onClick={handleStyleClick}>
          <ListItemIcon>
            <StyleIcon />
          </ListItemIcon>
          <ListItemText classes={{primary:classes.listText}} primary="STYLE DATA" />
          {styleOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={styleOpen} timeout="auto" unmountOnExit>
          <GridList className={classes.imgGrid} cellHeight={80} cols={3}>
            {props.styleData.map(data => (
                <GridListTile className="styleImgComponent" key={data.key}>
                    <img src={data.src} alt={data.key}/>
                </GridListTile>
            ))}
          </GridList>
        </Collapse>
        {/* Grid for accepted class data */}
        <ListItem button className={classes.listButton} onClick={props.changeOpenState}>
          <ListItemIcon>
            <DoneIcon />
          </ListItemIcon>
          <ListItemText classes={{primary:classes.listText}} primary="ACCEPTED CLASS" />
          {props.openState ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={props.openState} timeout="auto" unmountOnExit>
          <GridList className={classes.imgGrid} cellHeight={80} cols={3}>
            {props.acceptedData.map(data => (
                <GridListTile className="classImgComponent" key={data.key}>
                    <img
                      src={data.classSrc}
                      alt={data.key}
                      onClick={() => props.delDataAccepted(data)}
                    />
                </GridListTile>
            ))}
          </GridList>
        </Collapse>
      </List>
    </Grid>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={false}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}
  
ResultDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.any,
};
