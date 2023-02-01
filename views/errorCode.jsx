//importing react
const React = require('react')
//importing default view
const Def = require('./default')

function errorCode () {
    return(
        <Def>
            <main>
                <h1>ERROR 404: PAGE NOT FOUND</h1>
                <img src='/images/404lilbro.jpg'/>
                <div>
                    Photo by <a href="https://unsplash.com/@bjornftw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Björn Antonissen</a> on <a href="https://unsplash.com/s/photos/hamster?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
                <p>Uh Oh! Lil bro ate the page</p>
            </main>
        </Def>
    )
}

//exporting
module.exports = errorCode