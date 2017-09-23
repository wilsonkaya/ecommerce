import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/index'
import _ from "lodash"
import Order from './order'

class Main extends Component{
  componentWillMount(){
    this.props.fetchAllProducts()
  }

  addPriceOnClick(product){
    this.props.addPrice(product)
    // console.log(product)
  }

  deneme(){
    let product
    return _.map(this.props.product, product =>{
      product = product
       return(
        <div className="card" id="product-card" key={product.id}>
          <img className="img-fluid" id="item-img" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" alt="Card image cap"/>

          <div className="card-body">
              <h4 className="card-title">{product.name}</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <p>{product.text}</p>
              <p>{product.price}</p>
              <button onClick={() => this.addPriceOnClick(product)}>Add to cart</button>
          </div>
        </div>
       )
    })
  }

  render(){
    return(
      <div>
        {this.deneme()}
        <Order/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {product: state.product.product}
}
export default connect(mapStateToProps, actions) (Main)
