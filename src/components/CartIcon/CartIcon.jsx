import React from 'react'
import { BsCart3 } from 'react-icons/bs'
import classes from './CartIcon.module.scss'
import { useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom"

const CartIcon = () => {
  const navigate = useNavigate();
  const count = useSelector((state) => state.basket.basket);

  return (
    <div onClick={() => navigate(`/basket`)} className={classes.cart}>
        <BsCart3 size={'20px'}></BsCart3>
        <div>{count.length > 0 ? <span style={{backgroundColor: '#FFA542'}}> {count.length}</span> : null}</div>
    </div>
  )
}

export default CartIcon