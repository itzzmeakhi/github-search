import React from 'react';
import './user-search.styles.css';

const UserSearch = (props) => {
    return(
        <div className = "search-box">
            <div className = "form-group row">
                <label htmlFor = "userName" className = "col-md-1 col-form-label">
                    <i className="fa fa-github"></i>
                </label>
                <div className = "col-md-11">
                    <input
                        type = "text"
                        className = "form-control"
                        id = "userName"
                        name = "userName"
                        placeholder = "Start typing the username..!!" 
                        onKeyUp = {props.changed}
                        autoComplete = "off"/>
                </div>
            </div>
        </div>
    );
}

export default UserSearch;