$(window).on("scroll",function(){var o=document.getElementById("video").clientHeight/2,e=document.getElementById("mision").clientHeight+2*o,s=document.getElementById("cursos").clientHeight+e;$(window).scrollTop()<100?$("#flecha-arriba").css("opacity","0"):$("#flecha-arriba").css("opacity","1"),$(window).scrollTop()>o&&$(window).scrollTop()<2*o?$("#menu-mision a").css("color","white"):$("#menu-mision a").css("color","#232323"),$(window).scrollTop()>o?($("#redes-sociales a").removeClass("color-naranjo"),$("#redes-sociales a").addClass("color-azul")):($("#redes-sociales a").addClass("color-naranjo"),$("#redes-sociales a").removeClass("color-azul")),$(window).scrollTop()>2*o&&$(window).scrollTop()<s?$("#menu-cursos a").css("color","white"):$("#menu-cursos a").css("color","#232323"),$(window).scrollTop()>s?$("#menu-contacto a").css("color","white"):$("#menu-contacto a").css("color","#232323")}),$("#navegacion a").on("mouseover",function(){$(this).css("right","0")}),$("#navegacion a").on("mouseout",function(){$(this).css("right","-145px")}),window.onload=function(){var o=document.getElementById("video"),e=document.getElementById("myVideo"),s=e.clientHeight+"px";o.style.height=e.clientHeight+"px"};