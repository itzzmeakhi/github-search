import React from 'react';

import './user.styles.css';

const User = (props) => {
    return(
        <div className = "user">
            <img src = {props.user.avatar_url} alt = "User Image" className = "img-fluid"/>
            <h4> Name : {props.user.name} </h4>
            <p><b> Username : {props.user.login} </b></p>
            <p><b> Bio : {props.user.bio} </b></p>
            <p><b> Followers : {props.user.followers} </b></p>
            <p><b> Following : {props.user.following} </b></p>
        </div>
    )
}

export default User;