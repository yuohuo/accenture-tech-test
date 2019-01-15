import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { withStyles } from '@material-ui/core/styles';

/**
 * 
 */
class CardGrid extends React.Component {
    render() {
      const { classes, cards, offset, toggleCard } = this.props;
      return (
        <div
          className={classes.gridContainer}
          style={{
            // use offset value to slide cards in
            transform: `translateX(calc(${offset * 100}% + ${offset * 50}px))`,
          }}
        >
          <div className={classes.grid}>
            {cards.map((card, i) => {
              // console.log(card.coreData.id);
              return <Card cardData={card} key={i} toggleCard={toggleCard} />;
            })}
          </div>
        </div>
      );
    }
  }
  
  CardGrid.propTypes = {
    cards: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
    offset: PropTypes.number.isRequired,
    toggleCard: PropTypes.func.isRequired,
  };

  const gridStyles = {
    grid: {
      width: 1140,
      maxWidth: '100%',
      display: 'grid',
      gridTemplateColumns: '25% 25% 25% 25%',
      gridTemplateRows: '250px 250px',
    },
    gridContainer: {
      position: 'absolute',
      width: '100%',
      height: 750,
      display: 'flex',
      justifyContent: 'center',
      transition: 'opacity  0.5s ease',
    },
  };


export default withStyles(gridStyles)(CardGrid);
