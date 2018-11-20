import { connect } from 'react-redux'
import cardGrid from '../components/cardGrid'

const mapStateToProps = (state) => {
    const page = state.viewer.currentPage;
    const cards = state.cards.slice(page * 12, (page + 1) * 12)
    return {cards};
}
export default connect(mapStateToProps)(cardGrid); 