import React from 'react';
import {Button, Grid} from '@material-ui/core/';
import '../styles/App.scss'

import Top from "./Top";
import Middle from './Middle';
import Bottom from './Bottom';
import Companies from './Companies';
import Cta from './Cta';
import Footer from './Footer';

function App() {
    return (
        <div>
            <Top/>
            <Middle/>
            <Bottom/>
            <Companies/>
            <Cta/>
            <Footer/>
        </div>
    );
}

export default App;