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
import { FixedSizeList as List } from 'react-window';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
const style = theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})

var trending = ['California Wildfires', 'Gun Violence', 'Opioid Epedemic', 'Travel Ban', 'Medical Marijuana', 'LGBTQ Discrimination', 'Redistricting', 'Immigration', 'Teen Drinking']

function renderRow(props) {
  const { index, style } = props;
  return(
  <ListItem button key={index}>
  <Card /*className = {classes.card} */ >
  <CardActionArea>
    <CardMedia
    /*  className={classes.media} */
      image={Jake}
      title={trending[index]}
    />
    <CardContent>
      <Typography  variant='h5' component='h2'>
        title={trending[index]}
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
</ListItem>

  )
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};


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
    <Grid
                 container
                 spacing={0}
                 direction="column"
                 alignItems="center"
                 justify="center"
                 style={{ height: '90vh', 
                        }}
       
                >
    <List height={600} width={540} itemSize={20} itemCount={this.state.trending.length}>
  {renderRow } 
  </List>
  </Grid>
  )
  }
}
const condition = authUser => !!authUser;
export default withAuthorization(condition)(HomePage);



