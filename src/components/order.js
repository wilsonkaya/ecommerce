import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/index'
import _ from "lodash"

class Order extends Component{
  componentWillMount(){
    this.props.getTotalPrice(0)

  }
  componentDidMount(){
    this.props.getMovies()
  }
  sendDataToSaveBooks(){
    _.map(this.props.price, item => {
      let list = {
        title:item.title,
        date: item.release_date
      }
      this.props.saveMovies(list)
    })
  }
  getPrice(){
  return  _.map(this.props.price, item =>{
      return (
        <div>
          <p>{item.title}</p>
          <p>{item.release_date}</p>
          <button type="button" className="btn btn-danger">delete</button>
        </div>

      )
    })
  }

  showMyMovies(){
      return _.map(this.props.movies, items =>{
        return items.map(item =>{
         return(
           <div>
            <p>{item.title}</p>
            <p>{item.date}</p>
            <button className="btn btn-danger">Delete</button>
           </div>
         )
       })
      })
  }

  render(){
    return(
      <div>
        <h2>Order</h2>
        {this.getPrice()}
        {this.props.totalPrice}
        <button className="btn btn-info" onClick={() => this.sendDataToSaveBooks()}>Add to list</button>
        {this.showMyMovies()}
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
    totalPrice: totalPrice(state.price),
    movies: state.movies
  }
}

export default connect(mapStateToProps, actions) (Order)
