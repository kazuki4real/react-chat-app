import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

Text = (props) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
      error={props.error}
      id="standard-basic"
      fullWidth={true}
      label={props.label}
      rows={props.rows}
      margin={'dense'}
      multiline={props.multiline}
      value={props.value}
      type={props.type}
      onChange={props.onChange}
      />
    </form>
  )
}

export default Text;