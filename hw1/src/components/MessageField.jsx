import React from 'react';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from './Message.jsx';
import '../styles/styles.css';

const BOT_ANSWER =['Не мешай','Отойди','Кожаный мешок','Уйди!','анигилирую!','Завязывай!'];


const GetRandomBotAnswer = ()=>BOT_ANSWER[Math.floor(Math.random()*BOT_ANSWER.length)];


export default class MessageField extends React.Component {
   /* constructor(props) {
        super(props);
        // создадим ref в поле `textInput` для хранения DOM-элемента
        this.textInput = React.createRef();
    }*/
 
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

      ],
      input: '',
   };

  /* componentDidMount() {
       this.textInput.current.focus();
   }*/


   componentDidUpdate(prevProps, prevState) {
    if (prevState.messages.length<this.state.messages.length 
        && this.state.messages[this.state.messages.length-1].senderId!=="AngryBot" ) {  
        setTimeout(() =>
        this.setState(
            { messages: [ ...this.state.messages, {senderId:"AngryBot",text:GetRandomBotAnswer()} ] }),
        1000);
    }
}


handleClick = (message) => {
    this.sendMessage(message)
};

handleChange = (event) => {
    this.setState({ input: event.target.value });
};

handleKeyUp = (event, message) => {
    if (event.keyCode === 13) { // Enter
        this.sendMessage(message)
    }
};

sendMessage = (message) => {
    if (message){
        this.setState({
            messages: [ ...this.state.messages, {text: message, senderId: 'human'} ], 
            input: '',
           });
    }
    
    
};

 

render() {
    const messageElements = this.state.messages.map((message, index) => (
        <Message key={ index } text={ message.text } senderId={ message.senderId } />));

    return <div className="layout">
        <div className="message-field">
            { messageElements }
        </div>
        <div style={ { width: '100%', display: 'flex' } }>
               <TextField
                   name="input"
                   fullWidth={ true }
                   hintText="Введите сообщение"
                   style={ { fontSize: '22px' } }
                   onChange={ this.handleChange }
                   value={ this.state.input }
                   onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }
               />
               <FloatingActionButton onClick={ () => this.handleClick(this.state.input) }>
                   <SendIcon />
               </FloatingActionButton>
           </div>

    </div>
}


}
