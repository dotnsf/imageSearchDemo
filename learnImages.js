var http = require( 'http' ),
    fs = require( 'fs' ),
    watson = require( 'watson-developer-cloud' );
var settings = require( './settings' );
var vr3 = watson.visual_recognition({
  api_key: settings.vr_apikey,
  version: 'v3',
  version_date: '2016-05-19'
});

vr3.createCollection( { name: settings.collection_name },
  function( err0, res0 ){
    if( err0 ){
      console.log( err0 );
    }else{
      //console.log( res0 );
      var collection_id = res0.collection_id;
      console.log( collection_id );

      fs.readdir( './public/images', function( err, files ){
        if( err ) throw err;

        files.forEach( function( file ){
          //console.log( file );

          //. metadata
          var metadatajson = "{\"filename\":\"" + file + "\"}";

          //. addImage
          var params = {
            collection_id: collection_id,
            metadata: JSON.parse( metadatajson ),
            image_file: fs.createReadStream( './public/images/' + file )
          };
          vr3.addImage( params, function( err1, res1 ){
          });
        });
      });

      var line = "exports.vr_collection_id = '" + collection_id + "';\n";
      fs.appendFile( './settings.js', line, 'utf8', function( err ){
      });
    }
  }
);



