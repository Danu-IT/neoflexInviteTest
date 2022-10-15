import React, { useEffect, useMemo, useState } from "react";
import classes from "./CardBasketItem.module.scss";
import { BiRuble } from "react-icons/bi";
import deleteIcon from "../../assets/basket/delete.svg";
import { useDispatch, useSelector } from "react-redux";
import { deleteBasket, addFullPrice, removeFullPrice, updateCount} from "../../features/basket/basketSlice";

const CardBasketItem = ({ itemView }) => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket);
  const [count, setCount] = useState(1);
  const [itemPrice, setItemPrice] = useState(itemView.price);

  useEffect(() => {
    dispatch(addFullPrice(itemView.price));
    basket.forEach(el => {
      if(el.id == itemView.id){
        setCount(el?.count)
      }
    })
    return () => {
      dispatch(removeFullPrice(itemView.price));
    };
  },[])
  useEffect(() => {
    dispatch(updateCount({...itemView, count: count}));
  },[count])

  useMemo(() => {
    setItemPrice(count * itemView.price);
  },[count]);

  const increment = (e) => {
    setCount((prev) => prev + 1);
    dispatch(addFullPrice(itemView.price));
  }

  const decrement = (e) => {
    if(count <= 1) return dispatch(deleteBasket(itemView.id))
    setCount((prev) => prev - 1);
    dispatch(removeFullPrice(itemView.price));
  };

  const deleteItemFull = () => {
    dispatch(removeFullPrice(itemView.price * (count - 1)));
    return dispatch(deleteBasket(itemView.id));
  }

  return (
    <div className={classes.cardBasketContainer}>
      <div className={classes.cardBasketContainer__left}>
        <div className={classes.cardBasketContainer__imgAndCount}>
          <div className={classes.cardBasketContainer__img}>
            <img src={itemView.img} alt="" />
          </div>
          <div className={classes.cardBasketContainer__countContainer}>
            <button
              onClick={(e) => decrement(e)}
              className={classes.cardBasketContainer__count}
            >
              -
            </button>
            <span>{count}</span>
            <button
              onClick={(e) => increment(e)}
              className={classes.cardBasketContainer__count}
            >
              +
            </button>
          </div>
        </div>
        <div className={classes.cardBasketContainer__titleAndPrice}>
          <h4 className={classes.cardBasketContainer__title}>
            {itemView.title}
          </h4>
          <div className={classes.cardBasketContainer__price}>
            {itemView.price}
            <BiRuble size={"20px"}></BiRuble>
          </div>
        </div>
      </div>
      <div className={classes.cardBasketContainer__right}>
        <img className={classes[`cardBasketContainer__right-img`]} onClick={deleteItemFull} src={deleteIcon} alt="" />
        <div className={classes.cardBasketContainer__countItem}>
          {itemPrice}
          <BiRuble size={"20px"}></BiRuble>
        </div>
      </div>
    </div>
  );
};

export default CardBasketItem;
