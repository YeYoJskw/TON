import React from 'react'
import './HeaderSecond.css'
import { useNavigate } from 'react-router-dom'

const HeaderSecond = () => {
  const navigate = useNavigate()

  return (
    <header>
      <a className="logo-header" onClick={() => navigate('/Home')}>
        <b>Q</b> BLOCKCHAIN
      </a>
      <form className="form-search-header" action="">
        <select className="filter-dropdown-header">
          <option value="option1">All filters</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <div>
          <input
            type="text"
            className="search-field-header"
            placeholder="Search by Address "
          />
          <button className="search-button-header">
            <img src="/TON/img/search.png" alt="" />
          </button>
        </div>
      </form>
    </header>
  )
}

export default HeaderSecond
