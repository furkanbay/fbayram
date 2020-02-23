import React, { Component } from 'react'

import Nav from '../components/Nav'

import Location from '../components/icons/Location'
import Blob from '../components/icons/Blob'
import Lines from '../components/icons/Lines'

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="header">
          <div className="header__left">
            
          </div>
          <Nav/>
        </header>
        <div className="home">
          <div className="home__left">
            <div>
              <div className="hey">
                Hey :)
              </div>
              <br/>
              <div className="name">
                I'm Furkan.
              </div>
              <div className="tag">
                <p>Frontend Dev. <span></span></p>
                <p>UI Design<span></span></p>
                <p>Entrepreneur<span></span></p>
              </div>
              <div className="location">
                <Location/>
                Ankara, Turkey
              </div>
            </div>
          </div>
          <div className="home__right">
            <Blob className="home__right__blob"/>
            <Lines className="home__right__lines"/>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
