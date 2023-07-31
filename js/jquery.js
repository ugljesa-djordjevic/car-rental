
    var btn = $('#scrolled');
    $(window).scroll(function() {
     if ($(window).scrollTop() > 300) {
        btn.addClass('show');
        } else {
        btn.removeClass('show');
        }
    });

    $(document).ready(function(){
        $('#tBtn').click(function(){
          $('#textAbout').slideToggle('slow');
        });
      });

    var $root = $('html, body');

    $('a[href^="#"]').click(function () {
        $root.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);

        return false;
    });

    $('#carPrint').on('mouseenter', '.thumb', function(){
      $(this).animate({
        'padding-left': '-10px',
        'padding-right': '-10px',
      }, 500)
    }).on('mouseleave', '.thumb', function(){
      $(this).animate({
        'padding-left': '10px',
        'padding-right': '10px',
      }, 200)
      
    });