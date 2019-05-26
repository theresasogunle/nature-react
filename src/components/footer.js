
import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
    <div class="footer">
    <div class="footer__logo-box">
        <img src={require("../img/logo-green-2x.png")} alt=" full logo" class="footer__logo"/>
        <div class="row">
            <div class="col-1-of-2">
                <div class="footer__navigation">
                    <ul class="footer__list">
                        <li class="footer__item">
                            <a href="/" class="footer__link">Company</a>
                        </li>
                        <li class="footer__item">
                            <a href="/" class="footer__link">Contact us</a>
                        </li>
                        <li class="footer__item">
                            <a href="/" class="footer__link">Careers</a>
                        </li>
                        <li class="footer__item">
                            <a href="/" class="footer__link">Privacy policy</a>
                        </li>
                        <li class="footer__item">
                            <a href="/" class="footer__link">Terms</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-1-of-2">
                <p class="footer__copyright">
                    Built by <a href="/" class="footer__link">Omowunmi Sogunle</a> with love! Copyright &copy; by Jonas You are 100% allowed to use this webpage for both personal and commercial use, but not to claim it as your own design. Credit to
                    the original author will be appreciated!
                </p>
            </div>
        </div>
    </div>

    </div>

        
        )
    }
}


export default Footer















