
import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
   static propTypes = {
       text: PropTypes.string.isRequired,
       senderId:PropTypes.string.isRequired,
   };

   render() {
       return <div
       className="message"
       style={ { alignSelf: this.props.senderId === 'AngryBot' ?
               'flex-start' : 'flex-end' 
               } }
   >
       <div>{ this.props.text }</div>
       <div className="message-sender">{ this.props.senderId }</div>
       </div>

   }
}
