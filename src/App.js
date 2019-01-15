import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props)

        this.superSeriousStuff = "lol";

        this.state = {
            text: "",
            taskList: [
                "Go home",
                "Read docs",
                "Wash my dog"
            ]
        }
    }

    onChangeHandler(event) {
        const newValue = event.target.value
        this.setState({text: newValue});
    }

    onSubmitHander = (event) => {
        event.preventDefault();
        const taskToAdd = this.state.text;
        const oldList = this.state.taskList;

        const updatedList= [ ...oldList, taskToAdd ];

        console.log(updatedList);

        this.setState({taskList: updatedList});
    }

    mapMyTasks() {
        const newMap = this.state.taskList.map(
             (task, idx) => {
                return <li key={idx} className="cool-style">{ task }</li>
            }
        )
        return newMap;
    }

    render() {

        this.newName = this.props.message;

        console.log("I'm rendering this thingy");

        return (
            <div>
                <h1>{ this.state.text.length === 0
                    ? this.props.message
                    : this.state.text
                }</h1>
                <form onSubmit={this.onSubmitHander}>
                    <input id="input-lol"
                           onFocus={ () => { console.log(" ::: focued")} }
                           onChange={ this.onChangeHandler.bind(this) }
                           type="text"/>
                </form>
                <h2>list here: </h2>
                <ul>{ this.mapMyTasks() }</ul>
                <h2>{ this.props.purpose.split('').reverse() }</h2>
            </div>
        );
      }
}

export default App;
