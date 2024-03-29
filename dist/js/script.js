const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');
const overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => { 
    menu.classList.remove('active');
});

overlay.addEventListener('click', (e) => {
    if (e.target == overlay) {
        menu.classList.remove('active');
    }
}); 

window.addEventListener("keydown", (e) => {
    if (e.key == 'Escape') {
        menu.classList.remove('active');
    }
});


const counters = document.querySelectorAll('.skills__progress-counter');
const lines = document.querySelectorAll('.skills__progress-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});



// Jquery


$(document).ready(function(){
    
    
// Scroll
    
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1400) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
    
    $("a[href=#up]").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
    
    
    $("a[href=#me]").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
    
    
    $("a[href=#resume]").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
    
    
    $("a[href=#skills]").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
    
    
    $("a[href=#portfolio]").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
    
    
    $("a[href=#price]").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
    
    
    $("a[href=#contacts]").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });


    // Form

    function valideForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                check: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите минимум {0} символа")
                },
                email: {
                    required: "Пожалуйста, введите свой email",
                    email: "Ваш email должен быть в формате name@domain.com"
                },
                check: {
                    required: "Согласие обязательно"
                }
            }
        });
    }

    valideForms('#request');


    // Mailer

    $('#request').submit(function(e) {
        e.preventDefault();
        if (!$(this).valid()) {

            return;
            
            }
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.overlay, #box').fadeIn('slow');
            setTimeout(function(){
                $(".overlay, #box").hide();
                $('form').trigger('reset');
            }, 2000);
        });
        return false;
    });

});





