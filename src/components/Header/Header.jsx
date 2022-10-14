import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import CartIcon from '../CartIcon/CartIcon'

import Logo from '../Logo/Logo'

import classes from './Header.module.scss'



const Header = () => {
  return (
    <div className={classes.header}>
        <Logo></Logo>
        <div className={classes.category}>
            <AiOutlineHeart size={'25px'}></AiOutlineHeart>
            <CartIcon></CartIcon>
        </div>
    </div>
  )
}

export default Header