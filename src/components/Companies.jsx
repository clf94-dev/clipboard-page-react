import React from 'react';
import {Grid} from '@material-ui/core/';
import Hp from '../images/logo-hp.png';
import Google from '../images/logo-google.png';
import Ibm from '../images/logo-ibm.png';
import Microsoft from '../images/logo-microsoft.png'
import Vector from '../images/logo-vector-graphics.png';

export default function Companies() {
    return (
        <div>
            <Grid container className="comp-row">
            <Grid container direction="row" >
                <Grid item md={3} xs={12}><img src={Google} alt=""/></Grid>
                <Grid item md={2} xs={12}><img src={Hp} alt=""/></Grid>
                <Grid item md={2} xs={12}><img src={Ibm} alt=""/></Grid>
                <Grid item md={3} xs={12}><img src={Microsoft} alt=""/></Grid>
                <Grid item md={2} xs={12}><img src={Vector} alt=""/></Grid>
            
            </Grid>
            </Grid>
        </div>
    )
}