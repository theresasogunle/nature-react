import React, { Component } from 'react';




class About extends Component {
    render() {
        return(
            

        <section class="section-about">
        <div class="u-center-text u-margin-buttom-big">
            <h2 class="heading-secondary">
                Exciting tours for adventurous people
            </h2>
        </div>

        <div class="row">
            <div class="col-1-of-2">
                <h3 class="heading-tertiary u-margin-buttom-small "> You're going to fall in love with nature </h3>
                <p class="paragraph"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, libero tempore provident, iusto illo nobis quibusdam voluptatibus neque aperiam iste sed accusamus? Quasi nisi vel commodi facilis ratione? Distinctio, dicta.</p>

                <h3 class="heading-tertiary u-margin-buttom-small"> Live adventurous like you never have before </h3>
                <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, deserunt facilis! Deserunt eveniet</p>
                <a href="/" class="btn-text">Learn More &rarr;</a>
            </div>

            <div class="col-1-of-2">
                <div class="composition">
                    <img src={require("../img/nat1.jpg")} alt="img" class="composition__photo composition__photo--p1"/>
                    <img src={require("../img/nat1.jpg")} alt="img" class="composition__photo composition__photo--p2"/>
                    <img src={require("../img/nat1.jpg")} alt="img" class="composition__photo composition__photo--p3"/>
                </div>
            </div>
        </div>

        </section>

        
        )
    }
}


export default About







