import * as types from '../actions/ActionTypes';

const init = {
  color : [150,150,150]  
};

export default function ui(state = init, action){
    if( action.type === types.SET_COLOR){
        return {
            color : action.color
        };
    }else{
        return state;
    }
};