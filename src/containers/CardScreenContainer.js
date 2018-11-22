import { connect } from 'react-redux'
import CardScreen from '../components/CardScreen'
import { changePage, toggleCard } from '../actions'


export const mapStateToProps = (state) => {
    const {currentPage, totalPage} = state.viewer
    return {cards: state.cards, totalPage, currentPage};
}

export const mapDispatchToProps = (dispatch) => ({
    changePage: (page) => dispatch(changePage(page)),
    toggleCard: (card) => dispatch(toggleCard(card))
  })

export default connect(mapStateToProps, mapDispatchToProps)(CardScreen);