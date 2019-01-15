import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import StyledCardGrid from './CardGrid';
import debounceRender from 'react-debounce-render';
import { CARDS_PER_PAGE } from '../constants';

const viewerStyles = {
  container: {
    height: 750,
    marginTop: 64,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    padding: 32,
    opacity: 1,
    '& > div': {
      transition: 'all 0.5s ease',
    },
    '&.loading > div:not(:first-child)': {
      opacity: '0 !important',
    },
  },
};

// class RenderPage extends React.PureComponent {
//   render() {

//       const { page, cards, currentPage, toggleCard } = this.props;
//     if (Math.abs(currentPage - page) <= 1) {
//       return (
//         <StyledCardGrid
//           key={page}
//           cards={cards.slice(
//             page * CARDS_PER_PAGE,
//             (page + 1) * CARDS_PER_PAGE,
//           )}
//           offset={page - currentPage}
//           toggleCard={toggleCard}
//         />
//       );
//     } else return null;
//   }
// }
/**
 * 
 */
class CardScreen extends React.Component {
  componentDidMount() {
    this.props.changePage(0);
    console.log("+++++++++++++++++++++++++++++++++++++++++++");
  }

  renderPage = page => {
    const { cards, currentPage, toggleCard } = this.props;
    if (Math.abs(currentPage - page) <= 1) {
      return (
        <StyledCardGrid
          key={page}
          cards={cards.slice(
            page * CARDS_PER_PAGE,
            (page + 1) * CARDS_PER_PAGE,
          )}
          offset={page - currentPage}
          toggleCard={toggleCard}
        />
      );
    } else return null;
  };

  // update(nextProps, nextState) {
  //   return true;
  // }

  render() {
    const { classes, cards, totalPage, error, currentPage, toggleCard } = this.props;
    const loading = totalPage === -1 || !cards.length;

    return (
      <div> 
        {!error
          // toggle loading classname to fade out
          ?  <div className={classes.container + (loading ? " loading" : "")}>
          {loading && <CircularProgress size={50} />}
          {/* when totalPage != -1, then render pages */}
          {/* {[...Array(Math.max(totalPage, 0)).keys()].map((page) => <RenderPage key={page} page={page} cards={cards} currentPage={currentPage} toggleCard={toggleCard}/>)} */}
          {[...Array(Math.max(totalPage, 0)).keys()].map(this.renderPage)}
        </div>   
          : <div className={classes.container}>error</div>  
        }
      </div>
    );
  }
}

CardScreen.propTypes = {
  cards: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPage: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  toggleCard: PropTypes.func.isRequired,
};

export default debounceRender(withStyles(viewerStyles)(CardScreen), 100, {
  leading: true,
});
