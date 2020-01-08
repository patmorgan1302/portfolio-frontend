import React from 'react';
import TitleBulma from './Bulma_Theme/title_fetch';
import Bio from './Routes/bio';
import Education from './Routes/education';
import SkillsList from './Routes/skills_list';
import Projects from './Routes/projects';

// let focusedUser: ''


class App extends React.Component{
  render(){
    return(
        <body>
              <TitleBulma />
              <section class="section">
                <div class="container">
                  <h1 class="title">Bio</h1>
                  <h2 class="subtitle">
                    <Bio />
                  </h2>
                </div>
              </section>
              <section class="section">
                <div class="container">
                  <h1 class="title">Eduction</h1>
                  <h2 class="subtitle">
                    <Education />
                  </h2>
                </div>
              </section>
              <section class="section">
                <div class="container">
                  <h1 class="title">Skills</h1>
                  <h2 class="subtitle">
                    <SkillsList />
                  </h2>
                </div>
              </section>
              <div class="container">
                  <h1 class="title">Projects</h1>
                  <h2 class="subtitle">
                    <Projects />
                  </h2>
                </div>
        </body>
  )
}}

export default App;
