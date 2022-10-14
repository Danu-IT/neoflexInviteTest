import React from 'react'

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import MainBasket from '../components/MainBasket/MainBasket';

import '../styles/App.scss'


const BasketPage = () => {
  return (
    <div className='App'>
      <div className="wrapper">
        <Header></Header>
        <MainBasket className='main'></MainBasket>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default BasketPage