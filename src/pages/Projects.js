import React, { Component } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [
        {
          title: 'Stria',
          description: 'Feedback Collect Tool SaaS. Collect feedback from your users and have the artificial intelligence tell you how positive the feedback is and whether the feedback indicates happiness or sadness',
          src: require('../images/stria.png'),
          tags: ['VueJS', 'Sketch', 'RESTful API', 'JS Charts', 'UI Design'],
          behance: 'https://www.behance.net/gallery/80058203/Striaco-UI-Design', 
          visit: 'https://stria.co'
        },
        {
          title: 'Notlarim',
          description: 'A marketplace application where lecture notes can be sold and purchased.',
          src: require('../images/notlarim.png'),
          tags: ['Google Analytics', 'Product Management']
        },
        {
          title: 'BenimKupam',
          description: 'E-Commerce web site focused on personalized products (Mug, Phone Case etc.)',
          src: require('../images/benimkupam.png'),
          tags: ['Wordpress', 'WooCommerce', 'E-Commerce']
        },
      ]
    }
  }
  render() {
    return (
      <React.Fragment>
        <Header/>
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
        <Footer/>
      </React.Fragment>
    )
  }
}
