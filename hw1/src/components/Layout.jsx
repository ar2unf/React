
import React from 'react';
import PropTypes from "prop-types";
import MessageField from './MessageField.jsx';
import ChatList from './ChatList.jsx';
import Header from './Header.jsx';
import '../styles/styles.css';


export default class Layout extends React.Component {
   static propTypes = {
       chatId: PropTypes.number,
       profile: PropTypes.number,
   };

   static defaultProps = {
       chatId: 1,
       profile:0,
   };

   state = {
    chats: {
        1: {title: 'Чат ', messageList: [1]},
        2: {title: 'Чат ', messageList: [2]},
        3: {title: 'Чат ', messageList: []},
    },
    messages: {
        1: { text: "Привет!", sender: 'bot' },
        2: { text: "Здравствуйте!", sender: 'bot' },
    },
    input: '',
};
handleAddChat = ()=>{
  const { chats } = this.state;
  const  chatId = Object.keys(chats).length + 1;
  this.setState({
    chats:{...chats,[chatId]: {title: 'Чат ', messageList: []}},
  })
  console.log (this.state.chats)
};




changeStateInput = (name, value)=>{
  this.setState ({[name]: value});
};
handleSendMessage = (message, sender) => {
  const { messages, chats, input } = this.state;
  const { chatId } = this.props;

  if (input.length > 0 || sender === 'bot') {
      const messageId = Object.keys(messages).length + 1;
      this.setState({
          messages: {...messages,
              [messageId]: {text: message, sender: sender}},
          chats: {...chats,
              [chatId]: { ...chats[chatId],
                  messageList: [...chats[chatId]['messageList'], messageId]
              }
          },
      })
  }
  if (sender === 'me') {
      this.setState({ input: '' })
  }
};

   render() {

    
     /*console.log (this.props.profile)*/
     if (this.props.profile){
      return(<div className="layout"> Это страница профайла
      </div>)

     }else{
      return (
        <div className="layout">
            <Header chatId={ this.props.chatId } />
            <div className="layout-canvas">
                <div className="layout-left-side">
                    <ChatList handleAddChat={this.handleAddChat} listChat={this.state.chats}/>
                </div>
                <div className="layout-right-side">
                    <MessageField 
                      chatId={ this.props.chatId } 
                      state ={this.state} 
                      changeStateInput ={this.changeStateInput}
                      handleSendMessage ={this.handleSendMessage}

                    />
                </div>
            </div>
        </div>
    )

     }
       
   }
}
