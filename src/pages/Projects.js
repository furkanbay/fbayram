import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Nav from '../components/Nav'

export default class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [
        {
          title: 'Stria',
          description: 'Lorem ipsum',
          src: require('../images/stria.png'),
          tags: ['VueJS', 'Sketch'],
          behance: 'https://www.behance.net/gallery/80058203/Striaco-UI-Design', 
          visit: 'https://stria.co'
        },
        {
          title: 'Notlarim',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in faucibus elit. Duis pharetra sed tellus non finibus. Vestibulum aliquam urna nec pharetra interdum. Fusce suscipit dolor ac felis facilisis pulvinar. Vivamus ut luctus mauris, nec pharetra ante. Pellentesque ut ante neque. Suspendisse ac neque id dui ullamcorper luctus. Suspendisse dapibus venenatis urna, eu posuere nibh dictum et. Cras tempor mollis quam ut mollis.',
          src: require('../images/notlarim.png'),
        },
        {
          title: 'BenimKupam',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in faucibus elit. Duis pharetra sed tellus non finibus. Vestibulum aliquam urna nec pharetra interdum. Fusce suscipit dolor ac felis facilisis pulvinar. Vivamus ut luctus mauris, nec pharetra ante. Pellentesque ut ante neque. Suspendisse ac neque id dui ullamcorper luctus. Suspendisse dapibus venenatis urna, eu posuere nibh dictum et. Cras tempor mollis quam ut mollis.',
          src: require('../images/benimkupam.png'),
          tags: ['Wordpress', 'E-Commerce']
        },
      ]
    }
  }
  render() {
    return (
      <React.Fragment>
        <header className="header">
          <div className="header__left">
            <Link to="/">
              <div className="hey">
                Hey :)
              </div>
              <div className="name">
                I'm Furkan.
              </div>
            </Link>
          </div>
          <Nav/>
        </header>
        <div className="content">
          <div className="container">
            {this.state.projects.map(project => (
              <div className="project-box" key={project.src}>
                <img src={project.src} alt={project.title}/>
                <div>
                  <div className="title">
                    {project.title}
                  </div>
                  <div className="description">
                    {project.description}
                  </div>
                  <div className="tag">
                    {project.tags &&
                      project.tags.map(tag => (
                      <p key={tag}>{tag}<span></span></p>
                    ))}
                  </div>
                  <div className="links">
                    {
                      project.behance &&
                      <a href={project.behance}>On Behance</a>
                    }
                    {
                      project.visit &&
                      <a href={project.visit}>Go Project</a>
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    )
  }
}
