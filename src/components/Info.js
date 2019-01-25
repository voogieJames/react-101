import React from 'react';

const Info = (props) => {

    //  on contact click handler
    const clickHandler = (evt) => {
        evt.preventDefault();
        props.onContactClick(props.id);
    };

    //  rendering contact info here
    return (
        <div className="info" onClick={clickHandler} >
            <img className="avatar" src={props.avatar} alt="Avatar"/>
            <span className="details">
                <div>{props.name}</div>
                <div>{props.phone}</div>
            </span>
        </div>
    )
}

export default Info;