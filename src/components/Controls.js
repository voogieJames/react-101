import React from 'react';
import { connect } from 'react-redux';
import {filterTodos, VISIBILITY_FILTERS} from '../actions';

const Filter = ({ name, active, onClickHandler}) => (
    <button className={`${active ? "active" : ""} control-btn` }
            onClick={onClickHandler} >{name}</button>
)
let activeBool = false;
let cmpltBool = false;
let allBool = true;

const Controls = (props) => {
    return(

        <div className="controls">
            <Filter name="Active Tasks" active={activeBool}
                    onClickHandler={ () => {
                        props.filterTodos(VISIBILITY_FILTERS.SHOW_ACTIVE);
                        activeBool = true;
                        cmpltBool = false;
                        allBool = false;
                    }}/>
            <Filter name="Completed Tasks" active={cmpltBool}
                    onClickHandler={() => {
                        props.filterTodos(VISIBILITY_FILTERS.SHOW_COMPLETED)
                        activeBool = false;
                        cmpltBool = true;
                        allBool = false;
                    } }/>
            <Filter name="All Tasks" active={allBool}
                    onClickHandler={ () => {
                        props.filterTodos(VISIBILITY_FILTERS.SHOW_ALL)
                        activeBool = false;
                        cmpltBool = false;
                        allBool = true;
                    } }/>
        </div>
    )
}

export default connect(
    (state) => ({visibilityFilter: state.visibilityFilter}),
    {filterTodos}
)(Controls);