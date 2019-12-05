import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import CLayout from './containers/Layout';
import BaseRouter from './routes';
import { BrowserRouter as Router } from 'react-router-dom'; 
import * as actions from './store/actions/authorization'

class App extends Component {

  componentDidMount(){
    this.props.onTryAutoSignUp(); 
  }
render () {
  return (
    <div>
      <Router> 
      <CLayout {...this.props}>
        <BaseRouter />  
      </CLayout> 
      </Router> 
    </div>
  );
}
}

const mapStatetoProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
}


export default connect(mapStatetoProps, mapDispatchtoProps)(App);
