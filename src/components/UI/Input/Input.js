import React from 'react';
import classes from './Input.module.css';

function Input(props) {
  let inputElement = null;
  inputElement = (
    <input
      className={classes.InputElement}
      type={props.elementType}
      value={props.value}
      onChange={props.changed}
      placeholder={props.placeholder}
    />
  );

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
}

export default Input;
