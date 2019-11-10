
import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List';
import ContentReport from 'material-ui/svg-icons/content/report';


export default class Header extends React.Component {
   static propTypes = {
       chatId: PropTypes.number,
   };

   /**static defaultProps = {
       chatId: 2,
   };*/

   render() {
       return (
           <div className="header">
           <Link to="/profile/">
                  <ListItem primaryText="Профиль" leftIcon={<ContentReport />} />
               </Link>
               <span style={ { fontSize: '20px' } }>Чат { this.props.chatId }</span>
           </div>

           
       )
   }
}
