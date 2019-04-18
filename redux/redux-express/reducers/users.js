const userReducer = (state={}, action)=>{
    switch (action.type){
      case "CHANGE_USER":{
        state = {...state, name: action.name, location: action.location}
        break;
      }
      case "CHANGE_NAME":{
        state = {...state, name: action.name};
        break;
      }
      case "CHANGE_LOCATION":{
        state = {...state, location: action.location};
        break;
      }

    }
    return state;
  }

  module.exports = userReducer;