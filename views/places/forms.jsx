//importing react and default view
const React = require('react')
const Def = require('../default')

//function for from 
function newForm (){
    return(
        <Def>
            <main>
                <h1>ADD A NEW PLACE</h1>
            </main>
        </Def>
    )
}

//exporting function
module.exports = newForm