import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="foot">
          <div className="about-us-block">
            <a className="logo-footer" href="">
              Q BLOCKCHAIN
            </a>
            <p className="about-us">
              Q BLOCKCHAIN is a Block Explorer and Analytics Platform for Q
              Platform
            </p>
            <a href="">
              <img src="/TON/img/telegram.png" alt="" />
            </a>
          </div>
          <nav className="links">
            <a className="link" href="">
              Top Accaunts
            </a>
            <a className="link" href="">
              Blocks
            </a>
            <a className="link" href="">
              Transactions
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
