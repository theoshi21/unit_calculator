var distanceConvert = function( feet, meters, direction ) {
	
	if ( direction === 'right' ) {
		return feet / 3.2808;
	} else {
		return meters * 3.2808;
	}
	
};

$( '.js-button' ).on( 'click', function( e ) {
	
	var feetField = $( '#feet' );
	var meterField = $( '#meters' );
	var feetSrc = feetField.val();
	var meterSrc = meterField.val();
	var direction = $( this ).attr( 'data-convert-direction' );
	
	if ( direction === 'right' ) {
		meterField.val( distanceConvert( feetSrc, meterSrc, direction ) );
	} else {
		feetField.val( distanceConvert( feetSrc, meterSrc, direction ) );
	}
	
	e.preventDefault;
	
} );