import React from 'react';
// import Title from './title_page'

function TitleBulma(props){ 
    return(
        <section class="hero is-success is-fullheight">
                <div class="hero-head">
                    <header class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                        <a class="navbar-item">
                            <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
                        </a>
                        <span class="navbar-burger burger" data-target="navbarMenuHeroC">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        </div>
                        <div id="navbarMenuHeroC" class="navbar-menu">
                        <div class="navbar-end">
                            <a class="navbar-item is-active">
                            Home
                            </a>
                            <a class="navbar-item">
                            Examples
                            </a>
                            <a class="navbar-item">
                            Documentation
                            </a>
                            <span class="navbar-item">
                            <a class="button is-success is-inverted">
                                <span class="icon">
                                <i class="fab fa-github"></i>
                                </span>
                                <span>Download</span>
                            </a>
                            </span>
                        </div>
                        </div>
                    </div>
                    </header>
                </div>

                <div class="hero-body">
                    <div class="container has-text-centered">
                    <h1 class="title">
                        Patrick Boii
                    </h1>
                    <h2 class="subtitle">
                        Subtitle
                    </h2>
                    </div>
                </div>

                <div class="hero-foot">
                    <nav class="tabs is-boxed is-fullwidth">
                    <div class="container">
                        <ul>
                        <li><a>Bio</a></li>
                        <li><a>Modifiers</a></li>
                        <li><a>Grid</a></li>
                        <li><a>Elements</a></li>
                        <li><a>Components</a></li>
                        <li><a>Layout</a></li>
                        </ul>
                    </div>
                    </nav>
                </div>
            </section>
    )
}

export default TitleBulma;