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
            <a href='/places'>
                    <button type='button' className='btn btn-primary'>Places</button>
                </a>
        </Def> 
    )
}

module.exports = home