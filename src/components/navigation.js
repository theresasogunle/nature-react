import React, { Component } from 'react';


class Navigation extends Component {

    render(){
        return(
        <div class="navigation">
        <input type="checkbox" class="navigation__checkbox" id="navi-toggle"/>
        <label for="navi-toggle" class="navigation__button"><span class="navigation__icon">&nbsp;</span></label>
        <div class="navigation__background">&nbsp;</div>

        <nav class="navigation__nav">
            <ul class="navigation__list">
                <li class="navigation__item">
                    <a href="/" class="navigation__link"> <span>01</span> About Natours</a>
                </li>
                <li class="navigation__item"><a href="/" class="navigation__link"><span>02</span>Your Benefits</a></li>
                <li class="navigation__item"><a href="/" class="navigation__link"><span>03</span>Popular Tours</a></li>
                <li class="navigation__item"><a href="/" class="navigation__link"><span>04</span>Stories</a></li>
                <li class="navigation__item"><a href="/" class="navigation__link"><span>05</span>Book now</a></li>
            </ul>
        </nav>
    </div>
        )
    }
}


export default Navigation;