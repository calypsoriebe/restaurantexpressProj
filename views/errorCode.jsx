//importing react
const React = require('react')
//importing default view
const Def = require('./default')

function errorCode () {
    return(
        <Def>
            <main>
                <h1>ERROR 404: PAGE NOT FOUND</h1>
                <p>There is no page for what you searched</p>
            </main>
        </Def>
    )
}

//exporting
module.exports = errorCode