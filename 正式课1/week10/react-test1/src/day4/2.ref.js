import React from 'react';
import ReactDOM from 'react-dom'
class App extends React.Component {
    constructor() {
        super();
        
    }
    render(){
        /* 
        ref只能获取最后一个元素
        第一种写法  直接写成 ref='qqq'
        第二种写法  可以写成  ref={(ele)=>{this.qqq = ele}}
        */
    }
    componentDidMount(){
        console.log(this.refs)
    }
    render() {
        return <div className=''>
            {
                [1,2,3,4].map(item=>{
                return <h2 ref='h2'>{item}</h2>
                })
            }
            <h3 ref =  {(ele)}></h3>
        </div>;
    }
}

ReactDom.render(<App></App>,document.getElementById('root'));
