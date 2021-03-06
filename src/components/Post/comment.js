import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'

import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Jake from '../assests/img/lll.jpeg'

import { withAuthorization } from '../Session';
import posttest from '../posttest';

const styles = theme => ({
    root: theme.mixins.gutters({
      maxWidth: 600,
      margin: 'auto',
      padding: theme.spacing.unit * 3,
      marginTop: theme.spacing.unit * 5
    }),
    title: {
      margin: `${theme.spacing.unit * 2}px ${theme.spacing.unit}px 0`,
      color: theme.palette.protectedTitle,
      fontSize: '1em'
    },
    bigAvatar: {
      width: 50,
      height: 50,
      margin: 10
    }
  })


class posttest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Jake Imyak',
            photoUrl: Jake,
            about: 'Hi I am in favor of doing this because of x y and z and i want to save the trees',
        
            created: '01/22/2019',
            age: 19,
            location: 'Buffalo Grove, Illinois',
            topic: 'Wildfires'
        }
    }

    

    render() {
        const {classes} = this.props
        return(
            <Paper className={classes.root} elevation={4}>
            <Typography type="title" className={classes.title}>
              Topic: {this.state.topic}
            </Typography>
            <List dense>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={Jake} className={classes.bigAvatar}/>
                </ListItemAvatar>
               <ListItemText>
                 Name: {this.state.name} <br></br>
                 Location: {this.state.location} <br></br>
                 Age: {this.state.age}
               </ListItemText>
              </ListItem>
              <Divider/>
              <ListItem>
                <ListItemText primary={this.state.about} secondary={"Posted: " + (
                  new Date(this.state.created)).toDateString()}/>
              </ListItem>
            </List>
          </Paper>
        )
    }
}

export default withStyles(styles)(posttest);




////////////////////////////


import React, { Component } from 'react';
import { compose } from 'recompose';
import { AuthUserContext, withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';

const PostsPage = () => (
  <div>
    <h1>Posts</h1>
    <p>Posts are viewable by all users</p>
    <Messages />
  </div>
);

const MessageList = ({ messages }) => (
  <ul>
    {messages.map(message => (
      <MessageItem key={message.uid} message={message} />
    ))}
  </ul>
);
const MessageItem = ({ message }) => (
  <li>
    <strong>{message.userId}</strong> {message.text}
  </li>
);

class MessagesBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      loading: false,
      messages: [],
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase.messages().on('value', snapshot => {
      const messageObject = snapshot.val();
      if (messageObject) {
        // convert messages list from snapshot
        const messageList = Object.keys(messageObject).map(key => ({
          ...messageObject[key],
          uid: key,
        }));
        this.setState({ 
          messages: messageList,
          loading: false 
        });
      } else {
        this.setState({ messages: null, loading: false });
      }
    });
  }
  componentWillUnmount() {
    this.props.firebase.messages().off();
  }

  onChangeText = event => {
    this.setState({ text: event.target.value });
  };
  onCreateMessage = (event, authUser) => {
    this.props.firebase.messages().push({
      text: this.state.text,
      userId: authUser.uid,
    });
    this.setState({ text: '' });
    event.preventDefault();
  };

  render() {
    const { text, messages, loading } = this.state;
    return (
      <AuthUserContext.Consumer>
        {authUser => (
      <div>
        {loading && <div>Loading ...</div>}
        {messages ? (
          <MessageList messages={messages} />
        ):(
          <div>There are no messages ...</div>
        )}
        <form onSubmit={event => this.onCreateMessage(event, authUser)}>
          <input
            type="text"
            value={text}
            onChange={this.onChangeText}
          />
          <button type="submit">Send</button>
        </form>
      </div>
      )}
      </AuthUserContext.Consumer>
    );
  }
}
const Messages = withFirebase(MessagesBase);
export default (PostsPage);