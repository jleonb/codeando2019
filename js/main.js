$(window).on('scroll', function(){
        var alturavideo = (document.getElementById('video').clientHeight)/2,
        alturamision = (document.getElementById('mision').clientHeight + alturavideo*2),
        alturacursos = document.getElementById('cursos').clientHeight + alturamision;
        // flecha
        if($(window).scrollTop() < 100) {
            $('#flecha-arriba').css('opacity', '0');
            // $('#navegacion').css('background', 'rgba(35, 35, 35, 0)');
            // $('#navegacion').css('height', '70px');
        } else {
            $('#flecha-arriba').css('opacity', '1');
            // $('#navegacion').css('background', 'rgba(35, 35, 35, 0.9)');
            // $('#navegacion').css('height', '100px');
        }
        // menu mision
        if(($(window).scrollTop() > alturavideo) && ($(window).scrollTop() < alturavideo*2)) {
            // $('#menu-mision a').css('right', '0');
            $('#menu-mision a').css('color', 'white');
        }
        else {
            $('#menu-mision a').css('color', '#232323');
        }
        // redes sociales
        if(($(window).scrollTop() > alturavideo)) {
            // $('#menu-mision a').css('right', '0');
            $('#redes-sociales a').removeClass('color-naranjo');
            $('#redes-sociales a').addClass('color-azul');
        }
        else {
            $('#redes-sociales a').addClass('color-naranjo');
            $('#redes-sociales a').removeClass('color-azul');
        }
        // menu cursos
        if(($(window).scrollTop() > alturavideo*2) && ($(window).scrollTop() < alturacursos)) {
            $('#menu-cursos a').css('color', 'white');
        }
        else {
            $('#menu-cursos a').css('color', '#232323');
        }
        // menu contacto
        if(($(window).scrollTop() > alturacursos)) {
            $('#menu-contacto a').css('color', 'white');
        }
        else {
            $('#menu-contacto a').css('color', '#232323');
        }
    })

    // menu
    $("#navegacion a").on('mouseover', function() {
        $(this).css('right', '0');
    })
    $("#navegacion a").on('mouseout', function() {
        $(this).css('right', '-145px');
    })

    window.onload = function() {
        if (window.matchMedia("(min-width: 767px)").matches) {
            var videoContenido = document.getElementById('video'),
                myVideo = document.getElementById('myVideo'),
                filtroVideo = document.getElementById('video-filtro'),
                alturaVideo = myVideo.clientHeight + "px";

            videoContenido.style.height = alturaVideo;
            filtroVideo.style.height = alturaVideo;
        }

            window.addEventListener("resize", function() {
                
                if (window.matchMedia("(min-width: 767px)").matches) {
                    var videoContenido = document.getElementById('video'),
                    myVideo = document.getElementById('myVideo'),
                    filtroVideo = document.getElementById('video-filtro'),
                    alturaVideo = myVideo.clientHeight + "px";

                    videoContenido.style.height = alturaVideo;
                    filtroVideo.style.height = alturaVideo; 
                } else {
                    var videoContenido = document.getElementById('video'),
                        filtroVideo = document.getElementById('video-filtro');
                    videoContenido.style.height = window.screen.height + "px";
                    filtroVideo.style.height = window.innerHeight + "px";
                }
            });
}
        
    