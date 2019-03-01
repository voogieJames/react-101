import { getTodos, createTodo, updateTodo, removeToDo } from '../services'
import { 
    INPUT_UPDATED, MESSAGE_SHOW, TODOS_LOAD, TODO_ADD, TODO_REPLACE, SET_VISIBILITY_FILTER, VISIBILITY_FILTERS, TODO_REMOVE, CALENDAR_SHOW, DATE_SHOW, TODOSDAY_LOAD,

    loadTodos, addTodo, replaceTodo, showMessage, remove, showcln, showdt, loadTodosDay
} from '../actions';
import Moment from 'moment';

//  app initial state

let OriginalTime = Moment().format().substr(0,10);
let Year = OriginalTime.substr(0,5)
let Month = OriginalTime.substr(5,2)
let Day = OriginalTime.substr(8,2)
if (OriginalTime.substr(5,1) === "0"){
     Month = OriginalTime.substr(6,1)
    if ( OriginalTime.substr(8,1) === "0" ){
         Day =  OriginalTime.substr(9,1)}
}

let TodayDate = Year + Month + "-" + Day;

const initState = {
    currentTodo: '',
    todos: [],
    todosDay: [],
    message: 'Initiated',
    visibilityFilter: VISIBILITY_FILTERS.SHOW_ALL,
    clndar: false,
    date: TodayDate
}

export const loadDay = (searchDate) => {
    return (dispatch) => {
        getTodos(searchDate)
            .then(dates => dispatch(loadTodosDay(dates)))
    }
}

export const showCalendar = () => {
    return (dispatch, getState) => {
        const cln = getState().clndar;
         dispatch(showcln(cln))
    };
}

export const showDate = (newDate) => {
    return (dispatch,getState) => {
        dispatch(showMessage('ToDo date is ' + newDate));
        dispatch(showdt(newDate))
        const dates = getState().date;
        getTodos(dates)
            .then(dates => dispatch(loadTodos(dates)))
    };
}

//
export const removeTodo = (id) => {
        return (dispatch, getState) => {
            dispatch(showMessage('Item is removed ...'));
            const dates = getState().date;
            const todos = getState().todos;
            const todo = todos.find(t => t.id === id);
            removeToDo(todo,dates)
             .then(res => {
                if(res.status  == 200){
               dispatch(remove(id))
                }
             })
        };
}

export const emptyInbox = () => {

    return (dispatch) => {
        dispatch(showMessage('The input box is empty ...'))
    }
}


export const fetchTodos = () => {
    return (dispatch,getState) => {
        dispatch(showMessage('Loading Todos ... '))
        const dates = getState().date;
        getTodos(dates)
           .then(dates => dispatch(loadTodos(dates)))
    }
} 

export const saveTodo = (taskName) => {
    return (dispatch,getState) => {
        dispatch(showMessage('Saving Todo ... '))
        const newTodo = {
            task: taskName,
            completed: false
        }
        const dates = getState().date;
        createTodo(newTodo,dates)
            .then(res => dispatch(addTodo(res)))
    }
}

export const toggleTodo = (id) => {
    return (dispatch, getState) => {
        dispatch(showMessage('Updating Todo ...'));
        const todos = getState().todos;
        const todo = todos.find(t => t.id === id);
        const toggled = { ...todo, completed: !todo.completed }
        const dates = getState().date;
        updateTodo(toggled,dates)
            .then(res => dispatch(replaceTodo(res)))
    };
}

//  reducer function
export default (state = initState, action) => {

    switch (action.type) {
        case INPUT_UPDATED:
            return {...state, currentTodo: action.payload}
        case MESSAGE_SHOW:
            return {...state, message: action.payload}
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {visibilityFilter: action.payload} )
        case TODO_ADD:
            return {...state, todos: state.todos.concat(action.payload)}
        case TODO_REMOVE:
            return {...state, todos: state.todos.filter(todo => {
                    return todo.id !== action.payload
                })}
        case TODOSDAY_LOAD:
            return {...state, todosDay: action.payload}

        case TODOS_LOAD:
            return {...state, todos: action.payload}
        case TODO_REPLACE:
            return { ...state, todos: state.todos
                .map(todo => todo.id === action.payload.id ? action.payload : todo) }
        case CALENDAR_SHOW:
            return {...state, clndar: !action.payload}
        case DATE_SHOW:
            return {...state, date: action.payload}
        default:
            return state
    }
}