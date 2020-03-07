import React from 'react';
import TitleBulma from './Bulma_Theme/title_fetch';
// import Bio from './Components/Bio/bio';
import EducationList from './Components/Education/education_list'
import SkillsList from './Components/Skills/skills_list';
import Projects from './Components/Projects/projects_list';


class App extends React.Component{
  render(){
    return(
        <body>
              <TitleBulma />
              <section class="section">
                <div class="container">
                  <h1 class="title">Bio</h1>
                  <h2 class="subtitle">
                    {/* <Bio /> */}
                  </h2>
                </div>
              </section>
              <section class="section">
                <div class="container">
                  <h1 class="title">Eduction</h1>
                  <h2 class="subtitle">
                    <EducationList />
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
