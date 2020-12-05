import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Url.module.css';

function Url(props) {
  return (
    <li className={classes.Url}>
      <NavLink to={props.link} exact>
        {props.children}
      </NavLink>
    </li>
  );
}

export default Url;
