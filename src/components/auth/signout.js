import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as action from '../../actions'


class Signout extends Component {
  componentWillMount(){
    this.props.signoutUser()
  }
  render(){
    return <div>Sorry to see you going... </div>

  }
}

export default connect(null, action)(Signout)
