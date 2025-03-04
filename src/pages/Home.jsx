import React from 'react'
import Header from '../components/layout/Header'
import TableRows from '../components/TableRows'
import '../components/home.css'

function Home() {
  return (
    <div>
      <Header />
      <div className="content-block">
        <section className="hero-block">
          <div className="content-hero">
            <h1>Q address explorer</h1>
            <form className="form-search" action="">
              <select className="filter-dropdown">
                <option value="option1">All filters</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
              <div>
                <input
                  type="text"
                  className="search-field"
                  placeholder="Search by Address / Txn Hash / Block / Token"
                />
                <button className="search-button">
                  <img src="/TON/img/search.png" alt="" />
                </button>
              </div>
            </form>
          </div>
        </section>
        <section className="cards-section">
          <div>
            <div className="cards">
              <div className="card">
                <img className="img-card" src="/TON/img/diamond.png" alt="" />
                <div className="price-info">
                  <h3 className="coin-name">Toncoin Price</h3>
                  <div className="price-details">
                    <span className="price">2.45 USDT</span>
                    <span className="exchange-rate">0.009972 TONCOIN </span>
                    <div className="percent">
                      <img src="/TON/img/red.png" alt="" />
                      <span className="price-change-red">1.12%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <img className="img-card" src="/TON/img/agreement.png" alt="" />
                <div className="price-info">
                  <div className="main-card">
                    <div>
                      <h3 className="coin-name">Latests Block</h3>
                      <div className="price-details">
                        <span className="price">14937089</span>
                        <span className="exchange-rate">(3.0s)</span>
                      </div>
                    </div>
                    <div className="transitions">
                      <h3 className="transition">Transitions</h3>
                      <div className="transition-content">
                        <span className="count">2,425.99 M</span>
                        <span className="tps">(193.1 TPS)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <img
                  className="img-card"
                  src="/TON/img/investment.png"
                  alt=""
                />
                <div className="price-info">
                  <h3 className="coin-name">Market Cap</h3>
                  <div className="price-details">
                    <span className="price">3,185,745,879 USDT</span>
                    <span className="exchange-rate"></span>
                    <div className="percent">
                      <img src="/TON/img/red.png" alt="" />
                      <span className="price-change-red">5.12%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <img className="img-card" src="/TON/img/global.png" alt="" />
                <div className="price-info">
                  <h3 className="coin-name">Fully Diluted Market Cap</h3>
                  <div className="price-details">
                    <span className="price">$3,185,745,879</span>
                    <div className="percent">
                      <img src="/TON/img/green.png" alt="" />
                      <span className="price-change-green">5.12%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="graph-container">
            <div className="graph-content">
              <div className="graph-title">
                <p className="graph-h">
                  Toncoin transaction history last 14 days
                </p>
                <button className="graph-settings">
                  <img src="/TON/img/graph-setting.png" alt="" />
                </button>
              </div>
              <div className="graph-values">
                <div className="graph-value">
                  7.5M <div className="graph-stick1"></div>
                </div>
                <div className="graph-value">
                  5M <div className="graph-stick1"></div>
                </div>
                <div className="graph-value">
                  2.1M <div className="graph-stick1"></div>
                </div>
              </div>
              <div className="dates">
                <div className="graph-sticks">
                  <div className="graph-stick2"></div>
                  <div className="graph-stick2"></div>
                  <div className="graph-stick2"></div>
                  <div className="graph-stick2"></div>
                  <div className="graph-stick2"></div>
                  <div className="graph-stick2"></div>
                  <div className="graph-stick2"></div>
                </div>
                <div className="graph-dates">
                  <div style={{ paddingRight: '64px' }} className="graph-date">
                    Jan 19
                  </div>
                  <div style={{ paddingRight: '69px' }} className="graph-date">
                    Jan 26
                  </div>
                  <div className="graph-date">Feb 02</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="tables">
          <TableRows type="blocks" />
          <TableRows type="transactions" />
        </div>
      </div>
    </div>
  )
}

export default Home
