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
          <img id="item-img" src={`https://image.tmdb.org/t/p/w500${product.poster_path}`} alt="Card image cap"/>

          <div className="card-body">
              <h4 className="card-title">{product.title}</h4>
              <p>{product.vote_average}</p>
              <p>{product.overview}</p>
              <p>{product.release_date}</p>
              <button onClick={() => this.addPriceOnClick(product)}>Add to cart</button>
          </div>
        </div>
       )
    })
  }

  render(){
    return(
      <div id="main-body">
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
