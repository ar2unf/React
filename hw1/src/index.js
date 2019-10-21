/*
import React from 'react';
import ReactDOM from 'react-dom';


let messages = ['Привет', 'Как дела?'];

const sendMessage = ()=>{
   messages.push('Нормально');
   ReactDOM.render(
   <MessageField messages={ messages } />,
   document.getElementById('root'),
);

}

const MessageComponent = (props) => <div>{props.text}</div>;

const MessageField = (props) => 
   <div>
      <h1>Чат</h1>
      {props.messages.map(message => <MessageComponent text={ message } />)}
      <button onClick={sendMessage}>Добавить сообщения</button>
   </div>

  


ReactDOM.render(
   <MessageField messages={ messages } />,
   document.getElementById('root'),
);*/

import React from 'react';
import ReactDOM from 'react-dom';
//import App from './components/App.jsx';
import App from './components/MessageField.jsx'

ReactDOM.render(
   <App />,
   document.getElementById('root'),
);
