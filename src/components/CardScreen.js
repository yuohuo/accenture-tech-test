import React from 'react'
import Card from './card'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
 const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: '25% 25% 25% 25%'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    height: 750,
    marginTop: 64,
  }
}
 class CardScreen extends React.Component {
  render() {
    console.log(this.props);
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.grid}>
          {this.props.cards && this.props.cards.map((card, i) => {return <Card coreData={card.coreData} key={i}/> })}
        </div>
      </div>
    )
  }
}

class CardGrid extends React.Component {
  render() {
    const { classes, cards } = this.props;
    return (
      <div className={classes.grid}>
        {cards.map((card, i) => { return <Card coreData={card.coreData} key={i} /> })}
      </div>
    )
  }
}
 CardGrid.propTypes = {
  cards: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired
}
CardScreen.propTypes = {
  cards: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired
}

 export default withStyles(styles)(CardScreen); 