import React from 'react'
import CardItem from '../CardItem/CardItem'
import classes from './CardsList.module.scss'

const CardsList = ({view, title}) => {
  return (
    <div className={classes.CardsList__container}>
        <h1 className={classes.CardsList__title}>{title}</h1>
        <div className={classes.CardsList__content}>
            {view.map(itemView => {
                return(
                    <CardItem key={itemView.id} itemView={itemView}></CardItem>
                )
            })}
        </div>
    </div>
  )
}

export default CardsList