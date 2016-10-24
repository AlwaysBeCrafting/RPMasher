let express = require( 'express' );
let http    = require( 'http'    );
let morgan  = require( 'morgan'  );
let path    = require( 'path'    );

// let bodyParser = require( 'body-parser' );
// app.use( bodyParser.json() );


let app = express();
let server = http.Server( app );


app.use( morgan( 'dev' ));


app.use( '/', express.static(
	path.join( __dirname, 'public' ),
	{ extensions: [ 'html' ] }
));

app.get( '/', (request,response) => {
	response.sendFile( path.join( __dirname, '/public/editor.html' ));
});


/*

app.route( 'path' )
.get( getHandler )
.post( postHandler )
.delete( etc... )

*/


let port = process.env.PORT || 8080;

console.log( `Starting server on port ${port}...` );
server.listen( port );