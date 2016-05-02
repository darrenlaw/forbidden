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
        $('.nextpage').hide();

        //start button
        $('#startbtn').click(function () {
            $('section#intro').fadeOut(1500, function () {
                $('section#page1').fadeIn(500, function () {
                    $('#p1panel1').fadeIn(1500, function () {
                        $('#p1dialogue1').fadeIn(500);
                    });
                });
            });
        });

        //next panel button
        $('.panel').one('click',function () {
            $(this).next().fadeIn(900);
            $(this).css('cursor', 'default');
        });

        //PAGE 1 FUNCTIONS
        $('#p1panel1').one ('click', function () {
            $('#p1dialogue2').delay(900).fadeIn(900);
        });
        $('#p1panel2').one('click', function () {
            $('#p1dialogue1,#p1dialogue2').fadeOut(300);
            $('#p1panel1,#p1panel2').animate({
                opacity: 0.3
            }, 300, function () {
                $('#p1panel3').fadeIn(900, function () {
                    $('#p1panel4').fadeIn(900, function () {
                        $('#p1panel5').fadeIn(900);
                        $('#p1next').delay(700).fadeIn(500);
                    });
                });
            });
        });
        
        //CLOSE PAGE 1, SHOW PAGE 2
        $('#p1next').one('click', function () {
            $('#page1').fadeOut(900);
            $('#page2').delay(1100).fadeIn(900, function () {
                $('#p2panel1').fadeIn(900);
            });
        });

        //PAGE 2 FUNCTIONS
        $('#p2panel2').one('click', function () {
            $('#p2panel1,#p2panel2').animate({
                opacity: 0.3
            }, 300, function () {
                $('#p2panel3').fadeIn(400, function () {
                    $('#p2panel4').fadeIn(400, function () {
                        $('#p2panel5').fadeIn(400);
                    });
                });
            });
        });
        
    }); //end window ready
}); //end document ready