import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Nav from '../components/Nav'

export default class Header extends Component {
  render() {
    return (
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
    )
  }
}
