import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  root: {
    backgroundColor: 'gray',
    color: 'blue',
    fontWeight: 600,
    marginBottom: '8px',
    '&:hover': {
      backgroundColor: 'blue',
      color: '#fff'
    }
},
});

const Answers = (props) => {
  const classes = useStyles();
  // console.log(props);

  return (
    <div className="c-grid__answer">
      <Button
        className={classes.root}
        variant="contained"
        onClick={() => props.select(props.content, props.nextId)}>
        {props.content}
      </Button>

    </div>
  )
}

export default Answers;