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


class Post extends Component {
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

export default withAuthorization(condition)withStyles(styles)(Post);
