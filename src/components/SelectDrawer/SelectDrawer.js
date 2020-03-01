import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import AssignmentIcon from '@material-ui/icons/Assignment';
import StyleIcon from '@material-ui/icons/Style';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './SelectDrawer.css';

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  // Drawer Style
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
  // Drawer Sub Grid
  imgGrid: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    maxHeight: 180,
  },
  buttonGrid: {
    height: '8vh',
    paddingLeft: 10,
    paddingRight: 10
  },
  // List Item Style
  listRoot: {
    width: '100%',
    maxWidth: 360,
    marginTop: 10,
    backgroundColor: theme.palette.background.paper,
  },
  listButton: {
    height: '60px'
  },
  listText: {
    fontSize: '1.0em',
  },
}));

export default function SideDrawer(props) {
    const classes = useStyles();
    const theme = useTheme();

    const dataRequest = () => {
      // Have to add function which request data for augmentation
      props.contentData.map(data => {
        props.putContentDataToAugmented(data)
      })
    }
  
    const drawer = (
      <Grid
        container
        direction="column"
        justify="flex-end"
        alignItems="stretch"
      >
        {/* Request Button */}
        <Grid 
          className={classes.buttonGrid}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Link to="/result" style={{ textDecoration: 'none', width: '100%' }}>
            <Button 
              variant="contained"
              color="secondary"
              fullWidth="true"
              disableElevation
              onClick={dataRequest}
            >
              Request
            </Button>
          </Link>
        </Grid>
        <Divider />
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.listRoot}
        >
          {/* Grid for CONTENT DATA */}
          <ListItem button className={classes.listButton} onClick={props.changeContentDataState}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText classes={{primary:classes.listText}} primary="CONTENT DATA" />
            {props.openContentState ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={props.openContentState} timeout="auto" unmountOnExit>
            <GridList className={classes.imgGrid} cellHeight={80} cols={3}>
              {props.contentData.map(data => (
                <GridListTile className="sideImgComponent" key={data.key}>
                    <img src={data.src} alt={data.key}/>
                    <div class="overlay"></div>
                    <div class="buttonDelete">
                        <Button 
                            variant="contained"
                            color="secondary"
                            size="small"
                            onClick={() => props.delDataFromContent(data)}
                        >
                            DELETE
                        </Button>
                    </div>
                </GridListTile>
              ))}
            </GridList>
          </Collapse>
          {/* Grid for STYLE DATA */}
          <ListItem button className={classes.listButton} onClick={props.changeStyleDataState}>
            <ListItemIcon>
              <StyleIcon />
            </ListItemIcon>
            <ListItemText classes={{primary:classes.listText}} primary="STYLE DATA" />
            {props.openStyleState ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={props.openStyleState} timeout="auto" unmountOnExit>
            <GridList className={classes.imgGrid} cellHeight={80} cols={3}>
              {props.styleData.map(data => (
                <GridListTile className="sideImgComponent" key={data.key}>
                    <img src={data.src} alt={data.key}/>
                    <div class="overlay"></div>
                    <div class="buttonDelete" style={{marginBottom: '15%'}}>
                        <Button 
                            variant="contained"
                            color="secondary"
                            size="small"
                            onClick={() => props.delDataFromStyle(data)}
                        >
                            DELETE
                        </Button>
                    </div>
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
  
SideDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.any,
};
