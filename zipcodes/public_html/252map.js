/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

jQuery( document ).ready( function( $ ){
    var api = google.maps;
    var cords = cords.csv;
    var cordsArray = [];
    var cordsArray = cords.split(',');
    
    //document.write(cordsArray[1]);
    for ( i = 0; i < cordsArray.length; i+2){
        var marker = new api.Marker({
            position: new api.LatLng(cordsArray[i], cordsArray[i+1]),
            map: map
        });
    };
});