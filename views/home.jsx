//importing react
const React = require('react')
// importing DEF function (basic view layout)
const Def = require('./default')

function home () {
    return (
        // the Def tag is the imported func from ./default
        <Def>
            <main>
                <h1>HOME</h1>
            </main>
        </Def>
    )
}

module.exports = home