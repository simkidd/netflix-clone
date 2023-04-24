import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const handleSubmit = (e) => {
    e.preventdefault()
  }
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">
            <img src={"https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"} width={100} alt="" />
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="search"
            placeholder="Search for a movie..."

          />
          <button type="submit">Search</button>
        </form>
        <div className="header__nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </div>
  )
}

export default Header