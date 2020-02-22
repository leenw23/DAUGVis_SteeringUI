import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';

import './SideDrawer.css';

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
    drawerTypeText: {
        backgroundColor: theme.palette.background.paper,
        fontWeight: "bold",
        marginLeft: 20,
        marginTop: 15,
    },
    drawerDescriptTest: {
      marginLeft: 20,
      marginBottom: 20,
      fontSize: 12,
    },
    drawerPaper: {
        width: drawerWidth,
        marginTop: 64,
    },
    imgContentGrid: {
        paddingRight: 20,
        paddingLeft: 20,
        marginBottom: 10,
        height: 160,
    },
    imgStyleGrid: {
      paddingRight: 20,
      paddingLeft: 20,
      marginBottom: 10,
      height: 300,
  }
}));

export default function SideDrawer(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const drawer = (
      <div>
        <Divider />
        <Typography className={classes.drawerTypeText} variant="overline" display="block" gutterBottom>CONTENT DATA</Typography>
        <Typography className={classes.drawerDescriptTest} gutterBottom>Select the one "Content Data"</Typography>
        <GridList className={classes.imgContentGrid} cellHeight={120} cols={2}>
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
        <Divider />
        <Typography className={classes.drawerTypeText} variant="overline" display="block" gutterBottom>STYLE DATA</Typography>
        <Typography className={classes.drawerDescriptTest} gutterBottom>Select multiple "Style Data"</Typography>
        <GridList className={classes.imgStyleGrid} cellHeight={80} cols={3}>
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
      </div>
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
              open={mobileOpen}
              onClose={handleDrawerToggle}
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
