var options = {
    strings: ["Aprende a crear páginas web", "", "Desarrolla apps con Ruby on Rails"],
    typeSpeed: 100,
    startDelay: 1000,
    backSpeed: 50,
    backDelay: 500,
    loop: true,
    loopCount: Infinity
}

var typed = new Typed("#tipeado", options);


var alturavideo = document.getElementById('video').scrollHeight;
// document.getElementById('mision').style.marginTop = alturavideo + 'px';

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000, 'swing');
    }
});