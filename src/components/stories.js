import React, { Component } from 'react';




class Stories extends Component {
    render() {
        return(
            <section class="section-stories">
            <div class="bg-video">
                <video class="bg-video__content" autoplay muted loop>
                    <source src={require("../img/nat4.mp4")} type="video/mp4"/>
                     <source src={require("../img/nat4.webm")} type="video/webm"/>
                        Your browser is not supported
                </video>
            </div>
            <div class="u-center-text u-margin-buttom-big">
                <h2 class="heading-secondary">
                    We make people genuinely happy
                </h2>
            </div>
            <div class="row">
                <div class="story">
                    <figure class="story__shape">
                        <img src="nat1.jpg" alt="Person on a tour" class="story__img"/>
                        <figcaption class="story__caption">
                            MARY SMITH
                        </figcaption>
                    </figure>
                    <div class="story__text">
                        <h3 class="heading-tertiary u-margin-buttom-small">
                            I had the best week ever with my family
                        </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dicta adipisci consequuntur, quibusdam in nulla impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, voluptatibus cum commodi totam quo et
                            dolor impedit dignissimos, vero cumque reiciendis, corrupti exercitationem. Quas, animi modi quasi quis totam adipisci?
                        </p>
                    </div>
                </div>

            </div>
            <div class="row">
                <div class="story">
                    <figure class="story__shape">
                        <img src={require("../img/nat1.jpg")} alt="Person on a tour" class="story__img"/>
                        <figcaption class="story__caption">
                            JACK ROB
                        </figcaption>
                    </figure>
                    <div class="story__text">
                        <h3 class="heading-tertiary u-margin-buttom-small">
                            WOW! My life is completely different now
                        </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dicta adipisci consequuntur, quibusdam in nulla impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, voluptatibus cum commodi totam quo et
                            dolor impedit dignissimos, vero cumque reiciendis, corrupti exercitationem. Quas, animi modi quasi quis totam adipisci?
                        </p>
                    </div>
                </div>

            </div>
            <div class="u-center-text u-margin-top-huge">
                <a href="/" class="btn-text">Read all stories &rarr;</a>
            </div>

        </section>
 

        
        )
    }
}


export default Stories







