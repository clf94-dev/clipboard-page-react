import React from 'react';
import {Button, Grid} from '@material-ui/core/';
import Logo from "../images/logo.svg";
import Bg from "../images/bg-header-desktop.png";

export default function Top(){
    return(<div>
        <img className="bg-top" src={Bg} alt="background"/>
            <Grid container direction="column" className="top-cont">

                <img className="top-logo" src={Logo}></img>
                <h1> A history of everything you copy</h1>
                <p>
                    Clipboard allows you to track and organize everything you copy. Instantly access
                    your clipboard on all your devices.
                </p>

                <Grid container direction="row" className=" btn-row">
                    <Grid item md={6} xs={12}>
                        <Button className="downl-ios">Download for iOS</Button>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Button className="downl-mac">Download for Mac</Button>
                    </Grid>
                </Grid>
            </Grid>
            </div>);
}
