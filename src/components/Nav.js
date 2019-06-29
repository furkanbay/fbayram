import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Hamburger from './icons/Hamburger'
import Close from './icons/Close'

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      isExpanded: false
    };
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }
  alert(e) {
    e.preventDefault();
    alert('not yet!')
  }
  render() {
    const { isExpanded } = this.state;
    return (
      <React.Fragment>
        <div className="header__right">
          <Link to="/">Furkan Bayram!</Link>
          <div className="header__right__menu" onClick={e => this.handleToggle(e)}>
            <Hamburger/>
          </div>
        </div>
        <div className={`header__menu ${isExpanded ? 'header__isExpanded' : ""}`}>
          <div></div>
          <div className="header__menu__close">
            <div>
              <p onClick={e => this.alert(e)}>TR</p>
              <p className="underline" onClick={e => this.alert(e)}>EN</p>
            </div>
            <Close className="header__menu__close__btn" onClick={e => this.handleToggle(e)}/>
          </div>
          <ul className="header__links">
            <li>
              <a href="https://www.linkedin.com/in/furkanbayram/">Linkedin</a>
            </li>
            <li>
              <a href="https://twitter.com/furkanbayram0">Twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com/fbayramcom/">Instagram</a>
            </li>
            <li>
              <a href="https://www.behance.net/furkanbay">Behance</a>
            </li>
            <li>
              <a href="https://github.com/furkanbay">Github</a>
            </li>
            <li>
              <a href="https://blog.fbayram.com">Blog</a>
            </li>
          </ul>
          <ul className="header__nav">
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/works">Works</Link>
            </li>
            <li>
              <a href="mailto:furkanbayram26@gmail.com?subject=Contact from web site.">Contact</a>
            </li>
          </ul>
        </div>
      </React.Fragment>
    )
  }
}
