import React, { Component } from 'react';
import About from './about'
import Features from './features'
import Tours from './tours'
import Stories from './stories'



class Main extends Component {
    render() {
        return(
            <div className="container">
           <About/>
           <Features/>
           <Tours/>
           <Stories/>
        </div>
           
        )
    }
}


export default Main