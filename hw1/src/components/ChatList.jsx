import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List';
import ContentSend from 'material-ui/svg-icons/content/send';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';




export default class ChatList extends React.Component {
  static propTypes = {
    
    listChat: PropTypes.object.isRequired,
};
static defaultProps = {
  listChat:{
      1: {title: 'Чат ', messageList: [1], }, 
      2: {title: 'Чат ', messageList: [2], },
      3: {title: 'Чат ', messageList: [],  },
  }
};

handleAddChat


   render() {
            const { listChat } = this.props;
            const ChatElements = Object.keys(listChat).map((chat, index) => (
                <Link to={`/chat/${chat}`} key={ chat }>
                   <ListItem primaryText={listChat[chat].title} leftIcon={<ContentSend />} />
               </Link>
            ));
           /* console.log (ChatElements);*/
       return (
         <div>
         <List className="list" key ='ChatElements'>
          {ChatElements}
         </List>
           <FloatingActionButton 
              mini={true} className="button"
              onClick={ () => this.props.handleAddChat() }
              >
              <ContentAdd />
            </FloatingActionButton>

         </div>
           

       )
   }
}
