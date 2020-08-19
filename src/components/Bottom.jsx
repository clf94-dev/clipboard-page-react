import React from 'react';
import {Grid} from '@material-ui/core/';
import {BottomFeatItems} from './BottomFeatItems';
import BottomFeat from './BottomFeat';

export default function Bottom() {
    return (
        <div>
            <Grid container direction="column" className="bottom-top">
                <h2>Supercharge your workflow</h2>
                <p>
                    We’ve got the tools to boost your productivity.
                </p>

            </Grid>
            <Grid container direction="row" className="bottom-feat">

                {BottomFeatItems.map((item, index) => {
                    return (
                 
                            <Grid item md={4} xs={12}>

                                <BottomFeat
                                    key={index}
                                    index={index}
                                    img={item.pict}
                                    title={item.title}
                                    text={item.parag}
                                    alt={item.alt}/>
                            </Grid>
                      
                    )
                })}

            </Grid>

        </div>
    )
}