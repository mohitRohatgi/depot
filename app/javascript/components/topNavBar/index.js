import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { HOME, QUESTIONS_URL, CONTACT_URL, NEWS_URL, ROOT } from '../../api'

export default class TopNavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleLogOut = this.handleLogOut.bind(this)
  }
  

  handleLogOut = () => {
    let token = document.head.querySelector("[name=csrf-token]").content
    fetch('http://localhost:3000/users/sign_out', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': token
      },
    })
    .then((response) => { 
      window.location = ROOT
    })
  }


  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })

    if (name == "Home" && window.location.href != HOME) {
        window.location = HOME
    } else if (name == "FAQ" && window.location.href != QUESTIONS_URL) {
        window.location = QUESTIONS_URL
    } else if (name == "Contact" && window.location.href != CONTACT_URL) {
        window.location = CONTACT_URL
    } else if (name == "News" && window.location.href != NEWS_URL) {
        window.location = NEWS_URL
    } else if (name == "Logout") {
      this.handleLogOut()
    }
   }

  render() {
    const { activeItem } = this.state

    return (
        <Menu>
        <Menu.Item
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='FAQ'
          active={activeItem === 'FAQ'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='News'
          active={activeItem === 'News'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Contact'
          active={activeItem === 'Contact'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Logout'
          active={activeItem === 'Logout'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
