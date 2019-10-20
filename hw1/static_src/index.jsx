import React from 'react';
import ReactDOM from 'react-dom';

const content = 'Кажется, мы подключили React';

const Component = (props) => <h1 className="element">{props.content}</h1>;

ReactDOM.render(
   <Component content={ content } />,
   document.getElementById('root'),
);