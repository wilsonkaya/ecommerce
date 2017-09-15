import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/index'
import _ from "lodash"

class Main extends Component{
  componentWillMount(){
    this.props.fetchAllProducts()
  }

  deneme(){
    return _.map(this.props.product, product =>{
       return <div key={product.id}>{product.text}</div>
    })
  }

  render(){
    return(
      <div>
        {this.deneme()}
      </div>
    )
  }
}

function mapStateToProps(state){
  console.log("this is the component", state.product.product)
  return {product: state.product.product}
}
export default connect(mapStateToProps, actions) (Main)
