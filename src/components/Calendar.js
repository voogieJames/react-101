import React from 'react';
import { connect } from 'react-redux';
import { showCalendar, showDate, loadDay } from '../reducers/todoReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropdown from 'react-dropdown';
import MonthView from './MonthView';
import 'react-dropdown/style.css';
import { withRouter } from 'react-router';


const options = [
    { value: '2019-1', label: 'January' },
    { value: '2019-2', label: 'February' },
    { value: '2019-3', label: 'March' },
    { value: '2019-4', label: 'April' },
    { value: '2019-5', label: 'May' },
    { value: '2019-6', label: 'June' },
    { value: '2019-7', label: 'July' },
    { value: '2019-8', label: 'August' },
    { value: '2019-9', label: 'September' },
    { value: '2019-10', label: 'October' },
    { value: '2019-11', label: 'November' },
    { value: '2019-12', label: 'December' },
]
const indents = [];

class Calendar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedOption: null,
            results: {},
            bool: true
        }
    }

    onclickhandler = (index) => {
        const newSelectedOption = this.state.selectedOption;
        const nwDtString = newSelectedOption.value + '-' + index;
        this.props.showDate(nwDtString);
        this.props.showCalendar();
        this.props.history.push('/' + nwDtString);
    }

    onmouseenterhandler = (index, res) => {
        const newSelectedOption = this.state.selectedOption;
        const nwDtString = newSelectedOption.value + '-' + index;
        this.props.loadDay(nwDtString);

    }

    handleChange = (selectedOption,bool) => {
        this.setState({selectedOption});
        this.setState({bool})
        if (indents.length < 30) {
            for (let i = 1; i <= 31; i++) {
                indents.push(
                    <MonthView key={i}
                               index={i}
                               onclickhandler={this.onclickhandler}
                               onmouseenterhandler={this.onmouseenterhandler}
                               resultDisplayer={this.resultDisplayer}
                    />
                )
            }
        }
    }

    resultDisplayer = (results) => {
        this.setState({results})
    }

    render() {
            const {selectedOption, results, bool} = this.state;
            if(this.props.clndar) {
            return (
            <div className={bool? "calendar-prev" : "calendar-after"}>
            <FontAwesomeIcon icon={"times-circle"} className={"timesIcon"} onClick={() => {
                this.props.showCalendar()
            }} />
            <Dropdown className={'DropDown'} value={selectedOption} options={options} onChange={this.handleChange} placeholder="Month" />
            <div className={"gridView"}>
                {indents}
            </div>
            <div className={'amount'}>
            <p id={bool? 'done-prev' : 'done-after'}>Done: {results.done}</p>
            <p id={bool? 'undone-prev' : 'undone-after'}>Undone: {results.undone}</p>
            </div>
            </div>
            )
        }


            else{

            return (
                <div></div>
            )

        }
    }
}
export default connect(
    (state,ownprops) => ({clndar: state.clndar, date: state.date, ...ownprops}),
    { showCalendar , showDate , loadDay }

)(withRouter(Calendar))