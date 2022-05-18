import React from 'react';
import './index.css'
import Image from './apple.png';
import Image1 from './last-search 1.png'
import Image3 from './apple banner 1.png'
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <div className='navcon'>
        <div className='logo'>
          <img src={Image}/>
        </div>

        <Link to='/'>
        <div className='menu'>
            <p>Store</p>
        </div>
        </Link >
        <Link to='Mac'>
        <div className='menu'>
            <p>Mac</p>
        </div>
        </Link>
        <Link to='Ipad'>
        <div className='menu'>
            <p>Ipad</p>
        </div>
        </Link>
        <Link to='Iphone'>
        <div className='menu'>
            <p>Iphone</p>
        </div>
        </Link>
        <Link to='Watch'>
        <div className='menu'>
            <p>Watch</p>
        </div>
        </Link>
        <Link to='AirPods'>
        <div className='menu'>
            <p>AirPods</p>
        </div>
        </Link>
        <div className='input'>
          <img src={Image1}/>
          <input type='search' ></input>
        </div>

      </div>

      <div className="content">
        <h1>Iphone 13 Pro</h1>
        <h1>Oh So, Pro</h1>
        <img src={Image3}/>
      </div>
    </div>
  );
}

export default App;
