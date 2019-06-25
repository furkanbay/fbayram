import React, { Component } from 'react'

import Location from '../components/icons/Location'
import Blob from '../components/icons/Blob'
import Lines from '../components/icons/Lines'

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home__left">
          <div className="content">
            <div className="hey">
              Hey :)
            </div>
            <div className="name">
              I'm Furkan.
            </div>
            <div className="title">
              <p>Frontend Dev. <span></span></p>
              <p>UI Design<span></span></p>
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
    )
  }
}
