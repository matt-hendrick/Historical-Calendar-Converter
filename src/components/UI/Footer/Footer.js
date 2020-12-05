import React from 'react';
import classes from './Footer.module.css';
import Typography from '@material-ui/core/Typography';

function Footer(props) {
  return (
    <footer className={classes.Footer}>
      <Typography variant="subtitle2">{props.children}</Typography>
    </footer>
  );
}

export default Footer;
