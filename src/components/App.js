import React from 'react';
import Counter from './Counter.js';

const propTypes = {

};

const defaultProps = {

};

class App extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div>Counter App</div>
                <Counter />
            </div>
        );
    }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;