import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import Button from '@material-ui/core/Button';

import './SelectImageGrid.css';

export default class SelectImageGrid extends Component {
    constructor(props) {
    	super(props);
    };

    handleContentData = (data) => {
        this.props.onContentDataState()
        this.props.putDataToContent(data)
    }

    handleStyleData = (data) => {
        this.props.onStyleDataState()
        this.props.putDataToStyle(data)
    }

    render() {
        return (
            <div className="root">
                <GridList cellHeight={130} className="gridList" cols={4}>
                    <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
                        <ListSubheader component="div">Imagenet Dataset</ListSubheader>
                    </GridListTile>
                        {this.props.sampleData.map(data => ( 
                            data.type === 0
                                ?   <GridListTile 
                                        className="imgComponent" 
                                        key={data.key} 
                                    >
                                        <img src={data.src} alt={data.key}/>
                                        <div class="overlay"></div>
                                        <div class="buttonContent">
                                            {/* {Object.keys(this.props.contentData).length < 1
                                                ?   <Button 
                                                        variant="contained"
                                                        size="small"
                                                        onClick={() => this.handleContentData(data)}
                                                    >
                                                        CONTENT
                                                    </Button>
                                                :   <Button 
                                                        variant="contained"
                                                        size="small"
                                                        disabled
                                                    >
                                                        CONTENT
                                                    </Button>
                                            } */}
                                            <Button 
                                                variant="contained"
                                                size="small"
                                                onClick={() => this.handleContentData(data)}
                                            >
                                                CONTENT
                                            </Button>
                                        </div>
                                        <div class="buttonStyle">
                                            <Button 
                                                variant="contained"
                                                color="primary"
                                                size="small"
                                                onClick={() => this.handleStyleData(data)}
                                            >
                                                STYLE
                                            </Button>
                                        </div>
                                    </GridListTile>
                                :   <GridListTile
                                        disabled
                                        className="imgComponent_selected" 
                                        key={data.key}
                                    >
                                        <img src={data.src} alt={data.key}/>
                                    </GridListTile>
                        ))}
                </GridList>
            </div>
        )
    }
  }
