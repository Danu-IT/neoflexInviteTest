import React, { useEffect, useState } from 'react'
import classes from './CardItem.module.scss'
import { AiFillStar } from 'react-icons/ai'
import { BiRuble }  from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addBasket, deleteBasket } from '../../features/basket/basketSlice'


const CardItem = ({itemView}) => {
  const [thisItemInCard, setThisItemInCard] = useState(false);
  const basket = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();
  
  useEffect(() => {
    basket.forEach(el => {
      if(el.id == itemView.id){
        setThisItemInCard(true)
      }
    })
  },[])

  const addAndRemoveItemBasket = () => {
    setThisItemInCard(!thisItemInCard);
    if(thisItemInCard){
      dispatch(deleteBasket(itemView.id));
    } else{
      dispatch(addBasket(itemView));
    }
  }
  return (
    <div className={classes.cardContainer}>
      <div className={classes.cardContainer__img}>
        <img src={itemView.img} alt="" />
      </div>
      <div className={classes.cardContainer__titleAndPrice}>
        <h4>{itemView.title}</h4>
        <div className={classes.cardContainer__price}>{itemView.price} <BiRuble size={'20px'} color='rgba(255, 165, 66, 1)'></BiRuble></div>
      </div>
      <div className={classes.cardContainer__rateAndBuy}>
        <div className={classes.cardContainer__rate}>
          <AiFillStar size={'20px'} color='#FFCE7F'></AiFillStar>
          <span>{itemView.rate}</span>
        </div>
        <a onClick={addAndRemoveItemBasket} className={classes.cardContainer__buy}>{thisItemInCard ? <span style={{color: 'red'}}>Убрать из корзины</span> : 'Купить'}</a>
      </div>
    </div>
  )
}

export default CardItem