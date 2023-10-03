import React, { Component } from "react";
import ShoppingCartPopup from './ShoppingCart'; // Import the shopping cart component

export class NavBar extends Component {

  constructor(cart) {
    super(cart);
    this.state = {
      showCart: false, // Disables the shopping cart when the page is initially loaded
    };
  }

  toggleCart = () => {
    this.setState((prevState) => ({
      showCart: !prevState.showCart, // Toggle the value (show/hide)
    }));
  }

  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar navbar-expand-lg bg-dark navbar-style"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/#">
              Galeria
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <div class="dropdown">
                 <button class="btn btn-secondary dropdown-toggle  pages-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                 <i class="fa fa-home" aria-hidden="true"></i>
                    &nbsp;Pages
                    </button>
                    <ul class="dropdown-menu">
                       <li><a class="dropdown-item" href="#">Home</a></li>
                       <li><a class="dropdown-item" href="#">Artist</a></li>
                       <li><a class="dropdown-item" href="#">Art</a></li>
                    </ul>
              </div>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-light" type="submit">
                <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </div>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle btn-account"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                <i class="fa fa-user-circle" aria-hidden="true"></i>
              </button>             
              <ul class="dropdown-menu dropdown-menu-end">
                <li>
                  <a class="dropdown-item" href="/#">
                    Account Info
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/#">
                    Saved for later
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/#">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <a
              href="/cart"
              className="btn btn-light btn-cart"
              data-bs-toggle="button"
              onClick={this.toggleCart} // Add an onClick handler to toggle the cart
              >           
              <i className="fas fa-shopping-cart"></i>
              </a>
              {this.state.showCart && <ShoppingCartPopup/>}

          </div>
        </nav>
        
      </React.Fragment>
    );
  }
}

export default NavBar;
