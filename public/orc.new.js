function playS ( kc ) {
    const audio = document.querySelector( 'audio[data-key="' + kc + '"]' );
    const divkey = document.querySelector( 'div[data-key="' + kc + '"]' );
    if (!audio) { return; }
    if (!divkey) { return; }
    audio.currentTime = 0;
    audio.play();
    divkey.className= 'active';
}

function clearS( kc ) {
    const divkey = document.querySelector( 'div[data-key="' + kc + '"]');
    if (!divkey) { return; }
    divkey.className = '';
}

function myKeysDown( n ){
    playS( n.keyCode );
}

function myKeysUp( n ){
    clearS( n.keyCode );
}
      
