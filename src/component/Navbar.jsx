import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const productItmes = useSelector((state) => state.product);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className='container'>
        <Link className="navbar-brand" to="/">Ecommerce</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart-list">Cart {productItmes.length}</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
