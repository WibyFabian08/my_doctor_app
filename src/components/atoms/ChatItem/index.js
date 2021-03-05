import React from 'react';
import IsMe from './IsMe';
import Other from './Other';

const ChatItem = (props) => {
  if (props.isMe) {
    return <IsMe></IsMe>;
  }
  return <Other></Other>;
};

export default ChatItem;
