function playS ( id ) {
  const audio = document.getElementById( id );
  const divkey = document.getElementById( k+id );
  audio.currentTime = 0;
  audio.play();
}

function myKeysDown( n ){
    switch ( n.keyCode) {
        case 65: playS('01'); break;
        case 83: playS('02');break;
        case 68: playS('03');break;
        case 70: playS('04');break;
        default: console.log( n ); break;   
    }
}

function myKeysUp( n ){
    switch ( n.keyCode ) {
        case 65: playS('01'); break;
        case 83: playS('02');break;
        case 68: playS('03');break;
        case 70: playS('04');break;
        default: console.log( n ); break;
      }  
}

//
function myKeys( n ) {
  
switch ( n.keyCode ) {
  case 65: playS('01'); break;
  case 83: playS('02');break;
  case 68: playS('03');break;
  case 70: playS('04');break;
  default: console.log( n ); break;
}

}