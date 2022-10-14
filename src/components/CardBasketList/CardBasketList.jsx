import React from "react";
import CardBasketItem from "../CardBasketItem/CardBasketItem";

import classes from "./CardBasketList.module.scss";

const CardBasketList = ({ title, view }) => {
  return (
    <div>
      <div className={classes.CardBasketList__container}>
        <h1 className={classes.CardBasketList__title}>{title}</h1>
        <div className={classes.CardBasketList__content}>
          {view.map((itemView) => {
            return (
              <CardBasketItem
                key={itemView.id}
                itemView={itemView}
              ></CardBasketItem>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardBasketList;
