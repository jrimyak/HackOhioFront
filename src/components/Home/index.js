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
import { makeStyles } from '@material-ui/core/styles';
import Wildfires from '../../assests/img/Wildfire.jpg'
import Gun from '../../assests/img/Gun.jpeg'
import Opioid from '../../assests/img/Opioid.jpeg'
import Education from '../../assests/img/Education.jpeg'
import Marijuana from '../../assests/img/MaryJane.jpeg'
import LGBTQ from '../../assests/img/lgbtq.jpeg'
import Redistricting from '../../assests/img/gerry.jpeg'
import Immigration from '../../assests/img/immi.jpeg'
import Medicaid from '../../assests/img/mediacaid.png'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
const useStyles = makeStyles({
  card: {
    maxWidth: 800,
    display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  },
  media: {
    height: 300,
    width: 500
  },
});

var trending = ['California Wildfires', 'Gun Violence', 'Opioid Epedemic', 'Education Funding', 'Medical Marijuana', 'LGBTQ Discrimination', 'Redistricting', 'Immigration', 'Medicaid']
var description = ['Wildfires can burn millions of acres of land at rapid speeds and can consume everything—trees, homes, even humans—in their paths. These rolling flames travel up to 14 miles an hour, which converts to about a four-minute mile pace, and can overtake the average human in minutes.', 'Gun-related violence is violence committed with the use of a gun (firearm or small arm). Gun-related violence may or may not be considered criminal. Criminal violence includes homicide (except when and where ruled justifiable), assault with a deadly weapon, and suicide, or attempted suicide, depending on jurisdiction.', 'Opioid addiction is a long-lasting (chronic) disease that can cause major health, social, and economic problems. Opioids are a class of drugs that act in the nervous system to produce feelings of pleasure and pain relief. Some opioids are legally prescribed by healthcare providers to manage severe and chronic pain.', 'Federal, state, and local governments fund K–12 public education in the United States. Under the Constitution, the state is responsible for public education. Annual funding levels vary dramatically across the country, with an average range from $4,000 to $10,000 for students without disabilities and $10,000 to $20,000 for students with disabilities. The federal government contributes about 10% of the total budget for both groups, primarily in the form of categorical grants to state education agencies. Local taxes generate the bulk of school funding (40%–50%).', 'Though marijuana, or cannabis, is commonly known as a recreational drug, it has been used as a medicine for thousands of years. Its recreational use is still illegal in all but a handful of U.S. states. Many states have legalized it for medical use, though the Food and Drug Administration (FDA) hasn’t approved it as a medicine.', 'The ACLU works to ensure that lesbian, gay, bisexual, and transgender people can live openly without discrimination and enjoy equal rights, personal autonomy, and freedom of expression and association.', 'Redistricting is the process of drawing electoral district boundaries in the United States. A congressional act passed in 1967 requires that representatives be elected from single-member districts, except when a state has a single representative, in which case one state-wide at-large election be held.', 'Immigration is the international movement of people to a destination country of which they are not natives or where they do not possess citizenship in order to settle or reside there, especially as permanent residents or naturalized citizens, or to take up employment as a migrant worker or temporarily as a foreign worker.', 'Medicaid is a joint federal and state program that provides free or low-cost health coverage to millions of Americans, including some low-income people, families and children, pregnant women, the elderly, and people with disabilities.']
var images = [Wildfires, Gun, Opioid, Education, Marijuana, LGBTQ, Redistricting, Immigration, Medicaid]
var links = ['https://www.independent.org/publications/article.asp?id=12834', 'https://www.amnesty.org/en/what-we-do/arms-control/gun-violence/', 'https://ghr.nlm.nih.gov/condition/opioid-addiction', 'https://www.asha.org/Advocacy/schoolfundadv/Overview-of-Funding-For-Pre-K-12-Education/', 'https://www.healthline.com/health/medical-marijuana', 'https://www.aclu.org/issues/lgbt-rights', 'https://ballotpedia.org/Redistricting', 'https://immigration.findlaw.com/immigration-overview/immigration-overview.html', 'https://www.benefits.gov/benefit/606']
function ListItem(props) {
  const classes = useStyles()
  return(
  <li>
  <Card className = {classes.card} >
  <CardActionArea>
    <CardMedia
     className={classes.media} 
      image={images[props.index]}
      alignItems='middle'
    />
    <CardContent>
      <Typography  variant='h5' component='h2'>
        {props.value}
      </Typography>
      <Typography variant='body2' color='textSecondary' component='p'>
      {description[props.index]}
      </Typography>
    </CardContent>
  </CardActionArea>
  <CardActions>
    <Button size="small" color="primary">
      Discuss
    </Button>
    <a href={links[props.index]} style={{textDecoration: 'none'}}>
    <Button size="small" color="primary" >
      Learn More
    </Button>
    </a>
  </CardActions>
</Card>
</li>

  )
}

function NumberList(props) {
  const trending = props.trending;
  var count =0;
  const listItems = trending.map((currElement, index) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={currElement.toString()}
              value={currElement}
              index = {index}
              
               />
  
  );
  return (
    
    <ul style={{textAlign: 'center', listStyle: 'none'}}>
      {listItems}
    </ul>
    
  );
}




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
                 style={{ height: '465vh', 
                        }}
       
                >
      <p style={{textAlign: 'center'}}>
     <NumberList trending={trending} />,
     </p>
  </Grid>
  )
  }
}
const condition = authUser => !!authUser;
export default withAuthorization(condition)(HomePage);



