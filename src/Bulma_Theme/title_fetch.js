import React from 'react';
// import Title from './title_page'

function TitleBulma(props){ 
    return(
        <section class="hero is-success is-fullheight">
                <div class="hero-head">
                    <header class="navbar">
                    <div class="container">
                        <div class="navbar-brand">                
                        <span class="navbar-burger burger" data-target="navbarMenuHeroC">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        </div>
                        <div id="navbarMenuHeroC" class="navbar-menu">
                        <div class="navbar-end">
                            <a class="navbar-item">
                            GitHub
                            </a>
                            <a class="navbar-item">
                            Linkdin
                            </a>
                            <a class="navbar-item">
                            Contact 
                            </a>
                            <span class="navbar-item">
                            {/* <a class="button is-success is-inverted">
                                <span class="icon">
                                <i class="fab fa-github"></i>
                                </span>
                                <span>Download</span>
                            </a> */}
                            </span>
                        </div>
                        </div>
                    </div>
                    </header>
                </div>

                <div class="hero-body">
                    <div class="container has-text-centered">
                    <h1 class="title">
                        Patrick Morgan
                    </h1>
                    <h2 class="subtitle">
                        Full-Stack Javascript Developer
                    </h2>
                    </div>
                </div>

                <div class="hero-foot">
                    <nav class="tabs is-boxed is-fullwidth">
                    <div class="container">
                        <ul>
                        <li><a>Bio</a></li>
                        <li><a>Education</a></li>
                        <li><a>Skills</a></li>
                        <li><a>Projects</a></li>
                        {/* <li><a>Components</a></li>
                        <li><a>Layout</a></li> */}
                        </ul>
                    </div>
                    </nav>
                </div>
            </section>
    )
}

export default TitleBulma;