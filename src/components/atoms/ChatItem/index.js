import React from 'react';
import IsMe from './IsMe';
import Other from './Other';

const ChatItem = (props) => {
  if (props.isMe) {
    return <IsMe isiChat={props.isiChat} waktuChat={props.waktuChat}></IsMe>;
  }
  return <Other isiChat={props.isiChat} waktuChat={props.waktuChat} photo={props.photo}></Other>;
};

export default ChatItem;
