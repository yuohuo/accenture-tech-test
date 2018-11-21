import { connect } from 'react-redux'
import CardDrawer from '../components/CardDrawer'
import { toggleCard } from '../actions'


const mapStateToProps = (state) => {
    return { card: state.viewer.selectedCard };
}

const mapDispatchToProps = (dispatch) => ({
    toggleCard: (card) => dispatch(toggleCard(card))
  })

export default connect(mapStateToProps, mapDispatchToProps)(CardDrawer);
