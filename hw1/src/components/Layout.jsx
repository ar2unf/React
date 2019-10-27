import React from 'react';
import MessageField from './MessageField.jsx'
import ListChat from './ChatList.jsx'
import Header from './Header.jsx'



const Layout = () => (
  <div className ="layout">
    <Header/>
    <div className ="content">
      <ListChat />
      <MessageField />
    </div>
  </div>
);

export default Layout;