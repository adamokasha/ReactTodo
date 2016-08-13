import React from 'react';
import * as Redux from 'react-redux'; 

import * as actions from 'actions';

export var Login = React.createClass({
  // ES6 syntax
  onLogin() {
    var {dispatch} = this.props;
    
    dispatch(actions.startLogin());
  },
  render() {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        
        <div className="row">
          <div className="column small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>
                Login with GitHub about below.
              </p>
              <button className="button" onClick={this.onLogin}>Login with Github</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default Redux.connect()(Login);
