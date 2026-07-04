import React from "react";
function Content(props) {
    return (
        <div id="jokediv">
            {props.data && props.data.type === 'single' && (
                <div>
                    <p>{props.data.joke}</p>
                </div>
            )}
            {props.data && props.data.type === 'twopart' && (
                <div>
                    <p>Setup: {props.data.setup}</p>
                    <p>Delivery: {props.data.delivery}</p>
                </div>
            )}
        </div>
    )
}

export default Content;