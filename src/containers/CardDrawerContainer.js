import { connect } from 'react-redux'
import CardDrawer from '../components/CardDrawer'
import { toggleCard } from '../actions'


export const mapStateToProps = (state) => {
    return { card: state.viewer.selectedCard };
}

export const mapDispatchToProps = (dispatch) => ({
    toggleCard: (card) => dispatch(toggleCard(card))
  })

export default connect(mapStateToProps, mapDispatchToProps)(CardDrawer);
