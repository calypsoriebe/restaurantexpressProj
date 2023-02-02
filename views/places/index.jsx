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
            <div className='col-sm-6'>
                <h2>{places.name}</h2>
                <p className='text-center'>
                    {places.cuisine}
                </p>
                <img src={places.picture} alt={places.name}/>
                <p className='text-center'>
                    Located in {places.city}, {places.state}
                </p>
            </div>
        )
    })
    return(
    <Def>
        <main>
            <h1>LEAVE A REVIEW</h1>
            <div className='row'>
                {placesFormatted}
            </div>
        </main>
    </Def>
    )
}

module.exports = index