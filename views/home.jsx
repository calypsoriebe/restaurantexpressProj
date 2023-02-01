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
                <img src='/images/restaurantProjCover.jpg' height='400' alt='restaurant picture'/>
               <div>
                 Photo by <a href="https://unsplash.com/@ninjason?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jason Leung</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
               </div>
               <a href='/places'>
                    <button type='button' className='btn btn-primary'>Places</button>
                </a>
            </main>
        </Def> 
    )
}

module.exports = home