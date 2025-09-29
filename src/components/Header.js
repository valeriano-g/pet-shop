
import React from 'react';

const Header = ({ toggleCart }) => {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
          <img src="../img/perro (2).png" className="bi" width="40" role="img" aria-label="Bootstrap" />
          <figcaption className="px-2 py-2 fig-text fw-semibold">Nutry Pets</figcaption>
        </a>
      </div>
      <div className="nav-list-responsive">
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#home-section" className="nav-link px-2">Home</a></li>
          <li><a href="#food-section" className="nav-link px-2">Food for dog</a></li>
          <li><a href="#pet-accesories" className="nav-link px-2">Accesories</a></li>
          <li><a href="#dog-food" className="nav-link px-2">shop</a></li>
          <li><a href="#about-section" className="nav-link px-2">About</a></li>
        </ul>
      </div>
      <div className="col-md-3 text-end">
        <button type="button" className=" btn-outline-primary me-2" onClick={toggleCart}><i className="fa-solid fa-cart-shopping"></i>cart</button>
        <button type="button" className="btn-outline-primary"><i className="fa-solid fa-user"></i>Sign-in</button>
      </div>
      <div className="header-responsive">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="nav-collapse p-3">
            <h5 className="text-white h4">
              <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#home-section" className="nav-link d-flex flex-column nav-link-responsive py-2">Home</a></li>
                <li><a href="#food-section" className="nav-link px-2 nav-link-responsive"><i className="fa-solid fa-bowl-food"></i>Food for dog</a></li>
                <li><a href="#pet-accesories" className="nav-link px-2 nav-link-responsive"><i className="fa-solid fa-shield-dog"></i>Accesories</a></li>
                <li><a href="#dog-food" className="nav-link px-2 nav-link-responsive"><i className="fa-solid fa-bag-shopping"></i>shop</a></li>
                <li><a href="#about-section" className="nav-link px-2 nav-link-responsive"><i className="fa-solid fa-circle-info"></i>About</a></li>
              </ul>
            </h5>
          </div>
        </div>
        <nav className="navbar navbar-dark">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
