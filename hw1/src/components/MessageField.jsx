import React from 'react';
import Message from './Message.jsx';

const BOT_ANSWER =['Не мешай','Отойди','Кожаный мешок','Уйди!','анигилирую!','Завязывай!'];


const GetRandomBotAnswer = ()=>BOT_ANSWER[Math.floor(Math.random()*BOT_ANSWER.length)];


export default class MessageField extends React.Component {
   state = {
      // messages: ["Привет!", "Как дела?"]
      messages:[
          {
              senderId :"AngryBot",
              text: "Привет!"
          },
          {
            senderId :"AngryBot",
            text: "Кожаный Мешок"
        },

      ]
   };

   componentDidUpdate() {
    if (this.state.messages[this.state.messages.length-1].senderId=="human") {  
        setTimeout(() =>
        this.setState(
            { messages: [ ...this.state.messages, {senderId:"AngryBot",text:GetRandomBotAnswer()} ] }),
        200);
    }
}


   handleSendMesage = () => {
       this.setState({ messages: [ ...this.state.messages, {senderId:"human",text:'Нормально'} ] });
   };

   render() {
       const messageElements = this.state.messages.map((message, index) => (
           <Message key={ index } text={ message.text } senderId ={message.senderId} />));

       return <div>
       <button onClick={ this.handleSendMesage }>Отправить сообщение</button>
       <h1>Чат</h1>
           <div >{ messageElements }</div>
           
       </div>
   }
}
