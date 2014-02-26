THREE.WebGLShader = ( function () {

	var addLineNumbers = function ( string ) {

		var lines = string.split( '\n' );

		for ( var i = 0; i < lines.length; i ++ ) {

			lines[ i ] = ( i + 1 ) + ': ' + lines[ i ];

		}

		return lines.join( '\n' );

	};

	return function ( gl, type, string ) {

		var shader = gl.createShader( type ); 

		gl.shaderSource( shader, string );
		gl.compileShader( shader );

		// if ( gl.getShaderParameter( shader, gl.COMPILE_STATUS ) === false ) {}

		if ( gl.getShaderInfoLog( shader ) !== '' ) {

			console.error( 'THREE.WebGLShader:', 'gl.getShaderInfoLog()', gl.getShaderInfoLog( shader ) );
			console.error( addLineNumbers( string ) );

		}

		return shader;

	};

} )();