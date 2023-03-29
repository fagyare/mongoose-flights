import React from "react";

function DefaultLayout(props) {

    return (
        <html>
            <head>
                <link rel="stylesheet" href="/css/style.css" />
            </head>
            <body>
                <nav>
                    <a href="/flight/new">ADD FLIGHT </a> 
                    <a href="/flight">ALL FLIGHTS</a>
                </nav>
                <div>
                    {/* <h1>DEFAULT LAYOUT</h1> */}
                    <div>{props.children}</div>
                </div>
            </body>
        </html>
    )
}

export default DefaultLayout