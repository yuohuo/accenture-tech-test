import { connect } from 'react-redux'
import cardGrid from '../components/cardGrid'
 export default connect((state) => {return {cards: state.cards}})(cardGrid); 