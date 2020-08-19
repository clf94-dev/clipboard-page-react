import React from 'react';
import {Button, Grid} from '@material-ui/core/';
import Computer from '../images/image-computer.png';
import Devices from '../images/image-devices.png';
import {MiddleFeatItems} from './MiddleFeatItems';
import MiddleFeat from './MiddleFeat';

export default function Middle() {
    return (
        <div>
            <Grid container direction="column" className="middle-top">
                <h2>Keep track of your snippets</h2>
                <p>
                    Clipboard instantly stores any item you copy in the cloud, meaning you can
                    access your snippets immediately on all your devices. Our Mac and iOS apps will
                    help you organize everything.
                </p>

            </Grid>
            <Grid container direction="row" className="middle-feat">
                <Grid item md={6} xs={12} className="middle-img-col">
                    <img className="middle-img" src={Computer} alt="computer"/>
                </Grid>
                <Grid item md={6} xs={12}>
                    {MiddleFeatItems.map((item, index) => {
                        return <MiddleFeat key={index} title={item.title} text={item.parag}/>
                    })}
                </Grid>
                <Grid container direction="column" className="middle-bottom" style={{marginTop: `5%`}}>
                    <h2>
                        Access Clipboard anywhere</h2>
                    <p>
                        Whether you’re on the go, or at your computer, you can access all your Clipboard
                        snippets in a few simple clicks.
                    </p>
                    <img src={Devices} alt="devices"/>

                </Grid>
            </Grid>

        </div>
    )
}
