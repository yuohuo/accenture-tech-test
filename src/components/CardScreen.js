import React from 'react'
import Card from './card'
import { withStyles } from '@material-ui/core/styles';
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
 export default withStyles(styles)(CardScreen); 