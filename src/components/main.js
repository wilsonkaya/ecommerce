import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/index'

class Main extends Component{
  componentWillMount(){
    this.props.fetchAllProducts()
    console.log(this.props.product)
  }

  render(){
    return(
      <div>State works</div>
    )
  }
}

function mapStateToProps(state){
  return {product: state.product}
}
export default connect(mapStateToProps, actions) (Main)
