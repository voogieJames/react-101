import React from 'react';
import { connect } from 'react-redux';
import {loadDay, showCalendar, showDate} from "../reducers/todoReducer";


class MonthView extends React.Component {


    countTasks = () => {
        const result = {
            done: 0,
            undone: 0
        }
        if (this.props.todosDay.length > 0) {
            this.props.todosDay.map((item) => {

               if( item.completed === true ){result.done = result.done + 1}
               else{result.undone = result.undone + 1}
            })
        }
        this.props.resultDisplayer(result)
    }

    render() {
        const results = this.countTasks()
        return(
            <div className='monthView'
                 onClick={() => this.props.onclickhandler(this.props.index)}
                 onMouseEnter={() => {
                    const changedDisp = this.props.onmouseenterhandler(this.props.index);
                 }}>
                {this.props.index}
            </div>
        )
    }
}

export default connect(
    (state, ownprops) => (
        {
            todosDay: state.todosDay,
            ...ownprops
        }
    )
)(MonthView);