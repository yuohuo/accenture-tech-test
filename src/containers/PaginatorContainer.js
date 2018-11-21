import { connect } from 'react-redux'
import { changePage } from '../actions'
import Paginator from '../components/Paginator'

export default connect(state => {return {viewer: state.viewer}}, {changePage})(Paginator);