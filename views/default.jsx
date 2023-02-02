//default views rake repetitive html that every page on your app will have so then you can write content of page without creating the html skeleton evertime
//importing react
const React = require('react')

function Def (html) {
    return <html>
        <head>
            <title>Title</title>
            <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css'/>
            <link rel='stylesheet' href='/css/style.css'/>
              </head>
        <body>
            {html.children}
        </body>
    </html>
}

module.exports = Def