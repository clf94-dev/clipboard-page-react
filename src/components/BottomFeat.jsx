import React from 'react';
import {Grid} from '@material-ui/core/';
import Blacklists from '../images/icon-blacklist.svg';
import Preview from '../images/icon-preview.svg';
import Text from '../images/icon-text.svg';

const images = [Blacklists, Text,Preview];


export default function BottomFeat(props) {
    return (
        <div>
        
                <Grid container direction="column" className="bottom-card-text">
                    <img src={images[props.index]} alt={props.alt} style={{marginTop : (props.index == 2) && '5%'}}/>
                    <h3>
                        {props.title}
                    </h3>
                    <p>{props.text}</p>
                </Grid>
           
        </div>
    )
}