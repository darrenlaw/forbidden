//Javascript

//call to jQuery ready function
//make sure html and css are loaded

$(document).ready(function () {
    console.log("ready");


    $(window).ready(function () {

        //hide stuff
        $('.pages').hide();
        $('.panel').hide();
        $('.nardialogue').hide();

        //start button
        $('#startbtn').click(function () {
            $('section#intro').fadeOut(1500, function () {
                $('section#page1').fadeIn(500,function () {
                    $('#p1panel1').fadeIn(1500, function () {
                        $('#p1dialogue1').delay(500).fadeIn(500);
                    });
                });
            });
        });
        
        //next panel button
        $('.panel').click(function () {
            $(this).next().fadeIn(900); 
            $(this).css('cursor','default');
        });
        
        
    }); //end window ready
}); //end document ready