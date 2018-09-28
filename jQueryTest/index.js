$(document).ready(function()  {
    function resetElement(elementName, classes) {
        setTimeout(function(){ $(elementName).removeClass(classes); }, 3000);
    }

    $("#hoHoYa").on('click', function() {
        $("#hoHoYa").removeClass('animated slideInLeft');
        $("#hoHoYa").addClass('animated shake');
        resetElement("#hoHoYa", 'animated shake');
    })

    $("#header-main").on('click', function() {
        $("#header-main").removeClass('animated zoomIn');
        $("#header-main").addClass('animated rubberBand');
        resetElement("#header-main", 'animated rubberBand')
    })

    

})