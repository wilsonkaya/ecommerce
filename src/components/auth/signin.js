
import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import * as actions from '../../actions'
import { connect } from 'react-redux';

class Signin extends Component {

handleFormSubmit({email, password }) {
  this.props.signinUser({email, password})
}

renderAlert(){
  if(this.props.errorMessage){
    return(
      <div className="alert alert-danger">
        <strong>Oppss!!</strong>{this.props.errorMessage}
      </div>
    )
  }
}

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label htmlFor="email">Email</label>
          <Field className="form-control" name="email" component="input"/>
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="password">Password</label>
          <Field className="form-control" name="password" component="input" type="password"/>
        </fieldset>
        {this.renderAlert()}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

function mapStateToProps(state){
  return { errorMessage: state.auth.error}
}

const reduxFormSignin = reduxForm({
  form: 'signin'
})(Signin);
export default connect(mapStateToProps, actions)(reduxFormSignin);
