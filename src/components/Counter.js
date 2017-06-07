import React, {Component, PropTypes} from 'react';
import Value from './Value';
import Control from './Control';

const propTypes = {

};

const defaultProps = {

};

class Counter extends React.Component{

    constructor(props){
        super(props);
    }

    handlePlus(){
        console.log('handlePlus')
    }

    handleMinus(){
        console.log('handleMinus')
    }

    handleSetColor(){
        console.log('handleSetColor')
    }

    render(){
        return(
            <div>
                <Value />
                <Control 
                    onPlus={this.handlePlus}
                    onMinus={this.handleMinus}
                    onSetColor={this.handleSetColor}
                />
            </div>
        );
    }
}

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

export default Counter;