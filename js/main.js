$(function(){

    $("section").each(function(){
        let idSeccion = $(this).attr("id");
        console.log(idSeccion);
        $("#menu-main").append('<li class="nav-item">' + 
            '<a class="nav-link" href="#' + idSeccion + '">' + titulo + '</a>' +
            '</li>');
        
    });

    $(".imagenes-sombra figure").append("<figcaption>");
    $(".imagenes-sombra figure figcaption").append("<div>");

    $(".imagenes-sombra figure").mouseenter(function(){
        $(this).find("figcaption").stop().slideDown("slow");
    })
    $(".imagenes-sombra figure").mouseleave(function(){
        $(this).find("figcaption").stop().slideUp("slow");
    })

    $(".imagenes-sombra figure").each(function(){
        let titulo = $(this).find("img").attr("title");
        $(this).find("figcaption").find("div").html(titulo);
    })
    /** 2**/
    $(".imagenes_compra figure").append("<figcaption>");
    $(".imagenes_compra figure figcaption").append("<div>");

    $(".imagenes_compra figure").mouseenter(function(){
        $(this).find("figcaption").stop().slideDown("slow");
    })
    $(".imagenes_compra figure").mouseleave(function(){
        $(this).find("figcaption").stop().slideUp("slow");
    })

    $(".imagenes_compra figure").each(function(){
        let titulo = $(this).find("img").attr("title");
        $(this).find("figcaption").find("div").html(titulo);
        $(this).find("figcaption").find("div").append("<i class='bi bi-cart-fill'></i>");
    })

    $(".botonespecial a").mouseenter(function(){
        if($(this).css("background-color") === "rgba(255, 255, 255, 0.933)"){
            $(this).stop().css("background-color","rgba(0,0,0,0)")
            .stop().css("color","rgba(255, 255, 255, 0.933)")//AQUI
            $(this).mouseleave(function(){
                $(this).stop().css("background-color","rgba(255, 255, 255, 0.932)")
            .stop().css("color","rgb(106, 180, 47)")
            })
        }
        if($(this).css("background-color") === "rgba(0, 0, 0, 0)"){
            $(this).stop().css("background-color","rgba(255, 255, 255, 0.932)")
            .stop().css("color","rgb(106, 180, 47)")
            $(this).mouseleave(function(){
                $(this).stop().css("background-color","rgba(0, 0, 0, 0)")
            .stop().css("color","rgb(255, 255, 255, 0.932)")
            })
        }
    })

    $("#menu-item-tabla").click(function(){
        fetch("paginas/tabla.html")
            .then((response) => response.text()) //"response" vendria a ser un nombre, y puede ser cualquiera
            .then((data)=>{
                console.log(data);
                $("#main-content").html(data);
            });
        })
    
        $("#menu-item-proveedores").click(function(){
            fetch("paginas/proveedores.html")
                .then((response) => response.text()) //"response" vendria a ser un nombre, y puede ser cualquiera
                .then((data)=>{
                    console.log(data);
                    $("#main-content").html(data);
                });
            })
})