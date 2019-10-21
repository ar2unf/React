import React from 'react';
import Message from './Message.jsx';

const bot_answers = ['раз', 'два','три'];

const arrayRandomElm = (arr)=>{
    arr[Math.floor(Math.random()*arr.length)]
}


export default class MessageField extends React.Component {
   state = {
       messages: ["Привет!", "Как дела?"]
   };

   componentDidUpdate() {
    if (this.state.messages.length % 2 === 1) { 
        setTimeout(() =>
        this.setState(
            { messages: [ ...this.state.messages, 'Не приставай ко мне, я робот!' ] }),
        1000);
    }
}


   handleSendMessage = () => {
       this.setState({ messages: [ ...this.state.messages, 'Нормально' ] });
   };

   render() {
       const messageElements = this.state.messages.map((text, index) => (
           <Message key={ index } text={ text } />));

       return <div>
           { messageElements }
           <button onClick={ this.handleSendMessage }>Отправить сообщение</button>
       </div>
   }
}
