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
       return(
        <div class="card" key={product.id}>
          <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" alt="Card image cap"/>

          <div class="card-body">
              <h4 class="card-title">{product.text}</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button>Add to cart</button>
          </div>
        </div>
       )


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
