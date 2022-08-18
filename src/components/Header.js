import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className = "header">
        <h1 className = "header__name">Michael Jordan</h1>
        <h4 className = "header__job">Basketball Player</h4>
        <h5 className = "header__website"><a href = "https://www.jordan.com/collection/">www.jordan.com/collection/</a></h5>
        <button id = "header_button">Follow+</button>
    </div>
  )
}

export default Header