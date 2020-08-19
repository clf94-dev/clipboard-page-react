import React from 'react';
import {Grid} from '@material-ui/core/';
import Logo from "../images/logo.svg";

export default function Footer() {
    return (
        <div>
            <Grid container direction="row" className="footer-cont">
                <Grid item md={2} xs={12} className="footer-icon-cont">
                    <img src={Logo} alt="logo"/>
                </Grid>
                <Grid item md={2} xs={12}>
                    <h4>FAQs</h4>
                    <h4>
                        Contact Us</h4>
                </Grid>
                <Grid item md={2} xs={12}>
                    <h4>
                        Privacy Policy</h4>
                    <h4>
                        Press Kit</h4>
                </Grid>
                <Grid item md={2} xs={12}>
                    <h4>Install Guide</h4>

                </Grid>
                <Grid item md={2} xs={12}></Grid>
                <Grid item md={2} xs={12}>
                    <Grid container direction="row" className="icons-row">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                    </Grid>

                </Grid>

            </Grid>
        </div>
    )
}