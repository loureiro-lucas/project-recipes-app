import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/Explore.css';

function Explore() {
  return (
    <>
      <Header pageTitle="Explorar" showSearchIcon={ false } />
      <div className="explore-container">
        <Link to="/explorar/comidas">
          <button
            className="explore-btn"
            type="button"
            data-testid="explore-food"
          >
            Explorar Comidas
          </button>
        </Link>

        <Link to="explorar/bebidas">
          <button
            className="explore-btn"
            type="button"
            data-testid="explore-drinks"
          >
            Explorar Bebidas
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Explore;
