import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss'
// const Index = () => {
//     return <div>Hello from React file</div>;
// };

class Index extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return <div>Hello from React file</div>
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));