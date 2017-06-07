import * as types from '../actions/ActionTypes';

const init = {
    number : 5
};

function counter(state = init, action){
    switch (action.type) {
        case types.INCREMENT:
            
            return {
                ...state, number : state.number + 1
            };
    
        case types.DECREMENT:
            return {
                ...state, number : state.number -1
            };
        default:
            return state;
    }
}

export default counter;