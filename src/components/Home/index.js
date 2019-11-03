import React, { Component } from 'react';
import { withAuthorization } from '../Session';
import Card from '@material-ui/core/Card'
import withStyles from '@material-ui/core/styles'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Jake from '../../assests/img/lll.jpeg'
const style = theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})
class HomePage extends Component { 
  constructor(props) {
    super(props)
    this.state = {
      trending: ['California Wildfires', 'Gun Violence', 'Opioid Epedemic', 'Travel Ban', 'Medical Marijuana', 'LGBTQ Discrimination', 'Redistricting', 'Immigration', 'Teen Drinking']
    }
  }

  

  render() {
    const classes = this.props
  return(
    <Card className = {classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Jake}
          title={this.state.trending[0]}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            title={this.state.trending[0]}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Discuss
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
  }
}
const condition = authUser => !!authUser;
export default withAuthorization(condition)(HomePage);



