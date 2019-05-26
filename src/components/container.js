import React, { Component } from 'react';
import Navigation from './navigation'
import Header from './header'
import Main from './main'
import Footer from './footer'


class Container extends Component {
    render() {
        return(
            <div className="container">
            <Navigation/>
            <Header/>
            <Main/>
            <Footer/>
        </div>
           
        )
    }
}


export default Container