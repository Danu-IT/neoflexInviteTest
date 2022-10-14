import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";

import { setWired, setWireless } from '../../features/main/mainSlice';
import CardsList from "../CardsList/CardsList";

const Main = () => {
  const dispatch = useDispatch();
  const wired = useSelector((state) => state.main.wired);
  const wireless = useSelector((state) => state.main.wireless);

  useEffect(() => {
    dispatch(setWired());
    dispatch(setWireless())
  },[])

  return (
    <div className='main'>
      <CardsList title={'Наушники'} view={wired}></CardsList>
      <CardsList title={'Беспроводные наушники'} view={wireless}></CardsList>
    </div>
  );
};

export default Main;
