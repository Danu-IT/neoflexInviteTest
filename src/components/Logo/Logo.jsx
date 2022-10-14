import React from 'react'
import { useNavigate } from "react-router-dom"

import classes from './Logo.module.scss'

const Logo = () => {
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/home`)} className={classes.logo}>QPICK</div>
  )
}

export default Logo