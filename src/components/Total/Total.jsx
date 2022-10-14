import React from 'react'
import classes from './Total.module.scss'
import { useSelector } from 'react-redux'
import { BiRuble } from "react-icons/bi";

const Total = () => {
    const fuliPrise = useSelector((state) => state.basket.fullPrice)
  return (
    <div className={classes.total__container}>
        <div className={classes.total__top}>
            <div>Итого</div>
            <div className={classes.total__text}>
                <BiRuble size={"20px"}></BiRuble>
                {fuliPrise}
            </div>
        </div>
        <div className={classes.total__bottom}>
            <a>Перейти к оформлению</a>
        </div>
    </div>
  )
}

export default Total