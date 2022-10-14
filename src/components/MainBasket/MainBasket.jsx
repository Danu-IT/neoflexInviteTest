import React from 'react'

import { useSelector } from 'react-redux'
import CardBasketList from '../CardBasketList/CardBasketList';
import Total from '../Total/Total';

const MainBasket = () => {
    const bakset = useSelector((state) => state.basket.basket);
  return (
    <div className='main basket'>
        <CardBasketList title={'Корзина'} view={bakset}></CardBasketList>
        <Total></Total>
    </div>
  )
}

export default MainBasket