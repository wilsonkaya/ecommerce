import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/index'
import _ from "lodash"

class Order extends Component{
  componentWillMount(){
    this.props.getTotalPrice(0)
  }
  getPrice(){
  return  _.map(this.props.price, item =>{
      return (
        <div>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>

      )
    })
  }
  render(){
    return(
      <div>
        <h2>Order</h2>
        {this.getPrice()}
        {this.props.totalPrice}
        <button>Checkout</button>
      </div>
    )
  }
}
function totalPrice (state){
  const result = _.sum(state, item =>{
    return item.price
  })
return result
}

function mapStateToProps(state){
  return {
    price: state.price,
    totalPrice: totalPrice(state.price)
  }
}

export default connect(mapStateToProps, actions) (Order)
