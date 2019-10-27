import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

const ListChat = () => (
    <List className="layout">
      <Subheader>Открытые Чаты</Subheader>
      <ListItem
        primaryText="Test1"
        leftAvatar={<Avatar src="https://picsum.photos/536/354" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Test2"
        leftAvatar={<Avatar src="https://picsum.photos/536/354" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Test3"
        leftAvatar={<Avatar src="https://picsum.photos/536/354" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Test4"
        leftAvatar={<Avatar src="https://picsum.photos/536/354" />}
        rightIcon={<CommunicationChatBubble />}
      />
    </List>
);

export default ListChat;
