import React from 'react';

function ButtonLink (props){
    console.log(props);
    return(
        <a href={props.href} className={props.className} >
         {props.childrem}

        </a>

    );
}

export default ButtonLink;