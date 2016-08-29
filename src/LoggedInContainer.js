import { connect } from 'react-redux'
import Container from './Container'

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.loggedInUser.id,
    role: state.loggedInUser.role,
    error: state.loggedInUser.error
  }
};

const LoggedInContainer = connect(
  mapStateToProps
)(Container);

export default LoggedInContainer