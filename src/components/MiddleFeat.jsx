import React from 'react';
import {Button, Grid} from '@material-ui/core/';

export default function MiddleFeat(props) {
    return (
        <div>
            <Grid container direction="column" className="middle-card-text">
                <h3>
                    {props.title}
                </h3>
                <p>
                 {props.text}
                </p>
            </Grid>

        </div>
    )
}