import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Store from './components/Store'
import Mac from './components/Mac'
import Ipad from './components/Ipad'
import Iphone from './components/Iphone'
import Watch from './components/Watch'
import AirPods from './components/AirPods'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Routes>
  <Route path='/'element={<App/>}></Route>
  <Route path='/Store'element={Store}></Route>
  <Route path='/Mac'element={Mac}></Route>
  <Route path='/Ipad'element={Ipad}></Route>
  <Route path='/Iphone'element={Iphone}></Route>
  <Route path='/Watch'element={Watch}></Route>
  <Route path='/AirPods'element={AirPods}></Route>
</Routes>
</BrowserRouter>
);
