function setBg( n ) {
  document.bgColor = n;
}

function myKeys( n ) {
  
switch ( n.keyCode ) {
  case 65: setBg( 'red' );
      break;
  case 83: setBg( 'blue' ); 
      break;
  case 68: setBg( 'yellow' );
      break;
  default: console.log( n );
      break;
}

}