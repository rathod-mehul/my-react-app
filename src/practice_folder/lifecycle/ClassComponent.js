import React, { Component } from "react";
import UpdateComponet from "./UpdateComponent";

export default class Classcomonent extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            showComponent: true
        }
        console.log('constructer');
    }

    increaseCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    showComponent = () => {
        this.setState({
            showComponent: !this.state.showComponent
        });
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    render(){
        return(
            <>
            <h3>{this.state.count}</h3>
            <button onClick={this.increaseCount.bind(this)}>increaseCount</button>
            {/* {this.state.showComponent ? <UpdateComponet count={this.state.count}/> : ''} */}
            <button onClick={()=>{ this.increaseCount()}}>increaseCount</button>
            <button onClick={()=>this.showComponent()}>showComponent</button>
            </>
        )
    }
}