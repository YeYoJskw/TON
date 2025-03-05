import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  return (
    <header>
      <a className="logo-header" onClick={() => navigate('/Home')}>
        <b>Q</b> BLOCKCHAIN
      </a>
      <nav>
        <ul>
          <li>
            <a href="#">Top</a>
          </li>
          <li>
            <a href="#">Blocks</a>
          </li>
          <li>
            <a href="#">Transactions</a>
          </li>
        </ul>
        <button onClick={() => navigate('/second')} className="button-header">
          Explorer
        </button>
      </nav>
    </header>
  )
}

export default Header
