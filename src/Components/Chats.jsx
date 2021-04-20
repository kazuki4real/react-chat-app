import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {Chat} from './index'


const useStyles = makeStyles({
  root: {
    height: 400,
    padding: '0',
    overflow: 'scroll'
}
});

const Chats = (props) => {
  const classes = useStyles();
  
  return (
    <List id='scroll-area' className={classes.root}>
      {props.chats.map((chat, index) => (
        <Chat
        text={chat.text}
        type={chat.type}
        key={index.toString()}
        />
      ))}
    </List>
  )
}

export default Chats;