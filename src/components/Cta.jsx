import React from 'react';
import {Button,Grid} from '@material-ui/core/';

export default function Cta() {
    return (
        <div>
            <Grid container direction="column" className="cta-cont">

                <h2>
                Clipboard for iOS and Mac OS</h2>
                <p>
                Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
  and you’re ready to start adding to your clipboard.

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

        </div>
    )
}
