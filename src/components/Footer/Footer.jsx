import React from 'react'
import Logo from '../Logo/Logo'
import classes from './Footer.module.scss'
import { GrLanguage } from 'react-icons/gr'
import { BsTelegram } from "react-icons/bs";
import { RiWhatsappFill } from 'react-icons/ri'
import { FaInstagramSquare } from 'react-icons/fa'

const Footer = () => {
  const arr = ['Избранное', 'Корзина', 'Контакты', 'Условия сервиса'];

  return (
    <div className={classes.footer}>
        <div className={classes.footer__container}>
          <Logo></Logo>
          <div className={classes.footer__links}>
            {arr.map((el, index) => {
              return index == 3 
              ? ''
              : (
                <a key={index} className={classes.footer__link}>{el}</a>
              )
            })}
          </div>
          <div className={classes.footer__lang}>
            <div>{arr[3]}</div>
            <div className={classes[`footer__lang-icons`]}>
              <GrLanguage></GrLanguage>
              <div><span>Рус</span></div>
              <div>Eng</div>
            </div>
          </div>
          <div>
            <div className={classes.footer__messanger}>
              <BsTelegram size={'30px'}></BsTelegram>
              <RiWhatsappFill size={'33px'}></RiWhatsappFill>
              <FaInstagramSquare size={'33px'}></FaInstagramSquare>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Footer