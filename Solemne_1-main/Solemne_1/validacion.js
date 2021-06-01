$(document).ready(function() {
    // ocultar el div#error
    $("#error").hide();
    // agregar la validacion al formulario cuando haga submit
    $("#formulario").submit(function() { 
        var mensajeGeneral = "";
        alert ("Registro completo")
        
        // validar que nombre no esté vacío
        mensajeNombre = "";
        mensajeCorreo = "";
        mensajeRut = "";
        mensajeFecha="";
        mensajeTelefono="";
        


        if($("#nombre").val().trim().length == 0) {
            mensajeNombre += "El nombre está en blanco<br>";
        }
        if($("#rut").val().trim().length == 0) {
            mensajeRut += "El rut está en blanco<br>";
        }
        if($("#email").val().trim().length == 0) {
            mensajeCorreo += "El correo está en blanco<br>";            
        }
        if($("#fecha").val().trim().length == 0) {
            mensajeFecha += "La fecha esta en blanco<br>";            
        }
        if($("#telefono").val().trim().length == 0) {
             mensajeTelefono += "El telefono esta en blanco<br>";            
        }
        



        $("#nombre").keypress(function() { 
            mensajeNombre = "";
            mensajeGeneral = mensajeNombre + mensajeCorreo + mensajeRut + mensajeFecha + mensajeTelefono;
            $("#error").html(mensajeGeneral);
            if(mensajeGeneral == "") {
                $("#error").hide();
            }
        });
    

        $("#email").keypress(function() { 
            mensajeCorreo = "";
            mensajeGeneral = mensajeNombre + mensajeCorreo + mensajeRut + mensajeFecha + mensajeTelefono;
            $("#error").html(mensajeGeneral);
            if(mensajeGeneral == "") {
                $("#error").hide();
            }
        });
        $("#rut").keypress(function() { 
            mensajeRut = "";
            mensajeGeneral = mensajeNombre + mensajeCorreo + mensajeRut + mensajeFecha + mensajeTelefono;
            $("#error").html(mensajeGeneral);
            if(mensajeGeneral == "") {
                $("#error").hide();
            }
        });
        $("#fecha").keypress(function() { 
            mensajeFecha = "";
            mensajeGeneral = mensajeNombre + mensajeCorreo + mensajeRut + mensajeFecha + mensajeTelefono;
            $("#error").html(mensajeGeneral);
            if(mensajeGeneral == "") {
                $("#error").hide();
            }
        });
        $("#telefono").keypress(function() { 
            mensajeTelefono = "";
            mensajeGeneral = mensajeNombre + mensajeCorreo + mensajeRut + mensajeFecha + mensajeTelefono;
            $("#error").html(mensajeGeneral);
            if(mensajeGeneral == "") {
                $("#error").hide();
            }
        });

        // agrega la validación del correo 
        // que no esté en blanco
        mensajeGeneral = mensajeNombre + mensajeCorreo + mensajeRut + mensajeFecha + mensajeTelefono;
        //preguntar si hay error
        if(mensajeGeneral != "") {
            $("#error").html(mensajeGeneral);
            $("#error").show();
            // anulamos el envío de datos
            event.preventDefault();
        }
    });
$.getJSON('https://mindicador.cl/api', function(data) {
    var dailyIndicators = data;
    $("<p/>", {
        html: 'El valor actual de la UF es $' + dailyIndicators.uf.valor
    }).appendTo("body");
}).fail(function() {
    console.log('Error al consumir la API!');
});

});