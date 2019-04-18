import React from 'react';

// We use connect from react-redux to "connect" our components to our store
import { connect } from 'react-redux';

// Import our actions
import { incrementCount, decrementCount } from '../actions/index';

const Button = props => (
   <button
      onClick={() => {
         switch (props.type) {
            case 'INC':
               props.incCount();
               break;
            case 'DEC':
               props.decCount();
               break;
            default:
         }
      }}
   >
      {props.children}
   </button>
);

// We choose what actions to add to our props
const mapDispatchToProps = dispatch => ({
   decCount: () => dispatch(decrementCount()),
   incCount: () => dispatch(incrementCount())
});

const ConnectedButton = connect(
   /* If we wanted to map our store to our props in this component, we would put  
   that function here, but we don't need it so we use null */
   null,
   mapDispatchToProps
)(Button);

export default ConnectedButton;
