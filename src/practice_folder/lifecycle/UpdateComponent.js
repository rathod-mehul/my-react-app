import { Component } from "react";

export default class UpdateComponet extends Component{

    componentWillUnmount(){
        console.log('update componet unounted');
    }

    render(){
        return(
            <div>UpdateComponet: {this.props.count}</div>
        )
    }
}