import { connect } from 'react-redux'
import Paginator from '../components/Paginator'
import { changePage } from '../actions'

export const mapStateToProps = (state) => {
    return {viewer: state.viewer};
}

export const mapDispatchToProps = (dispatch) => ({
    changePage: (page) => dispatch(changePage(page))
  })

export default connect(mapStateToProps, mapDispatchToProps)(Paginator);