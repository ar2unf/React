
import React from 'react';
import PropTypes from "prop-types";
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from './Message.jsx';
import '../styles/styles.css';

export default class MessageField extends React.Component {
   static propTypes = {
       chatId: PropTypes.number.isRequired,
       state: PropTypes.object.isRequired,
   };
   static defaultProps = {
    chatId: 1,
    state: {
        chats: {
            1: {title: 'Чат 1', messageList: [1]},
            2: {title: 'Чат 2', messageList: [2]},
            3: {title: 'Чат 3', messageList: []},
        },
        messages: {
            1: { text: "Привет!", sender: 'bot' },
            2: { text: "Здравствуйте!", sender: 'bot' },
        },
        input: '',
    },
};

componentDidUpdate(prevProps, prevState) {
    const { messages } = this.props.state;
    if (Object.keys(prevProps.state.messages).length < Object.keys(messages).length &&
        Object.values(messages)[Object.values(messages).length - 1].sender === 'me') {
        setTimeout(() =>
            this.props.handleSendMessage('Не приставай ко мне, я робот!', 'bot'), 1000);
    }
  }
/** вызываем функцию родителя для обновления стейта */
   handleChange = (event) => {
       this.props.changeStateInput(event.target.name, event.target.value );
   };
/** вызываем функци рожителя для отправки сообщения */
   handleKeyUp = (event) => {
    console.log(this.props.state.input);
       if (event.keyCode === 13) { // Enter
           this.props.handleSendMessage(this.props.state.input, 'me')
           
       }
   };
   

   render() {
       const { messages, chats } = this.props.state;
       const { chatId } = this.props;

       const messageElements = chats[chatId].messageList.map((messageId, index) => (
           <Message
               key={ index }
               text={ messages[messageId].text }
               sender={ messages[messageId].sender }
           />));

       return [
           <div key='messageElements' className="message-field">
               { messageElements }
           </div>,
           <div key='textInput' style={ { width: '100%', display: 'flex' } }>
               <TextField
                   name="input"
                   fullWidth={ true }
                   hintText="Введите сообщение"
                   style={ { fontSize: '22px' } }
                   onChange={ this.handleChange }
                   value={ this.props.state.input }
                   onKeyUp={ this.handleKeyUp }
               />
               <FloatingActionButton
                   onClick={ () => this.props.handleSendMessage(this.props.state.input, 'me') }>
                   <SendIcon />
               </FloatingActionButton>
           </div>
       ]
   }
}
