import React, {Component} from 'react';
import { connect } from 'react-redux';
import {loadTodos, updateInput} from '../actions';
import {saveTodo, emptyInbox, showCalendar, showDate} from "../reducers/todoReducer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router';

class TodoForm extends Component {

    onSubmit = (event) => {
        if (this.props.currentTodo.length === 0){
            event.preventDefault();
            this.props.emptyInbox();
        }
        else {
            event.preventDefault();
            this.props.saveTodo(this.props.currentTodo);
            document.getElementById("inp").value="";
        }
    }

    onclick = (event) => {
        event.preventDefault();
        this.props.showCalendar();
    }

    onclickPrev = (event) => {
        event.preventDefault();
        var dt = this.props.date;
        var len = dt.length;
        if (dt.substring(len-2,len).includes('-')) {
            if (parseInt(dt.substring(len - 1, len)) !== 1) {
                var subDt = parseInt(dt.substring(len - 1, len)) - 1;
                var newDt = dt.substring(0, len-1) + subDt.toString();
                this.props.showDate(newDt);
                this.props.history.push('/'+newDt)
            }
            else {
                var subDt = dt.substr(5);
                if (subDt.length == 4){
                var newSubDt = parseInt(subDt.substr(0,2)) - 1;
                var newDt = '2019-' + newSubDt.toString() + '-31';
                this.props.showDate(newDt);
                this.props.history.push('/'+newDt)
                }
                else {
                    var newSubDt = parseInt(subDt.substr(0,1)) - 1;
                    var newDt = '2019-' + newSubDt.toString() + '-31';
                    this.props.showDate(newDt);
                    this.props.history.push('/'+newDt)
            }
            }
        }
        else if (!(dt.substring(len-2,len).includes('-'))) {
            var subDt = parseInt(dt.substring(len - 2, len)) - 1;
            var newDt = dt.substring(0, len - 2) + subDt.toString();
            this.props.showDate(newDt);
            this.props.history.push('/'+newDt)
        }
    }

    onclickNext = (event) => {
        event.preventDefault();
        var dt = this.props.date;
        var len = dt.length;
        if (dt.substring(len-2,len).includes('-')) {
                var subDt = parseInt(dt.substring(len - 1, len)) + 1;
                var newDt = dt.substring(0, len-1) + subDt.toString();
                this.props.showDate(newDt);
                this.props.history.push('/'+newDt)
            }
        else if (!(dt.substring(len-2,len).includes('-'))) {
            if (parseInt(dt.substring(len - 2, len)) !== 31) {
                var subDt = parseInt(dt.substring(len - 2, len)) + 1;
                var newDt = dt.substring(0, len - 2) + subDt.toString();
                this.props.showDate(newDt);
                this.props.history.push('/'+newDt)
            }
            else {
                var subDt = dt.substr(5);
                if (subDt.length == 4){
                    var newSubDt = parseInt(subDt.substr(0,1)) + 1;
                    var newDt = '2019-' + newSubDt.toString() + '-1';
                    this.props.showDate(newDt);
                    this.props.history.push('/' + newDt)
                }
                else {
                    var newSubDt = parseInt(subDt.substr(0,2)) + 1;
                    var newDt = '2019-' + newSubDt.toString() + '-1';
                    this.props.showDate(newDt);
                    this.props.history.push('/' + newDt)
                }
            }
        }
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <button type="button" onClick={this.onclickPrev} title={'Previous date'}><FontAwesomeIcon icon={"backward"}/></button>
                <button type="button" onClick={this.onclick} title={'Choose date'}><FontAwesomeIcon icon={"calendar-alt"}/></button>
                <button type="button" onClick={this.onclickNext} title={'Next date'}><FontAwesomeIcon icon={"forward"}/></button>
                <input
                    id="inp"
                    placeholder="Add your Todo here..."
                    type="text" 
                    value={this.props.currentTodo} 
                    onChange={ (event) => { this.props.updateInput(event.target.value) } } />
                <button type="submit">Add Task</button>
            </form>
        )
    }
}


export default connect(
    (state, ownprops) => ({currentTodo: state.currentTodo,clndar: state.clndar,date: state.date, ...ownprops}),
    { updateInput, saveTodo, emptyInbox, showCalendar, showDate}
)(withRouter(TodoForm))