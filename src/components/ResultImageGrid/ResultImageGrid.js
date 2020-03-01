import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import Checkbox from '@material-ui/core/Checkbox';

import './ResultImageGrid.css';

const StyledTableCell = withStyles(theme => ({
    head: {
      fontWeight: 'bold'
    },
    body: {
      fontSize: 14,
      width: '40%'
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
        },
    }
}))(TableRow);
  
const useStyles = makeStyles({
    gridSize: {
        width: `calc(100% - 300px)`,
        marginLeft: 300,
        minHeight: 'calc(100vh - 64px)'
    },
    table: {
        marginTop: 30,
        marginBottom: 20,
        minWidth: 700,
        width: `calc(50%)`,
        margin: 'auto'
    },
    media: {
        height: 140,
        width: 140,
    },
});

export default function ResultImageGrid(props) {
    const classes = useStyles();

    const handleSelect = (event, data) => {
        if (event.target.checked) {
            props.putDataAccepted(data)
        } else {
            props.delDataAccepted(data)
        }
        props.onOpenStatus()
    };
  
    return (
        <TableContainer component={Paper} className={classes.gridSize}>
            <Table className={classes.table} aria-label="customized table">
            <TableHead>
                <TableRow>
                    <StyledTableCell padding='40'>Accept</StyledTableCell>
                    <StyledTableCell>Class</StyledTableCell>
                    <StyledTableCell>Augmented Data</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.augmentedData.map(data => (
                <StyledTableRow key={data.key}>
                    <TableCell padding='40'>
                        <Checkbox
                            inputProps={{ 'aria-label': 'select all desserts' }}
                            checked={data.accepted}
                            onChange={e => handleSelect(e, data)}
                        />
                    </TableCell>
                    <StyledTableCell component="th" scope="row">
                        <CardMedia
                            className={classes.media}
                            image={data.classSrc}
                            title="Contemplative Reptile"
                        />
                    </StyledTableCell>
                    <StyledTableCell>
                        <CardMedia
                            className={classes.media}
                            image={data.augmentedSrc}
                            title="Contemplative Reptile"
                        />
                    </StyledTableCell>
                </StyledTableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    );
}
