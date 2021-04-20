import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import React from 'react'
import Me from '../assets/img/IMG_1131.jpg'
import Cat from '../assets/img/kittypretty.jpg'

const Chat = (props) => {

  const isQ = (props.type === 'question');
  const classes = isQ ? 'p-chat__row' : 'p-chat__reverse';


  return (
    <ListItem className={classes}>
        <ListItemAvatar>
          {isQ ? (
            <Avatar alt="icon" src={Me} />
          ) : 
          <Avatar alt="icon" src={Cat} />
          }
        </ListItemAvatar>
        <div className="p-chat__bubble">
          {props.text}
        </div>
      </ListItem>
  )
}



export default Chat;