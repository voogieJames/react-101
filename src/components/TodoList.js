import React, { Component } from 'react';
import { fetchTodos, toggleTodo, removeTodo } from '../reducers/todoReducer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { VISIBILITY_FILTERS } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TodoItem = (props) => (
    <li onClick={() => props.toggleTodo(props.id)} >
        <p className={props.completed ? "task completed" : "task"}>{props.task}</p>
        <FontAwesomeIcon className={'icon'}
            icon="trash" onClick={() => props.removeTodo(props.id)}
        />
    </li>
);

class TodoList extends Component {
    componentDidMount() {
        this.props.fetchTodos();
    }

    filterTasks = (tasks, filterOption) => {
        const filtered = this.props.todos.filter(task => {
            if (filterOption === VISIBILITY_FILTERS.SHOW_ALL) {
                return task;
            }
            if (filterOption === VISIBILITY_FILTERS.SHOW_ACTIVE 
                && task.completed === false) {
                return task;
            }
            if (filterOption === VISIBILITY_FILTERS.SHOW_COMPLETED 
                && task.completed === true) {
                return task;
            }
            return null;
        });
            
        return filtered;
    }

    listTasks = (filteredTodos) => {
        const taskList = filteredTodos.map(todo => 
            <TodoItem
                key={ todo.id } 
                toggleTodo={ this.props.toggleTodo }
                removeTodo={this.props.removeTodo}
                { ...todo } />
        );
        return (taskList)
    }

    render() {
        const { todos, visibilityFilter } = this.props;
        const filteredTodos = this.filterTasks(todos, visibilityFilter);
        return (
            <div className="todo-list">
                <ul>
                    { this.listTasks(filteredTodos) }
                </ul>
            </div>
        )
    } 
}

//  prop types
TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
        visibilityFilter: state.visibilityFilter,
    }
}

export default connect(
    mapStateToProps,
    { fetchTodos, toggleTodo, removeTodo }
)(TodoList)