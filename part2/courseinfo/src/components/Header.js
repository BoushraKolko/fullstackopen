import React from 'react';

const Header = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.courseName}</h1>
        </div>
    )

}

export default Header