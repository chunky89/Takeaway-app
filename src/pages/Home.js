import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';
import homepage from '../images/homepage.jpg';
import "../styles/HomeStyles.css"

const Home = () => {
  return (
    <Layout>
      <div className='home' style={{ backgroundImage: `url(${homepage})`}}>
        <div className='headerContainer'>
        <h1>Chinese Takeaway Menu</h1>
        <p>Heathy Chinese Cuisine To Takeaway</p>
        <Link to="/menu">
        <button>ORDER NOW</button>
        </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home
