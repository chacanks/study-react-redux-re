import React, {Component, PropTypes} from 'react';

const propTypes = {
    onPlus : PropTypes.func
    , onMinus : PropTypes.func
    , onSetColor : PropTypes.func
};

const defaultProps = {

};

class Control extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onMinus}>-</button>
                <button onClick={this.props.onSetColor}>Change Color</button>
            </div>
        );
    }
}

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;

export default Control;