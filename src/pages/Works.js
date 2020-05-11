import React, { Component } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'


export default class Works extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <div className="content">
          <div className="container">
            <a className="works" href="https://www.behance.net/furkanbay">
              Review on Behance
            </a>
          </div>
        </div>
        <Footer/>
      </React.Fragment>
    )
  }
}
