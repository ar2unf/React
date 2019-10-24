
import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
   static propTypes = {
       text: PropTypes.string.isRequired,
       senderId:PropTypes.string.isRequired,
   };

   render() {
       return <div>{ this.props.senderId }: { this.props.text }</div>
   }
}
