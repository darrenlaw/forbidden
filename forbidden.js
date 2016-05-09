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
        $('#title').hide();

        //start button
        $('#startbtn').click(function () {
            alert('Click on the newest panel to reveal the next.');
            $('section#intro').fadeOut(1500, function () {
                $('section#titlepage').fadeIn(500, function () {
                    $('h1#introsentence').delay(6000).fadeOut(900, function () {
                        $('#title').fadeIn(1000, function () {
                            $('section#titlepage').delay(6000).fadeOut(1500, function () {
                               $('section#page1').fadeIn(900, function () {
                                   $('#p1panel1').fadeIn(900);
                               }); 
                            });
                        });
                    });
                });
            });
        });


        //next panel button
        $('.panel').one('click', function () {
            $(this).next().fadeIn(900);
            $(this).css('cursor', 'default');
        });


        //PAGE 1 FUNCTIONS
        $('#p1panel1').one('click', function () {
            $("#p1panel2")[0].play();
        });

        $('#p1panel2').one('click', function () {
            $('#p1dialogue1,#p1dialogue2').fadeOut(300);
            $('#p1panel1,#p1panel2').animate({
                opacity: 0.3
            }, 300, function () {
                $('#p1panel3').fadeIn(900, function () {
                    $('#p1panel4').fadeIn(900, function () {
                        $('#p1panel5').fadeIn(900);
                    });
                });
            });
        });
        
        $('#p1panel5').one('click', function () {
            $("#p1panel6")[0].play();
            $('#p1next').delay(5000).fadeIn(500);
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
                    $("#p2panel3")[0].play();
                    $('#p2next').delay(4000).fadeIn(900);
                });
            });
        });

        //CLOSE PAGE 2, SHOW PAGE 3
        $('#p2next').one('click', function () {
            $('#page2').fadeOut(900);
            $('#page3').delay(1100).fadeIn(900, function () {
                $('#p3panel1').fadeIn(900);
                
            });
        });

    }); //end window ready
}); //end document ready