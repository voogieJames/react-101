import React from 'react';
import Moment from 'moment';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Message from './components/Message';
import Controls from './components/Controls';
import Calendar from './components/Calendar';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash, faForward, faBackward, faCalendarAlt, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {connect} from "react-redux";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";


library.add(faTrash, faForward, faBackward, faCalendarAlt, faTimesCircle);

class App extends React.Component {


    render() {
        return (
            <Router>
                <div>
                    <div className={`${this.props.clndar ? "blur" : ""} todo-app`}>
                        <h1>TODO LIST:</h1>
                        <br/>
                        <h2 className={'timerHeader'}>{'Today is'}</h2>
                        <h4 className={'timer'}>{Moment().format('dddd')}</h4>
                        <p className={'timer'} id='dateformat'>{setInterval(() => {
                        document.getElementById('dateformat').innerHTML = Moment().format('MMMM Do YYYY, h:mm:ss');
                    }, 1000)}</p>
                        <br/>
                        <Message/>
                        <TodoForm/>
                        <Controls/>
                        <Route exact path={"/"} component={() => <Redirect to={'/'+this.props.date}/>} />
                        <Route path={"/:desiredDate"} component={TodoList} />
                    </div>
                        <Calendar/>
                </div>
            </Router>
                )
    }
}

export default connect(
    (state) => ({clndar: state.clndar,date: state.date}),
)(App)