//USED FOR INDEX PAGE FOR PLACES
//import react
const React = require('react')
//import default view
//IMPORTANT HAD TO USE .. INSTEAD OF . TO GET INTO DIFFERENT DIRECTORY
const Def = require('../default')

function index (data) {
    //going to format data into html by calling obj
    let placesFormatted = data.places.map((places) => {
        return(
            <div>
                <h2>{places.name}</h2>
                <img src={places.picture} alt={places.name} />
            </div>
        )
    })
    return(
    <Def>
        <main>
            <h1>PLACES INDEX PAGE</h1>
            {placesFormatted}
        </main>
    </Def>
    )
}

module.exports = index