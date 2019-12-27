import React from 'react';
import ReactDOM from 'react-dom'

class Button extends React.Component{
    render() {
     <div>
         <button>按钮+</button>
         <button>按钮-</button>
     </div>   
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            num:0
        }
    }
    render() {
        return <div className=''>
             <h1>{num}</h1>
            <Button></Button>
        </div>;
    }
}

export default App
