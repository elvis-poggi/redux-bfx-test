import { connect } from 'react-redux'
import Candles from '../components/Candles'

function mapStateToProps (state, ownProps) {
  return {
    data: state.candles[ ownProps.pair ]
  }
}

const CandleContainer = connect(
  mapStateToProps
)(Candles)

export default CandleContainer
