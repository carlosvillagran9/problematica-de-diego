
    //importante
var pa_despues_proceso = [];//para guardar proceso y que se van a "en espera"
var pa_despues_tamano = [];//para guardar tamaño y que se van a "en espera"


$(document).ready(function(){
   

    
    /*
    colores de identificacion
    _____________________
    |A1     |#631ea7    |
    |A2     |#2c579b    |
    |A3     |#b3520b    |
    |A4     |#e174bb    |
    |A5     |#dcb017    |
    ---------------------
    */






    $('#boton_iniciar').click(function(variableEspera,tamanoEspera){ 






        //los valores ingresados son de variabole y  su tamaño
        let contador = Number( $(".casilla_de_numeros_procesos").text());
        let seleccionDeTamano =Number( $("#selec_tamano option:selected").text());//eleccion de tamano
        let num_ocupadas =Number( $(".casilla_de_paginas_ocupadas").text());//casilla de paginas ocupadas
        let eleccion = $("#selec_proceso option:selected").text(); /*esto es para jalar la seleccion del select y alojarlo en una variable*/
    
        
    
    
        var colores = {
            A1: "#631ea7",
            A2: "#2c579b",
            A3: "#b3520b",
            A4: "#e174bb",
            A5: "#dcb017"
        };
        var variableSeleccionada = $("#selec_proceso option:selected").text(); // Cambia esto según la variable que desees seleccionar
        let colorYVariable = colores[variableSeleccionada]; //junta la variable y el color para modificar el color en el background
        




        if (pa_despues_proceso != "") {
            switch (pa_despues_proceso[0]) {
                case "A1":
                    variableSeleccionada = "A1";
                    if ($('.procesos_en_espera_a1').text() == "A1") {
                        $('.procesos_en_espera_a1').css("color", "#c7c7c7");
                        $('.procesos_en_espera_a1').text("");
                        $('.procesos_en_espera_a1').css("background-color", "#c7c7c7");                
                    }if ($('.procesos_en_espera_a2').text() == "A1") {
                        $('.procesos_en_espera_a2').css("color", "#c7c7c7");
                        $('.procesos_en_espera_a2').text("");
                        $('.procesos_en_espera_a2').css("background-color", "#c7c7c7");
                    }if ($('.procesos_en_espera_a3').text() == "A1") {
                        $('.procesos_en_espera_a3').css("color", "#c7c7c7");
                        $('.procesos_en_espera_a3').text("");
                        $('.procesos_en_espera_a3').css("background-color", "#c7c7c7");
                    }if ($('.procesos_en_espera_a4').text() == "A1") {
                        $('.procesos_en_espera_a4').css("color", "#c7c7c7");
                        $('.procesos_en_espera_a4').text("");
                        $('.procesos_en_espera_a4').css("background-color", "#c7c7c7");
                    }if ($('.procesos_en_espera_a5').text() == "A1") {
                        $('.procesos_en_espera_a5').css("color", "#c7c7c7");
                        $('.procesos_en_espera_a5').text("");
                        $('.procesos_en_espera_a5').css("background-color", "#c7c7c7");
                    }
                    break;
                case "A2":
                    variableSeleccionada = "A2";
                    if ($('.procesos_en_espera_a1').text() == "A2") {
                        $('.procesos_en_espera_a1').css("color", "#c7c7c7");
                        $('.procesos_en_espera_a1').text("");
                        $('.procesos_en_espera_a1').css("background-color", "#c7c7c7");                
                    }if ($('.procesos_en_espera_a2').text() == "A2") {
                        $('.procesos_en_espera_a2').css("color", "#c7c7c7");
                        $('.procesos_en_espera_a2').text("");
                        $('.procesos_en_espera_a2').css("background-color", "#c7c7c7");
                    }if ($('.procesos_en_espera_a3').text() == "A2") {
                        $('.procesos_en_espera_a3').css("color", "#c7c7c7");
                        $('.procesos_en_espera_a3').text("");
                        $('.procesos_en_espera_a3').css("background-color", "#c7c7c7");
                    }if ($('.procesos_en_espera_a4').text() == "A2") {
                        $('.procesos_en_espera_a4').css("color", "#c7c7c7");
                        $('.procesos_en_espera_a4').text("");
                        $('.procesos_en_espera_a4').css("background-color", "#c7c7c7");
                    }if ($('.procesos_en_espera_a5').text() == "A2") {
                        $('.procesos_en_espera_a5').css("color", "#c7c7c7");
                        $('.procesos_en_espera_a5').text("");
                        $('.procesos_en_espera_a5').css("background-color", "#c7c7c7");
                    }
                    break;
                case "A3":
                    variableSeleccionada = "A3";
                    if ($('.procesos_en_espera_a1').text() == "A3") {
                        $('.procesos_en_espera_a1').css("color", "#c7c7c7");
                        $('.procesos_en_espera_a1').text("");
                        $('.procesos_en_espera_a1').css("background-color", "#c7c7c7");                
                    }if ($('.procesos_en_espera_a2').text() == "A3") {
                        $('.procesos_en_espera_a2').css("color", "#c7c7c7");
                        $('.procesos_en_espera_a2').text("");
                        $('.procesos_en_espera_a2').css("background-color", "#c7c7c7");
                    }if ($('.procesos_en_espera_a3').text() == "A3") {
                        $('.procesos_en_espera_a3').css("color", "#c7c7c7");
                        $('.procesos_en_espera_a3').text("");
                        $('.procesos_en_espera_a3').css("background-color", "#c7c7c7");
                    }if ($('.procesos_en_espera_a4').text() == "A3") {
                        $('.procesos_en_espera_a4').css("color", "#c7c7c7");
                        $('.procesos_en_espera_a4').text("");
                        $('.procesos_en_espera_a4').css("background-color", "#c7c7c7");
                    }if ($('.procesos_en_espera_a5').text() == "A3") {
                        $('.procesos_en_espera_a5').css("color", "#c7c7c7");
                        $('.procesos_en_espera_a5').text("");
                        $('.procesos_en_espera_a5').css("background-color", "#c7c7c7");
                    }
                    break;
                case "A4":
                    variableSeleccionada = "A4";
                    if ($('.procesos_en_espera_a1').text() == "A4") {
                        $('.procesos_en_espera_a1').css("color", "#c7c7c7");
                        $('.procesos_en_espera_a1').text("");
                        $('.procesos_en_espera_a1').css("background-color", "#c7c7c7");                
                    }if ($('.procesos_en_espera_a2').text() == "A4") {
                        $('.procesos_en_espera_a2').css("color", "#c7c7c7");
                        $('.procesos_en_espera_a2').text("");
                        $('.procesos_en_espera_a2').css("background-color", "#c7c7c7");
                    }if ($('.procesos_en_espera_a3').text() == "A4") {
                        $('.procesos_en_espera_a3').css("color", "#c7c7c7");
                        $('.procesos_en_espera_a3').text("");
                        $('.procesos_en_espera_a3').css("background-color", "#c7c7c7");
                    }if ($('.procesos_en_espera_a4').text() == "A4") {
                        $('.procesos_en_espera_a4').css("color", "#c7c7c7");
                        $('.procesos_en_espera_a4').text("");
                        $('.procesos_en_espera_a4').css("background-color", "#c7c7c7");
                    }if ($('.procesos_en_espera_a5').text() == "A4") {
                        $('.procesos_en_espera_a5').css("color", "#c7c7c7");
                        $('.procesos_en_espera_a5').text("");
                        $('.procesos_en_espera_a5').css("background-color", "#c7c7c7");
                    }
                    break;
                case "A5":
                    variableSeleccionada = "A5";
                    if ($('.procesos_en_espera_a1').text() == "A5") {
                        $('.procesos_en_espera_a1').css("color", "#c7c7c7");
                        $('.procesos_en_espera_a1').text("");
                        $('.procesos_en_espera_a1').css("background-color", "#c7c7c7");                
                    }if ($('.procesos_en_espera_a2').text() == "A5") {
                        $('.procesos_en_espera_a2').css("color", "#c7c7c7");
                        $('.procesos_en_espera_a2').text("");
                        $('.procesos_en_espera_a2').css("background-color", "#c7c7c7");
                    }if ($('.procesos_en_espera_a3').text() == "A5") {
                        $('.procesos_en_espera_a3').css("color", "#c7c7c7");
                        $('.procesos_en_espera_a3').text("");
                        $('.procesos_en_espera_a3').css("background-color", "#c7c7c7");
                    }if ($('.procesos_en_espera_a4').text() == "A5") {
                        $('.procesos_en_espera_a4').css("color", "#c7c7c7");
                        $('.procesos_en_espera_a4').text("");
                        $('.procesos_en_espera_a4').css("background-color", "#c7c7c7");
                    }if ($('.procesos_en_espera_a5').text() == "A5") {
                        $('.procesos_en_espera_a5').css("color", "#c7c7c7");
                        $('.procesos_en_espera_a5').text("");
                        $('.procesos_en_espera_a5').css("background-color", "#c7c7c7");
                    }
                    break;
            
                default:
                    break;
            }            
            switch (pa_despues_tamano[0]) {
                case 64:
                    seleccionDeTamano = 64;
                    break;
                case 128:
                    seleccionDeTamano = 128;
                    break;
                case 256:
                    seleccionDeTamano = 256;
                    break;
                case 512:
                    seleccionDeTamano = 512;
                    break;
                case 1024:
                    seleccionDeTamano = 1024;
                    break;
            
                default:
                    break;
            }            
        }
        colorYVariable = colores[variableSeleccionada]; //junta la variable y el color para modificar el color en el background
        

        switch (seleccionDeTamano) {
            case 64:
                if ($("#pagina_1").text()=="") { 
                    //modificador de color en pagina
                    $("#pagina_1").text(variableSeleccionada + " 64 bits");
                    $('#pagina_1').css("color", "white")
                    $('#pagina_1').css("background-color",colorYVariable) 
                    //para contador y casilla
                    $(".procesos_activos_a1").text(variableSeleccionada);
                    $('.procesos_activos_a1').css("background-color", colorYVariable);
                    $(".procesos_actovos_a1").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);//sumar a numero de procesos
                    $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 1);//sumar a paginas ocupadas
                    
    
                    return
                } if ($("#pagina_2").text()=="" && $("#pagina_1").text() !="") {                
                    //modificador de color en pagina
                    $("#pagina_2").text(variableSeleccionada + " 64 bits");
                    $('#pagina_2').css("color", "white")
                    $('#pagina_2').css("background-color",colorYVariable)
                    $(".procesos_activos_a2").text(variableSeleccionada);
                    $('.procesos_activos_a2').css("background-color", colorYVariable);
                    $(".procesos_actovos_a2").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 1);//sumar a paginas ocupadas
    
                    
                    return 
                } if ($("#pagina_3").text()=="" && $("#pagina_2").text() !="" && $("#pagina_1").text() !="") {
                    //modificador de color en pagina
                    $("#pagina_3").text(variableSeleccionada + " 64 bits");
                    $('#pagina_3').css("color", "white")
                    $('#pagina_3').css("background-color", colorYVariable)
                    $(".procesos_activos_a3").text(variableSeleccionada);
                    $('.procesos_activos_a3').css("background-color", colorYVariable);
                    $(".procesos_actovos_a3").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 1);//sumar a paginas ocupadas
                    
                    return
                } if ($("#pagina_4").text()=="" && $("#pagina_3").text() !="" && $("#pagina_2").text() !="" && $("#pagina_1").text() !="") {
                    //modificador de color en pagina
                    $("#pagina_4").text(variableSeleccionada + " 64 bits");
                    $('#pagina_4').css("color", "white")
                    $('#pagina_4').css("background-color", colorYVariable) 
                    $(".procesos_activos_a4").text(variableSeleccionada);
                    $('.procesos_activos_a4').css("background-color", colorYVariable);
                    $(".procesos_actovos_a4").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 1);//sumar a paginas ocupadas
                    return    
                } if ($("#pagina_5").text()=="" && $("#pagina_4").text() !="" && $("#pagina_3").text() !="" && $("#pagina_2").text() !="" && $("#pagina_1").text() !=""){
                    //modificador de color en pagina
                    $("#pagina_5").text(variableSeleccionada + " 64 bits");
                    $('#pagina_5').css("color", "white")
                    $('#pagina_5').css("background-color", colorYVariable)
                    $(".procesos_activos_a5").text(variableSeleccionada);
                    $('.procesos_activos_a5').css("background-color", colorYVariable);
                    $(".procesos_actovos_a5").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 1);//sumar a paginas ocupadas
                    return
                }if ($("#pagina_6").text()=="" && $("#pagina_5").text() !="" && $("#pagina_4").text() !="" && $("#pagina_3").text() !="" && $("#pagina_2").text() !="" && $("#pagina_1").text() !=""){
                    //modificador de color en pagina
                    $("#pagina_6").text(variableSeleccionada + " 64 bits");
                    $('#pagina_6').css("color", "white")
                    $('#pagina_6').css("background-color",colorYVariable)
                    $(".procesos_activos_a6").text(variableSeleccionada);
                    $('.procesos_activos_a6').css("background-color", colorYVariable);
                    $(".procesos_actovos_a6").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 1);//sumar a paginas ocupadas
                    return
                }if ($("#pagina_7").text()=="" && $("#pagina_6").text() !="" && $("#pagina_5").text() !="" && $("#pagina_4").text() !="" && $("#pagina_3").text() !="" && $("#pagina_2").text() !="" && $("#pagina_1").text() !=""){
                    //modificador de color en pagina
                    $("#pagina_7").text(variableSeleccionada + " 64 bits");
                    $('#pagina_7').css("color", "white")
                    $('#pagina_7').css("background-color",colorYVariable)
                    $(".procesos_activos_a7").text(variableSeleccionada);
                    $('.procesos_activos_a7').css("background-color", colorYVariable);
                    $(".procesos_actovos_a7").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 1);//sumar a paginas ocupadas
                    return                
                }if ($("#pagina_8").text()=="" && $("#pagina_7").text()!="" && $("#pagina_6").text() !="" && $("#pagina_5").text() !="" && $("#pagina_4").text() !="" && $("#pagina_3").text() !="" && $("#pagina_2").text() !="" && $("#pagina_1").text() !=""){
                    //modificador de color en pagina
                    $("#pagina_8").text(variableSeleccionada + " 64 bits");
                    $('#pagina_8').css("color", "white")
                    $('#pagina_8').css("background-color",colorYVariable)
                    $(".procesos_activos_a8").text(variableSeleccionada);
                    $('.procesos_activos_a8').css("background-color", colorYVariable);
                    $(".procesos_actovos_a8").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 1);//sumar a paginas ocupadas
                    return     
                }if ($("#pagina_9").text()==""&& $("#pagina_8").text()!="" && $("#pagina_7").text()!="" && $("#pagina_6").text() !="" && $("#pagina_5").text() !="" && $("#pagina_4").text() !="" && $("#pagina_3").text() !="" && $("#pagina_2").text() !="" && $("#pagina_1").text() !=""){
                    //modificador de color en pagina
                    $("#pagina_9").text(variableSeleccionada + " 64 bits");
                    $('#pagina_9').css("color", "white")
                    $('#pagina_9').css("background-color",colorYVariable)
                    $(".procesos_activos_a9").text(variableSeleccionada);
                    $('.procesos_activos_a9').css("background-color", colorYVariable);
                    $(".procesos_actovos_a9").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 1);//sumar a paginas ocupadas
                    return     
                }else{
    
                    //importante------------------para cuando se ponga en espera----------------------
                    pa_despues_proceso.push(variableSeleccionada);
                    pa_despues_tamano.push(seleccionDeTamano);
                    //------------------------------------------
                                        
                    if ($(".procesos_en_espera_a1").text()==""){ 
                        $(".procesos_en_espera_a1").text(variableSeleccionada);
                        $('.procesos_en_espera_a1').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a1").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        return
                    }if ($(".procesos_en_espera_a2").text()==""){
                        $(".procesos_en_espera_a2").text(variableSeleccionada);
                        $('.procesos_en_espera_a2').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a2").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        return
                    }if ($(".procesos_en_espera_a3").text()==""){
                        $(".procesos_en_espera_a3").text(variableSeleccionada);
                        $('.procesos_en_espera_a3').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a3").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        return
                    }if ($(".procesos_en_espera_a4").text()==""){
                        $(".procesos_en_espera_a4").text(variableSeleccionada);
                        $('.procesos_en_espera_a4').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a4").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        return
                    }if ($(".procesos_en_espera_a5").text()==""){
                        $(".procesos_en_espera_a5").text(variableSeleccionada);
                        $('.procesos_en_espera_a5').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a5").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        return
                    }
                }
                break;
            case 128:
                if ($("#pagina_1").text()=="") { 
                    //modificador de color en pagina
                    $("#pagina_1").text(variableSeleccionada + " 128 bits");
                    $('#pagina_1').css("color", "white")
                    $('#pagina_1').css("background-color",colorYVariable) 
                    //para contador y casilla
                    $(".procesos_activos_a1").text(variableSeleccionada);
                    $('.procesos_activos_a1').css("background-color", colorYVariable);
                    $(".procesos_actovos_a1").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 1);//sumar a paginas ocupadas
    
    
                    return
                } if ($("#pagina_2").text()=="" && $("#pagina_1").text() !="") {                
                    //modificador de color en pagina
                    $("#pagina_2").text(variableSeleccionada + " 128 bits");
                    $('#pagina_2').css("color", "white")
                    $('#pagina_2').css("background-color",colorYVariable)
                    $(".procesos_activos_a2").text(variableSeleccionada);
                    $('.procesos_activos_a2').css("background-color", colorYVariable);
                    $(".procesos_actovos_a2").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 1);//sumar a paginas ocupadas
    
                    
                    return 
                } if ($("#pagina_3").text()=="" && $("#pagina_2").text() !="" && $("#pagina_1").text() !="") {
                    //modificador de color en pagina
                    $("#pagina_3").text(variableSeleccionada + " 128 bits");
                    $('#pagina_3').css("color", "white")
                    $('#pagina_3').css("background-color", colorYVariable)
                    $(".procesos_activos_a3").text(variableSeleccionada);
                    $('.procesos_activos_a3').css("background-color", colorYVariable);
                    $(".procesos_actovos_a3").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 1);//sumar a paginas ocupadas
                    
                    return
                } if ($("#pagina_4").text()=="" && $("#pagina_3").text() !="" && $("#pagina_2").text() !="" && $("#pagina_1").text() !="") {
                    //modificador de color en pagina
                    $("#pagina_4").text(variableSeleccionada + " 128 bits");
                    $('#pagina_4').css("color", "white")
                    $('#pagina_4').css("background-color", colorYVariable) 
                    $(".procesos_activos_a4").text(variableSeleccionada);
                    $('.procesos_activos_a4').css("background-color", colorYVariable);
                    $(".procesos_actovos_a4").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);  
                    $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 1);//sumar a paginas ocupadas 
                    return    
                } if ($("#pagina_5").text()=="" && $("#pagina_4").text() !="" && $("#pagina_3").text() !="" && $("#pagina_2").text() !="" && $("#pagina_1").text() !=""){
                    //modificador de color en pagina
                    $("#pagina_5").text(variableSeleccionada + " 128 bits");
                    $('#pagina_5').css("color", "white")
                    $('#pagina_5').css("background-color", colorYVariable)
                    $(".procesos_activos_a5").text(variableSeleccionada);
                    $('.procesos_activos_a5').css("background-color", colorYVariable);
                    $(".procesos_actovos_a5").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 1);//sumar a paginas ocupadas
                    return
                }if ($("#pagina_6").text()=="" && $("#pagina_5").text() !="" && $("#pagina_4").text() !="" && $("#pagina_3").text() !="" && $("#pagina_2").text() !="" && $("#pagina_1").text() !=""){
                    //modificador de color en pagina
                    $("#pagina_6").text(variableSeleccionada + " 128 bits");
                    $('#pagina_6').css("color", "white")
                    $('#pagina_6').css("background-color",colorYVariable)
                    $(".procesos_activos_a6").text(variableSeleccionada);
                    $('.procesos_activos_a6').css("background-color", colorYVariable);
                    $(".procesos_actovos_a6").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 1);//sumar a paginas ocupadas
                    return
                }if ($("#pagina_7").text()=="" && $("#pagina_6").text() !="" && $("#pagina_5").text() !="" && $("#pagina_4").text() !="" && $("#pagina_3").text() !="" && $("#pagina_2").text() !="" && $("#pagina_1").text() !=""){
                    //modificador de color en pagina
                    $("#pagina_7").text(variableSeleccionada + " 128 bits");
                    $('#pagina_7').css("color", "white")
                    $('#pagina_7').css("background-color",colorYVariable)
                    $(".procesos_activos_a7").text(variableSeleccionada);
                    $('.procesos_activos_a7').css("background-color", colorYVariable);
                    $(".procesos_actovos_a7").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 1);//sumar a paginas ocupadas
                    return                
                }if ($("#pagina_8").text()=="" && $("#pagina_7").text()!="" && $("#pagina_6").text() !="" && $("#pagina_5").text() !="" && $("#pagina_4").text() !="" && $("#pagina_3").text() !="" && $("#pagina_2").text() !="" && $("#pagina_1").text() !=""){
                    //modificador de color en pagina
                    $("#pagina_8").text(variableSeleccionada + " 128 bits");
                    $('#pagina_8').css("color", "white")
                    $('#pagina_8').css("background-color",colorYVariable)
                    $(".procesos_activos_a8").text(variableSeleccionada);
                    $('.procesos_activos_a8').css("background-color", colorYVariable);
                    $(".procesos_actovos_a8").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 1);//sumar a paginas ocupadas
                    return     
                }if ($("#pagina_9").text()==""&& $("#pagina_8").text()!="" && $("#pagina_7").text()!="" && $("#pagina_6").text() !="" && $("#pagina_5").text() !="" && $("#pagina_4").text() !="" && $("#pagina_3").text() !="" && $("#pagina_2").text() !="" && $("#pagina_1").text() !=""){
                    //modificador de color en pagina
                    $("#pagina_9").text(variableSeleccionada + " 128 bits");
                    $('#pagina_9').css("color", "white")
                    $('#pagina_9').css("background-color",colorYVariable)
                    $(".procesos_activos_a9").text(variableSeleccionada);
                    $('.procesos_activos_a9').css("background-color", colorYVariable);
                    $(".procesos_actovos_a9").css("color","white")
                    $(".casilla_de_numeros_procesos").text(contador + 1);
                    $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 1);//sumar a paginas ocupadas
                    return     
                }else{
                    pa_despues_proceso.push(variableSeleccionada);
                    pa_despues_tamano.push(seleccionDeTamano);
                    if ($(".procesos_en_espera_a1").text()==""){ 
                        $(".procesos_en_espera_a1").text(variableSeleccionada);
                        $('.procesos_en_espera_a1').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a1").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        return
                    }if ($(".procesos_en_espera_a2").text()==""){
                        $(".procesos_en_espera_a2").text(variableSeleccionada);
                        $('.procesos_en_espera_a2').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a2").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        return
                    }if ($(".procesos_en_espera_a3").text()==""){
                        $(".procesos_en_espera_a3").text(variableSeleccionada);
                        $('.procesos_en_espera_a3').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a3").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        return
                    }if ($(".procesos_en_espera_a4").text()==""){
                        $(".procesos_en_espera_a4").text(variableSeleccionada);
                        $('.procesos_en_espera_a4').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a4").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        return
                    }if ($(".procesos_en_espera_a5").text()==""){
                        $(".procesos_en_espera_a5").text(variableSeleccionada);
                        $('.procesos_en_espera_a5').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a5").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        return
                    }
                }
                break;
            case 256:
                if ($("#pagina_1").text()=="") {                
                    //modificador de color en pagina
                    $("#pagina_1").text(variableSeleccionada + " 256 bits");
                    $('#pagina_1').css("color", "white")
                    $('#pagina_1').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_2").text(variableSeleccionada + " 256 bits");
                    $('#pagina_2').css("color", "white")
                    $('#pagina_2').css("background-color",colorYVariable)
    
                    if ($(".procesos_activos_a1").text()==""){ //para que sepa donde poner el proceso en la lista de procesos activos
                        $(".procesos_activos_a1").text(variableSeleccionada);
                        $('.procesos_activos_a1').css("background-color", colorYVariable);
                        $(".procesos_actovos_a1").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }if ($(".procesos_activos_a2").text()==""){
                        $(".procesos_activos_a2").text(variableSeleccionada);
                        $('.procesos_activos_a2').css("background-color", colorYVariable);
                        $(".procesos_actovos_a2").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }if ($(".procesos_activos_a3").text()==""){
                        $(".procesos_activos_a3").text(variableSeleccionada);
                        $('.procesos_activos_a3').css("background-color", colorYVariable);
                        $(".procesos_actovos_a3").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }if ($(".procesos_activos_a4").text()==""){
                        $(".procesos_activos_a4").text(variableSeleccionada);
                        $('.procesos_activos_a4').css("background-color", colorYVariable);
                        $(".procesos_actovos_a4").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }if ($(".procesos_activos_a5").text()==""){
                        $(".procesos_activos_a5").text(variableSeleccionada);
                        $('.procesos_activos_a5').css("background-color", colorYVariable);
                        $(".procesos_actovos_a5").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }
    
                    
                    
                    return 
                }if ($("#pagina_2").text()=="") {                
                    //modificador de color en pagina
                    $("#pagina_2").text(variableSeleccionada+ " 256 bits");
                    $('#pagina_2').css("color", "white")
                    $('#pagina_2').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_3").text(variableSeleccionada+ " 256 bits");
                    $('#pagina_3').css("color", "white")
                    $('#pagina_3').css("background-color",colorYVariable)
    
                    if ($(".procesos_activos_a1").text()==""){ //para que sepa donde poner el proceso en la lista de procesos activos
                        $(".procesos_activos_a1").text(variableSeleccionada);
                        $('.procesos_activos_a1').css("background-color", colorYVariable);
                        $(".procesos_actovos_a1").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }if ($(".procesos_activos_a2").text()==""){
                        $(".procesos_activos_a2").text(variableSeleccionada);
                        $('.procesos_activos_a2').css("background-color", colorYVariable);
                        $(".procesos_actovos_a2").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }if ($(".procesos_activos_a3").text()==""){
                        $(".procesos_activos_a3").text(variableSeleccionada);
                        $('.procesos_activos_a3').css("background-color", colorYVariable);
                        $(".procesos_actovos_a3").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }if ($(".procesos_activos_a4").text()==""){
                        $(".procesos_activos_a4").text(variableSeleccionada);
                        $('.procesos_activos_a4').css("background-color", colorYVariable);
                        $(".procesos_actovos_a4").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }if ($(".procesos_activos_a5").text()==""){
                        $(".procesos_activos_a5").text(variableSeleccionada);
                        $('.procesos_activos_a5').css("background-color", colorYVariable);
                        $(".procesos_actovos_a5").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }
    
                    return 
                }if ($("#pagina_3").text()=="") {                
                    //modificador de color en pagina
                    $("#pagina_3").text(variableSeleccionada+ " 256 bits");
                    $('#pagina_3').css("color", "white")
                    $('#pagina_3').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_4").text(variableSeleccionada+ " 256 bits");
                    $('#pagina_4').css("color", "white")
                    $('#pagina_4').css("background-color",colorYVariable)
    
                    if ($(".procesos_activos_a1").text()==""){ //para que sepa donde poner el proceso en la lista de procesos activos
                        $(".procesos_activos_a1").text(variableSeleccionada);
                        $('.procesos_activos_a1').css("background-color", colorYVariable);
                        $(".procesos_actovos_a1").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }if ($(".procesos_activos_a2").text()==""){
                        $(".procesos_activos_a2").text(variableSeleccionada);
                        $('.procesos_activos_a2').css("background-color", colorYVariable);
                        $(".procesos_actovos_a2").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }if ($(".procesos_activos_a3").text()==""){
                        $(".procesos_activos_a3").text(variableSeleccionada);
                        $('.procesos_activos_a3').css("background-color", colorYVariable);
                        $(".procesos_actovos_a3").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }if ($(".procesos_activos_a4").text()==""){
                        $(".procesos_activos_a4").text(variableSeleccionada);
                        $('.procesos_activos_a4').css("background-color", colorYVariable);
                        $(".procesos_actovos_a4").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }if ($(".procesos_activos_a5").text()==""){
                        $(".procesos_activos_a5").text(variableSeleccionada);
                        $('.procesos_activos_a5').css("background-color", colorYVariable);
                        $(".procesos_actovos_a5").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }
    
                    return 
                }if ($("#pagina_4").text()=="") {                
                    //modificador de color en pagina
                    $("#pagina_4").text(variableSeleccionada+ " 256 bits");
                    $('#pagina_4').css("color", "white")
                    $('#pagina_4').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_5").text(variableSeleccionada+ " 256 bits");
                    $('#pagina_5').css("color", "white")
                    $('#pagina_5').css("background-color",colorYVariable)
    
                    if ($(".procesos_activos_a1").text()==""){ //para que sepa donde poner el proceso en la lista de procesos activos
                        $(".procesos_activos_a1").text(variableSeleccionada);
                        $('.procesos_activos_a1').css("background-color", colorYVariable);
                        $(".procesos_actovos_a1").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }if ($(".procesos_activos_a2").text()==""){
                        $(".procesos_activos_a2").text(variableSeleccionada);
                        $('.procesos_activos_a2').css("background-color", colorYVariable);
                        $(".procesos_actovos_a2").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }if ($(".procesos_activos_a3").text()==""){
                        $(".procesos_activos_a3").text(variableSeleccionada);
                        $('.procesos_activos_a3').css("background-color", colorYVariable);
                        $(".procesos_actovos_a3").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }if ($(".procesos_activos_a4").text()==""){
                        $(".procesos_activos_a4").text(variableSeleccionada);
                        $('.procesos_activos_a4').css("background-color", colorYVariable);
                        $(".procesos_actovos_a4").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }if ($(".procesos_activos_a5").text()==""){
                        $(".procesos_activos_a5").text(variableSeleccionada);
                        $('.procesos_activos_a5').css("background-color", colorYVariable);
                        $(".procesos_actovos_a5").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }
    
                    return 
                }if ($("#pagina_5").text()=="") {                
                    //modificador de color en pagina
                    $("#pagina_5").text(variableSeleccionada+ " 256 bits");
                    $('#pagina_5').css("color", "white")
                    $('#pagina_5').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_6").text(variableSeleccionada+ " 256 bits");
                    $('#pagina_6').css("color", "white")
                    $('#pagina_6').css("background-color",colorYVariable)
    
                    if ($(".procesos_activos_a1").text()==""){ //para que sepa donde poner el proceso en la lista de procesos activos
                        $(".procesos_activos_a1").text(variableSeleccionada);
                        $('.procesos_activos_a1').css("background-color", colorYVariable);
                        $(".procesos_actovos_a1").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }if ($(".procesos_activos_a2").text()==""){
                        $(".procesos_activos_a2").text(variableSeleccionada);
                        $('.procesos_activos_a2').css("background-color", colorYVariable);
                        $(".procesos_actovos_a2").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }if ($(".procesos_activos_a3").text()==""){
                        $(".procesos_activos_a3").text(variableSeleccionada);
                        $('.procesos_activos_a3').css("background-color", colorYVariable);
                        $(".procesos_actovos_a3").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }if ($(".procesos_activos_a4").text()==""){
                        $(".procesos_activos_a4").text(variableSeleccionada);
                        $('.procesos_activos_a4').css("background-color", colorYVariable);
                        $(".procesos_actovos_a4").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }if ($(".procesos_activos_a5").text()==""){
                        $(".procesos_activos_a5").text(variableSeleccionada);
                        $('.procesos_activos_a5').css("background-color", colorYVariable);
                        $(".procesos_actovos_a5").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }
    
                    return 
                }if ($("#pagina_6").text()=="") {                
                    //modificador de color en pagina
                    $("#pagina_6").text(variableSeleccionada+ " 256 bits");
                    $('#pagina_6').css("color", "white")
                    $('#pagina_6').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_7").text(variableSeleccionada+ " 256 bits");
                    $('#pagina_7').css("color", "white")
                    $('#pagina_7').css("background-color",colorYVariable)
    
                    if ($(".procesos_activos_a1").text()==""){ //para que sepa donde poner el proceso en la lista de procesos activos
                        $(".procesos_activos_a1").text(variableSeleccionada);
                        $('.procesos_activos_a1').css("background-color", colorYVariable);
                        $(".procesos_actovos_a1").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }if ($(".procesos_activos_a2").text()==""){
                        $(".procesos_activos_a2").text(variableSeleccionada);
                        $('.procesos_activos_a2').css("background-color", colorYVariable);
                        $(".procesos_actovos_a2").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }if ($(".procesos_activos_a3").text()==""){
                        $(".procesos_activos_a3").text(variableSeleccionada);
                        $('.procesos_activos_a3').css("background-color", colorYVariable);
                        $(".procesos_actovos_a3").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }if ($(".procesos_activos_a4").text()==""){
                        $(".procesos_activos_a4").text(variableSeleccionada);
                        $('.procesos_activos_a4').css("background-color", colorYVariable);
                        $(".procesos_actovos_a4").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }if ($(".procesos_activos_a5").text()==""){
                        $(".procesos_activos_a5").text(variableSeleccionada);
                        $('.procesos_activos_a5').css("background-color", colorYVariable);
                        $(".procesos_actovos_a5").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }
    
                    return 
                }if ($("#pagina_7").text()=="") {                
                    //modificador de color en pagina
                    $("#pagina_7").text(variableSeleccionada+ " 256 bits");
                    $('#pagina_7').css("color", "white")
                    $('#pagina_7').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_8").text(variableSeleccionada+ " 256 bits");
                    $('#pagina_8').css("color", "white")
                    $('#pagina_8').css("background-color",colorYVariable)
    
                    if ($(".procesos_activos_a1").text()==""){ //para que sepa donde poner el proceso en la lista de procesos activos
                        $(".procesos_activos_a1").text(variableSeleccionada);
                        $('.procesos_activos_a1').css("background-color", colorYVariable);
                        $(".procesos_actovos_a1").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }if ($(".procesos_activos_a2").text()==""){
                        $(".procesos_activos_a2").text(variableSeleccionada);
                        $('.procesos_activos_a2').css("background-color", colorYVariable);
                        $(".procesos_actovos_a2").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }if ($(".procesos_activos_a3").text()==""){
                        $(".procesos_activos_a3").text(variableSeleccionada);
                        $('.procesos_activos_a3').css("background-color", colorYVariable);
                        $(".procesos_actovos_a3").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }if ($(".procesos_activos_a4").text()==""){
                        $(".procesos_activos_a4").text(variableSeleccionada);
                        $('.procesos_activos_a4').css("background-color", colorYVariable);
                        $(".procesos_actovos_a4").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }if ($(".procesos_activos_a5").text()==""){
                        $(".procesos_activos_a5").text(variableSeleccionada);
                        $('.procesos_activos_a5').css("background-color", colorYVariable);
                        $(".procesos_actovos_a5").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }
    
                    return 
                }if ($("#pagina_8").text()=="") {                
                    //modificador de color en pagina
                    $("#pagina_8").text(variableSeleccionada+ " 256 bits");
                    $('#pagina_8').css("color", "white")
                    $('#pagina_8').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_9").text(variableSeleccionada+ " 256 bits");
                    $('#pagina_9').css("color", "white")
                    $('#pagina_9').css("background-color",colorYVariable)
    
                    if ($(".procesos_activos_a1").text()==""){ //para que sepa donde poner el proceso en la lista de procesos activos
                        $(".procesos_activos_a1").text(variableSeleccionada);
                        $('.procesos_activos_a1').css("background-color", colorYVariable);
                        $(".procesos_actovos_a1").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }if ($(".procesos_activos_a2").text()==""){
                        $(".procesos_activos_a2").text(variableSeleccionada);
                        $('.procesos_activos_a2').css("background-color", colorYVariable);
                        $(".procesos_actovos_a2").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }if ($(".procesos_activos_a3").text()==""){
                        $(".procesos_activos_a3").text(variableSeleccionada);
                        $('.procesos_activos_a3').css("background-color", colorYVariable);
                        $(".procesos_actovos_a3").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }if ($(".procesos_activos_a4").text()==""){
                        $(".procesos_activos_a4").text(variableSeleccionada);
                        $('.procesos_activos_a4').css("background-color", colorYVariable);
                        $(".procesos_actovos_a4").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }if ($(".procesos_activos_a5").text()==""){
                        $(".procesos_activos_a5").text(variableSeleccionada);
                        $('.procesos_activos_a5').css("background-color", colorYVariable);
                        $(".procesos_actovos_a5").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 2);//sumar a paginas ocupadas de 2
                        return
                    }
    
                    return 
                }if ($("#pagina_9").text()=="") {                
                    alert("no hay espacio sufuciete")
                    $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                }else {
                    pa_despues_proceso.push(variableSeleccionada);
                    pa_despues_tamano.push(seleccionDeTamano);
                    if ($(".procesos_en_espera_a1").text()==""){ 
                        $(".procesos_en_espera_a1").text(variableSeleccionada);
                        $('.procesos_en_espera_a1').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a1").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        return
                    }if ($(".procesos_en_espera_a2").text()==""){
                        $(".procesos_en_espera_a2").text(variableSeleccionada);
                        $('.procesos_en_espera_a2').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a2").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        return
                    }if ($(".procesos_en_espera_a3").text()==""){
                        $(".procesos_en_espera_a3").text(variableSeleccionada);
                        $('.procesos_en_espera_a3').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a3").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        return
                    }if ($(".procesos_en_espera_a4").text()==""){
                        $(".procesos_en_espera_a4").text(variableSeleccionada);
                        $('.procesos_en_espera_a4').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a4").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        return
                    }if ($(".procesos_en_espera_a5").text()==""){
                        $(".procesos_en_espera_a5").text(variableSeleccionada);
                        $('.procesos_en_espera_a5').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a5").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        return
                    }
                }
    
            break;
    
            case 512:
                if ($("#pagina_1").text()=="") {                
                    //modificador de color en pagina
                    $("#pagina_1").text(variableSeleccionada + " 512 bits");
                    $('#pagina_1').css("color", "white")
                    $('#pagina_1').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_2").text(variableSeleccionada + " 512 bits");
                    $('#pagina_2').css("color", "white")
                    $('#pagina_2').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_3").text(variableSeleccionada + " 512 bits");
                    $('#pagina_3').css("color", "white")
                    $('#pagina_3').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_4").text(variableSeleccionada + " 512 bits");
                    $('#pagina_4').css("color", "white")
                    $('#pagina_4').css("background-color",colorYVariable)
                    
                    if ($(".procesos_activos_a1").text()==""){ //para que sepa donde poner el proceso en la lista de procesos activos
                        $(".procesos_activos_a1").text(variableSeleccionada);
                        $('.procesos_activos_a1').css("background-color", colorYVariable);
                        $(".procesos_actovos_a1").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 4);//sumar a paginas ocupadas de 4
                        return
                    }if ($(".procesos_activos_a2").text()==""){
                        $(".procesos_activos_a2").text(variableSeleccionada);
                        $('.procesos_activos_a2').css("background-color", colorYVariable);
                        $(".procesos_actovos_a2").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 4);//sumar a paginas ocupadas de 4
                        return
                    }if ($(".procesos_activos_a3").text()==""){
                        $(".procesos_activos_a3").text(variableSeleccionada);
                        $('.procesos_activos_a3').css("background-color", colorYVariable);
                        $(".procesos_actovos_a3").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 4);//sumar a paginas ocupadas de 4
                        return
                    }if ($(".procesos_activos_a4").text()==""){
                        $(".procesos_activos_a4").text(variableSeleccionada);
                        $('.procesos_activos_a4').css("background-color", colorYVariable);
                        $(".procesos_actovos_a4").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 4);//sumar a paginas ocupadas de 4
                        return
                    }if ($(".procesos_activos_a5").text()==""){
                        $(".procesos_activos_a5").text(variableSeleccionada);
                        $('.procesos_activos_a5').css("background-color", colorYVariable);
                        $(".procesos_actovos_a5").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 4);//sumar a paginas ocupadas de 4
                        return
                    }
    
                    return 
                }if ($("#pagina_2").text()=="") {                
                    //modificador de color en pagina
                    $("#pagina_2").text(variableSeleccionada + " 512 bits");
                    $('#pagina_2').css("color", "white")
                    $('#pagina_2').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_3").text(variableSeleccionada + " 512 bits");
                    $('#pagina_3').css("color", "white")
                    $('#pagina_3').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_4").text(variableSeleccionada + " 512 bits");
                    $('#pagina_4').css("color", "white")
                    $('#pagina_4').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_5").text(variableSeleccionada + " 512 bits");
                    $('#pagina_5').css("color", "white")
                    $('#pagina_5').css("background-color",colorYVariable)
                    
                    if ($(".procesos_activos_a1").text()==""){ //para que sepa donde poner el proceso en la lista de procesos activos
                        $(".procesos_activos_a1").text(variableSeleccionada);
                        $('.procesos_activos_a1').css("background-color", colorYVariable);
                        $(".procesos_actovos_a1").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 4);//sumar a paginas ocupadas de 4
                        return
                    }if ($(".procesos_activos_a2").text()==""){
                        $(".procesos_activos_a2").text(variableSeleccionada);
                        $('.procesos_activos_a2').css("background-color", colorYVariable);
                        $(".procesos_actovos_a2").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 4);//sumar a paginas ocupadas de 4
                        return
                    }if ($(".procesos_activos_a3").text()==""){
                        $(".procesos_activos_a3").text(variableSeleccionada);
                        $('.procesos_activos_a3').css("background-color", colorYVariable);
                        $(".procesos_actovos_a3").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 4);//sumar a paginas ocupadas de 4
                        return
                    }if ($(".procesos_activos_a4").text()==""){
                        $(".procesos_activos_a4").text(variableSeleccionada);
                        $('.procesos_activos_a4').css("background-color", colorYVariable);
                        $(".procesos_actovos_a4").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 4);//sumar a paginas ocupadas de 4
                        return
                    }if ($(".procesos_activos_a5").text()==""){
                        $(".procesos_activos_a5").text(variableSeleccionada);
                        $('.procesos_activos_a5').css("background-color", colorYVariable);
                        $(".procesos_actovos_a5").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 4);//sumar a paginas ocupadas de 4
                        return
                    }
                  
                    return 
                }if ($("#pagina_3").text()=="") {                
                    //modificador de color en pagina
                    $("#pagina_3").text(variableSeleccionada + " 512 bits");
                    $('#pagina_3').css("color", "white")
                    $('#pagina_3').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_4").text(variableSeleccionada + " 512 bits");
                    $('#pagina_4').css("color", "white")
                    $('#pagina_4').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_5").text(variableSeleccionada + " 512 bits");
                    $('#pagina_5').css("color", "white")
                    $('#pagina_5').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_6").text(variableSeleccionada + " 512 bits");
                    $('#pagina_6').css("color", "white")
                    $('#pagina_6').css("background-color",colorYVariable)
                    
                    if ($(".procesos_activos_a1").text()==""){ //para que sepa donde poner el proceso en la lista de procesos activos
                        $(".procesos_activos_a1").text(variableSeleccionada);
                        $('.procesos_activos_a1').css("background-color", colorYVariable);
                        $(".procesos_actovos_a1").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 4);//sumar a paginas ocupadas de 4
                        return
                    }if ($(".procesos_activos_a2").text()==""){
                        $(".procesos_activos_a2").text(variableSeleccionada);
                        $('.procesos_activos_a2').css("background-color", colorYVariable);
                        $(".procesos_actovos_a2").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 4);//sumar a paginas ocupadas de 4
                        return
                    }if ($(".procesos_activos_a3").text()==""){
                        $(".procesos_activos_a3").text(variableSeleccionada);
                        $('.procesos_activos_a3').css("background-color", colorYVariable);
                        $(".procesos_actovos_a3").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 4);//sumar a paginas ocupadas de 4
                        return
                    }if ($(".procesos_activos_a4").text()==""){
                        $(".procesos_activos_a4").text(variableSeleccionada);
                        $('.procesos_activos_a4').css("background-color", colorYVariable);
                        $(".procesos_actovos_a4").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 4);//sumar a paginas ocupadas de 4
                        return
                    }if ($(".procesos_activos_a5").text()==""){
                        $(".procesos_activos_a5").text(variableSeleccionada);
                        $('.procesos_activos_a5').css("background-color", colorYVariable);
                        $(".procesos_actovos_a5").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 4);//sumar a paginas ocupadas de 4
                        return
                    }
                    
                    return 
                }if ($("#pagina_4").text()=="") {                
                    //modificador de color en pagina
                    $("#pagina_4").text(variableSeleccionada + " 512 bits");
                    $('#pagina_4').css("color", "white")
                    $('#pagina_4').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_5").text(variableSeleccionada + " 512 bits");
                    $('#pagina_5').css("color", "white")
                    $('#pagina_5').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_6").text(variableSeleccionada + " 512 bits");
                    $('#pagina_6').css("color", "white")
                    $('#pagina_6').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_7").text(variableSeleccionada + " 512 bits");
                    $('#pagina_7').css("color", "white")
                    $('#pagina_7').css("background-color",colorYVariable)
                    
                   
                    if ($(".procesos_activos_a1").text()==""){ //para que sepa donde poner el proceso en la lista de procesos activos
                        $(".procesos_activos_a1").text(variableSeleccionada);
                        $('.procesos_activos_a1').css("background-color", colorYVariable);
                        $(".procesos_actovos_a1").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 4);//sumar a paginas ocupadas de 4
                        return
                    }if ($(".procesos_activos_a2").text()==""){
                        $(".procesos_activos_a2").text(variableSeleccionada);
                        $('.procesos_activos_a2').css("background-color", colorYVariable);
                        $(".procesos_actovos_a2").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 4);//sumar a paginas ocupadas de 4
                        return
                    }if ($(".procesos_activos_a3").text()==""){
                        $(".procesos_activos_a3").text(variableSeleccionada);
                        $('.procesos_activos_a3').css("background-color", colorYVariable);
                        $(".procesos_actovos_a3").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 4);//sumar a paginas ocupadas de 4
                        return
                    }if ($(".procesos_activos_a4").text()==""){
                        $(".procesos_activos_a4").text(variableSeleccionada);
                        $('.procesos_activos_a4').css("background-color", colorYVariable);
                        $(".procesos_actovos_a4").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 4);//sumar a paginas ocupadas de 4
                        return
                    }if ($(".procesos_activos_a5").text()==""){
                        $(".procesos_activos_a5").text(variableSeleccionada);
                        $('.procesos_activos_a5').css("background-color", colorYVariable);
                        $(".procesos_actovos_a5").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 4);//sumar a paginas ocupadas de 4
                        return
                    }
                    
                    return 
                }if ($("#pagina_5").text()=="") {                
                    //modificador de color en pagina
                    $("#pagina_5").text(variableSeleccionada + " 512 bits");
                    $('#pagina_5').css("color", "white")
                    $('#pagina_5').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_6").text(variableSeleccionada + " 512 bits");
                    $('#pagina_6').css("color", "white")
                    $('#pagina_6').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_7").text(variableSeleccionada + " 512 bits");
                    $('#pagina_7').css("color", "white")
                    $('#pagina_7').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_8").text(variableSeleccionada + " 512 bits");
                    $('#pagina_8').css("color", "white")
                    $('#pagina_8').css("background-color",colorYVariable)               
    
                    if ($(".procesos_activos_a1").text()==""){ //para que sepa donde poner el proceso en la lista de procesos activos
                        $(".procesos_activos_a1").text(variableSeleccionada);
                        $('.procesos_activos_a1').css("background-color", colorYVariable);
                        $(".procesos_actovos_a1").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 4);//sumar a paginas ocupadas de 4 
                        return
                    }if ($(".procesos_activos_a2").text()==""){
                        $(".procesos_activos_a2").text(variableSeleccionada);
                        $('.procesos_activos_a2').css("background-color", colorYVariable);
                        $(".procesos_actovos_a2").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 4);//sumar a paginas ocupadas de 4 
                        return
                    }if ($(".procesos_activos_a3").text()==""){
                        $(".procesos_activos_a3").text(variableSeleccionada);
                        $('.procesos_activos_a3').css("background-color", colorYVariable);
                        $(".procesos_actovos_a3").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 4);//sumar a paginas ocupadas de 4 
                        return
                    }if ($(".procesos_activos_a4").text()==""){
                        $(".procesos_activos_a4").text(variableSeleccionada);
                        $('.procesos_activos_a4').css("background-color", colorYVariable);
                        $(".procesos_actovos_a4").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 4);//sumar a paginas ocupadas de 4 
                        return
                    }if ($(".procesos_activos_a5").text()==""){
                        $(".procesos_activos_a5").text(variableSeleccionada);
                        $('.procesos_activos_a5').css("background-color", colorYVariable);
                        $(".procesos_actovos_a5").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 4);//sumar a paginas ocupadas de 4 
                        return
                    }
                   
                    return 
                }if ($("#pagina_6").text()=="") {                
                    //modificador de color en pagina
                    $("#pagina_6").text(variableSeleccionada + " 512 bits");
                    $('#pagina_6').css("color", "white")
                    $('#pagina_6').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_7").text(variableSeleccionada + " 512 bits");
                    $('#pagina_7').css("color", "white")
                    $('#pagina_7').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_8").text(variableSeleccionada + " 512 bits");
                    $('#pagina_8').css("color", "white")
                    $('#pagina_8').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_9").text(variableSeleccionada + " 512 bits");
                    $('#pagina_9').css("color", "white")
                    $('#pagina_9').css("background-color",colorYVariable)               
    
                    if ($(".procesos_activos_a1").text()==""){ //para que sepa donde poner el proceso en la lista de procesos activos
                        $(".procesos_activos_a1").text(variableSeleccionada);
                        $('.procesos_activos_a1').css("background-color", colorYVariable);
                        $(".procesos_actovos_a1").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 4);//sumar a paginas ocupadas de 4
                        return
                    }if ($(".procesos_activos_a2").text()==""){
                        $(".procesos_activos_a2").text(variableSeleccionada);
                        $('.procesos_activos_a2').css("background-color", colorYVariable);
                        $(".procesos_actovos_a2").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 4);//sumar a paginas ocupadas de 4
                        return
                    }if ($(".procesos_activos_a3").text()==""){
                        $(".procesos_activos_a3").text(variableSeleccionada);
                        $('.procesos_activos_a3').css("background-color", colorYVariable);
                        $(".procesos_actovos_a3").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 4);//sumar a paginas ocupadas de 4
                        return
                    }if ($(".procesos_activos_a4").text()==""){
                        $(".procesos_activos_a4").text(variableSeleccionada);
                        $('.procesos_activos_a4').css("background-color", colorYVariable);
                        $(".procesos_actovos_a4").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 4);//sumar a paginas ocupadas de 4
                        return
                    }if ($(".procesos_activos_a5").text()==""){
                        $(".procesos_activos_a5").text(variableSeleccionada);
                        $('.procesos_activos_a5').css("background-color", colorYVariable);
                        $(".procesos_actovos_a5").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 4);//sumar a paginas ocupadas de 4
                        return
                    }   
                    return 
                }else{
                    pa_despues_proceso.push(variableSeleccionada);
                    pa_despues_tamano.push(seleccionDeTamano);
                    if ($(".procesos_en_espera_a1").text()==""){ 
                        $(".procesos_en_espera_a1").text(variableSeleccionada);
                        $('.procesos_en_espera_a1').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a1").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        return
                    }if ($(".procesos_en_espera_a2").text()==""){
                        $(".procesos_en_espera_a2").text(variableSeleccionada);
                        $('.procesos_en_espera_a2').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a2").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        return
                    }if ($(".procesos_en_espera_a3").text()==""){
                        $(".procesos_en_espera_a3").text(variableSeleccionada);
                        $('.procesos_en_espera_a3').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a3").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        return
                    }if ($(".procesos_en_espera_a4").text()==""){
                        $(".procesos_en_espera_a4").text(variableSeleccionada);
                        $('.procesos_en_espera_a4').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a4").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        return
                    }if ($(".procesos_en_espera_a5").text()==""){
                        $(".procesos_en_espera_a5").text(variableSeleccionada);
                        $('.procesos_en_espera_a5').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a5").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        return
                    }
                }
    
            break;
            
    
            case 1024:
                if ($("#pagina_1").text()=="") {                
                    //modificador de color en pagina
                    $("#pagina_1").text(variableSeleccionada + " 1024 bits");
                    $('#pagina_1').css("color", "white")
                    $('#pagina_1').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_2").text(variableSeleccionada + " 1024 bits");
                    $('#pagina_2').css("color", "white")
                    $('#pagina_2').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_3").text(variableSeleccionada + " 1024 bits");
                    $('#pagina_3').css("color", "white")
                    $('#pagina_3').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_4").text(variableSeleccionada + " 1024 bits");
                    $('#pagina_4').css("color", "white")
                    $('#pagina_4').css("background-color",colorYVariable)               
                    //pagiina siguiente
                    $("#pagina_5").text(variableSeleccionada + " 1024 bits");
                    $('#pagina_5').css("color", "white")
                    $('#pagina_5').css("background-color",colorYVariable)               
                    //pagiina siguiente
                    $("#pagina_6").text(variableSeleccionada + " 1024 bits");
                    $('#pagina_6').css("color", "white")
                    $('#pagina_6').css("background-color",colorYVariable)               
                    //pagiina siguiente
                    $("#pagina_7").text(variableSeleccionada + " 1024 bits");
                    $('#pagina_7').css("color", "white")
                    $('#pagina_7').css("background-color",colorYVariable)               
                    //pagiina siguiente
                    $("#pagina_8").text(variableSeleccionada + " 1024 bits");
                    $('#pagina_8').css("color", "white")
                    $('#pagina_8').css("background-color",colorYVariable)               
    
                    if ($(".procesos_activos_a1").text()==""){ //para que sepa donde poner el proceso en la lista de procesos activos
                        $(".procesos_activos_a1").text(variableSeleccionada);
                        $('.procesos_activos_a1').css("background-color", colorYVariable);
                        $(".procesos_actovos_a1").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 8);//sumar a paginas ocupadas de 8
                        return
                    }if ($(".procesos_activos_a2").text()==""){
                        $(".procesos_activos_a2").text(variableSeleccionada);
                        $('.procesos_activos_a2').css("background-color", colorYVariable);
                        $(".procesos_actovos_a2").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 8);//sumar a paginas ocupadas de 8
                        return
                    }if ($(".procesos_activos_a3").text()==""){
                        $(".procesos_activos_a3").text(variableSeleccionada);
                        $('.procesos_activos_a3').css("background-color", colorYVariable);
                        $(".procesos_actovos_a3").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 8);//sumar a paginas ocupadas de 8
                        return
                    }if ($(".procesos_activos_a4").text()==""){
                        $(".procesos_activos_a4").text(variableSeleccionada);
                        $('.procesos_activos_a4').css("background-color", colorYVariable);
                        $(".procesos_actovos_a4").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 8);//sumar a paginas ocupadas de 8
                        return
                    }if ($(".procesos_activos_a5").text()==""){
                        $(".procesos_activos_a5").text(variableSeleccionada);
                        $('.procesos_activos_a5').css("background-color", colorYVariable);
                        $(".procesos_actovos_a5").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 8);//sumar a paginas ocupadas de 8
                        return
                    }
                   
                    return 
                } if ($("#pagina_2").text()=="") {                
                    //modificador de color en pagina
                    $("#pagina_2").text(variableSeleccionada + " 1024 bits");
                    $('#pagina_2').css("color", "white")
                    $('#pagina_2').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_3").text(variableSeleccionada + " 1024 bits");
                    $('#pagina_3').css("color", "white")
                    $('#pagina_3').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_4").text(variableSeleccionada + " 1024 bits");
                    $('#pagina_4').css("color", "white")
                    $('#pagina_4').css("background-color",colorYVariable)
                    //pagiina siguiente
                    $("#pagina_5").text(variableSeleccionada + " 1024 bits");
                    $('#pagina_5').css("color", "white")
                    $('#pagina_5').css("background-color",colorYVariable)               
                    //pagiina siguiente
                    $("#pagina_6").text(variableSeleccionada + " 1024 bits");
                    $('#pagina_6').css("color", "white")
                    $('#pagina_6').css("background-color",colorYVariable)               
                    //pagiina siguiente
                    $("#pagina_7").text(variableSeleccionada + " 1024 bits");
                    $('#pagina_7').css("color", "white")
                    $('#pagina_7').css("background-color",colorYVariable)               
                    //pagiina siguiente
                    $("#pagina_8").text(variableSeleccionada + " 1024 bits");
                    $('#pagina_8').css("color", "white")
                    $('#pagina_8').css("background-color",colorYVariable)               
                    //pagiina siguiente
                    $("#pagina_9").text(variableSeleccionada + " 1024 bits");
                    $('#pagina_9').css("color", "white")
                    $('#pagina_9').css("background-color",colorYVariable)               
    
                    if ($(".procesos_activos_a1").text()==""){ //para que sepa donde poner el proceso en la lista de procesos activos
                        $(".procesos_activos_a1").text(variableSeleccionada);
                        $('.procesos_activos_a1').css("background-color", colorYVariable);
                        $(".procesos_actovos_a1").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 8);//sumar a paginas ocupadas de 8
                        return
                    }if ($(".procesos_activos_a2").text()==""){
                        $(".procesos_activos_a2").text(variableSeleccionada);
                        $('.procesos_activos_a2').css("background-color", colorYVariable);
                        $(".procesos_actovos_a2").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 8);//sumar a paginas ocupadas de 8
                        return
                    }if ($(".procesos_activos_a3").text()==""){
                        $(".procesos_activos_a3").text(variableSeleccionada);
                        $('.procesos_activos_a3').css("background-color", colorYVariable);
                        $(".procesos_actovos_a3").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 8);//sumar a paginas ocupadas de 8
                        return
                    }if ($(".procesos_activos_a4").text()==""){
                        $(".procesos_activos_a4").text(variableSeleccionada);
                        $('.procesos_activos_a4').css("background-color", colorYVariable);
                        $(".procesos_actovos_a4").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 8);//sumar a paginas ocupadas de 8
                        return
                    }if ($(".procesos_activos_a5").text()==""){
                        $(".procesos_activos_a5").text(variableSeleccionada);
                        $('.procesos_activos_a5').css("background-color", colorYVariable);
                        $(".procesos_actovos_a5").css("color","white")
                        $(".casilla_de_numeros_procesos").text(contador + 1);
                        $(".casilla_de_paginas_ocupadas").text(num_ocupadas + 8);//sumar a paginas ocupadas de 8
                        return
                    }
                   
                    return 
                }if ($("#pagina_3").text()=="") {    
    
                    if ($(".procesos_en_espera_a1").text()==""){ 
                        $(".procesos_en_espera_a1").text(variableSeleccionada);
                        $('.procesos_en_espera_a1').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a1").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }if ($(".procesos_en_espera_a2").text()==""){
                        $(".procesos_en_espera_a2").text(variableSeleccionada);
                        $('.procesos_en_espera_a2').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a2").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }if ($(".procesos_en_espera_a3").text()==""){
                        $(".procesos_en_espera_a3").text(variableSeleccionada);
                        $('.procesos_en_espera_a3').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a3").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }if ($(".procesos_en_espera_a4").text()==""){
                        $(".procesos_en_espera_a4").text(variableSeleccionada);
                        $('.procesos_en_espera_a4').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a4").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }if ($(".procesos_en_espera_a5").text()==""){
                        $(".procesos_en_espera_a5").text(variableSeleccionada);
                        $('.procesos_en_espera_a5').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a5").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }
    
                }if ($("#pagina_4").text()=="") {                
                    if ($(".procesos_en_espera_a1").text()==""){ 
                        $(".procesos_en_espera_a1").text(variableSeleccionada);
                        $('.procesos_en_espera_a1').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a1").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }if ($(".procesos_en_espera_a2").text()==""){
                        $(".procesos_en_espera_a2").text(variableSeleccionada);
                        $('.procesos_en_espera_a2').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a2").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }if ($(".procesos_en_espera_a3").text()==""){
                        $(".procesos_en_espera_a3").text(variableSeleccionada);
                        $('.procesos_en_espera_a3').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a3").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }if ($(".procesos_en_espera_a4").text()==""){
                        $(".procesos_en_espera_a4").text(variableSeleccionada);
                        $('.procesos_en_espera_a4').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a4").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }if ($(".procesos_en_espera_a5").text()==""){
                        $(".procesos_en_espera_a5").text(variableSeleccionada);
                        $('.procesos_en_espera_a5').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a5").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }
                }if ($("#pagina_5").text()=="") {                
                    if ($(".procesos_en_espera_a1").text()==""){ 
                        $(".procesos_en_espera_a1").text(variableSeleccionada);
                        $('.procesos_en_espera_a1').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a1").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }if ($(".procesos_en_espera_a2").text()==""){
                        $(".procesos_en_espera_a2").text(variableSeleccionada);
                        $('.procesos_en_espera_a2').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a2").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }if ($(".procesos_en_espera_a3").text()==""){
                        $(".procesos_en_espera_a3").text(variableSeleccionada);
                        $('.procesos_en_espera_a3').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a3").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }if ($(".procesos_en_espera_a4").text()==""){
                        $(".procesos_en_espera_a4").text(variableSeleccionada);
                        $('.procesos_en_espera_a4').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a4").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }if ($(".procesos_en_espera_a5").text()==""){
                        $(".procesos_en_espera_a5").text(variableSeleccionada);
                        $('.procesos_en_espera_a5').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a5").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }
                }if ($("#pagina_6").text()=="") {                
                    if ($(".procesos_en_espera_a1").text()==""){ 
                        $(".procesos_en_espera_a1").text(variableSeleccionada);
                        $('.procesos_en_espera_a1').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a1").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }if ($(".procesos_en_espera_a2").text()==""){
                        $(".procesos_en_espera_a2").text(variableSeleccionada);
                        $('.procesos_en_espera_a2').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a2").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }if ($(".procesos_en_espera_a3").text()==""){
                        $(".procesos_en_espera_a3").text(variableSeleccionada);
                        $('.procesos_en_espera_a3').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a3").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }if ($(".procesos_en_espera_a4").text()==""){
                        $(".procesos_en_espera_a4").text(variableSeleccionada);
                        $('.procesos_en_espera_a4').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a4").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }if ($(".procesos_en_espera_a5").text()==""){
                        $(".procesos_en_espera_a5").text(variableSeleccionada);
                        $('.procesos_en_espera_a5').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a5").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }
                }if ($("#pagina_7").text()=="") {                
                    if ($(".procesos_en_espera_a1").text()==""){ 
                        $(".procesos_en_espera_a1").text(variableSeleccionada);
                        $('.procesos_en_espera_a1').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a1").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }if ($(".procesos_en_espera_a2").text()==""){
                        $(".procesos_en_espera_a2").text(variableSeleccionada);
                        $('.procesos_en_espera_a2').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a2").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }if ($(".procesos_en_espera_a3").text()==""){
                        $(".procesos_en_espera_a3").text(variableSeleccionada);
                        $('.procesos_en_espera_a3').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a3").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }if ($(".procesos_en_espera_a4").text()==""){
                        $(".procesos_en_espera_a4").text(variableSeleccionada);
                        $('.procesos_en_espera_a4').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a4").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }if ($(".procesos_en_espera_a5").text()==""){
                        $(".procesos_en_espera_a5").text(variableSeleccionada);
                        $('.procesos_en_espera_a5').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a5").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }
                }if ($("#pagina_8").text()=="") {                
                    if ($(".procesos_en_espera_a1").text()==""){ 
                        $(".procesos_en_espera_a1").text(variableSeleccionada);
                        $('.procesos_en_espera_a1').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a1").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }if ($(".procesos_en_espera_a2").text()==""){
                        $(".procesos_en_espera_a2").text(variableSeleccionada);
                        $('.procesos_en_espera_a2').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a2").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }if ($(".procesos_en_espera_a3").text()==""){
                        $(".procesos_en_espera_a3").text(variableSeleccionada);
                        $('.procesos_en_espera_a3').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a3").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }if ($(".procesos_en_espera_a4").text()==""){
                        $(".procesos_en_espera_a4").text(variableSeleccionada);
                        $('.procesos_en_espera_a4').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a4").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }if ($(".procesos_en_espera_a5").text()==""){
                        $(".procesos_en_espera_a5").text(variableSeleccionada);
                        $('.procesos_en_espera_a5').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a5").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }
                }if ($("#pagina_9").text()=="") {                
                    if ($(".procesos_en_espera_a1").text()==""){ 
                        $(".procesos_en_espera_a1").text(variableSeleccionada);
                        $('.procesos_en_espera_a1').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a1").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }if ($(".procesos_en_espera_a2").text()==""){
                        $(".procesos_en_espera_a2").text(variableSeleccionada);
                        $('.procesos_en_espera_a2').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a2").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }if ($(".procesos_en_espera_a3").text()==""){
                        $(".procesos_en_espera_a3").text(variableSeleccionada);
                        $('.procesos_en_espera_a3').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a3").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }if ($(".procesos_en_espera_a4").text()==""){
                        $(".procesos_en_espera_a4").text(variableSeleccionada);
                        $('.procesos_en_espera_a4').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a4").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }if ($(".procesos_en_espera_a5").text()==""){
                        $(".procesos_en_espera_a5").text(variableSeleccionada);
                        $('.procesos_en_espera_a5').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a5").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        pa_despues_proceso.push(variableSeleccionada);//                                    agregando a en espera
                        pa_despues_tamano.push(seleccionDeTamano);
                        return
                    }
                }else{
                    pa_despues_proceso.push(variableSeleccionada);
                    pa_despues_tamano.push(seleccionDeTamano);
                    if ($(".procesos_en_espera_a1").text()==""){ 
                        $(".procesos_en_espera_a1").text(variableSeleccionada);
                        $('.procesos_en_espera_a1').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a1").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        return
                    }if ($(".procesos_en_espera_a2").text()==""){
                        $(".procesos_en_espera_a2").text(variableSeleccionada);
                        $('.procesos_en_espera_a2').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a2").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        return
                    }if ($(".procesos_en_espera_a3").text()==""){
                        $(".procesos_en_espera_a3").text(variableSeleccionada);
                        $('.procesos_en_espera_a3').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a3").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        return
                    }if ($(".procesos_en_espera_a4").text()==""){
                        $(".procesos_en_espera_a4").text(variableSeleccionada);
                        $('.procesos_en_espera_a4').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a4").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        return
                    }if ($(".procesos_en_espera_a5").text()==""){
                        $(".procesos_en_espera_a5").text(variableSeleccionada);
                        $('.procesos_en_espera_a5').css("background-color", colorYVariable);
                        $(".procesos_en_espera_a5").css("color","white")
                        alert("Sin espacio")
                        $('.alerta_sin_espacio').css("background-color", "red");//      alerta_sin_espacio
                        return
                    }
                }
                break;
            default:
                alert("error fatal, llego a default")
                break;
        }
    
    
    });






















































    /*terminar proceso*/
    $('#boton_terminar_proceso').click(function(){ 
        let eleccion_terminar =$("#selec_proceso_para_terminar option:selected").text(); /*esto es para jalar la seleccion del select y alojarlo en una variable*/
        let num_ocupadas =Number( $(".casilla_de_paginas_ocupadas").text());//casilla de paginas ocupadas
        let contador = Number( $(".casilla_de_numeros_procesos").text());

        if (eleccion_terminar == "A1") {
            $(".casilla_de_numeros_procesos").text(contador - 1);

            //para la lista de procesos activos
            if ($('.procesos_activos_a1').text() == "A1") {
                $('.procesos_activos_a1').css("color", "#c7c7c7");
                $('.procesos_activos_a1').text("");
                $('.procesos_activos_a1').css("background-color", "#c7c7c7");                
            }if ($('.procesos_activos_a2').text() == "A1") {
                $('.procesos_activos_a2').css("color", "#c7c7c7");
                $('.procesos_activos_a2').text("");
                $('.procesos_activos_a2').css("background-color", "#c7c7c7");
            }if ($('.procesos_activos_a3').text() == "A1") {
                $('.procesos_activos_a3').css("color", "#c7c7c7");
                $('.procesos_activos_a3').text("");
                $('.procesos_activos_a3').css("background-color", "#c7c7c7");
            }if ($('.procesos_activos_a4').text() == "A1") {
                $('.procesos_activos_a4').css("color", "#c7c7c7");
                $('.procesos_activos_a4').text("");
                $('.procesos_activos_a4').css("background-color", "#c7c7c7");
            }if ($('.procesos_activos_a5').text() == "A1") {
                $('.procesos_activos_a5').css("color", "#c7c7c7");
                $('.procesos_activos_a5').text("");
                $('.procesos_activos_a5').css("background-color", "#c7c7c7");
            }
            //para buscar la pagina
            let pagina_a1 = $('#pagina_1').text();
            let pagina_a2 = $('#pagina_2').text();
            let pagina_a3 = $('#pagina_3').text();
            let pagina_a4 = $('#pagina_4').text();
            let pagina_a5 = $('#pagina_5').text();
            let pagina_a6 = $('#pagina_6').text();
            let pagina_a7 = $('#pagina_7').text();
            let pagina_a8 = $('#pagina_8').text();
            let pagina_a9 = $('#pagina_9').text();
            let fraceA = "A1";           

            if (pagina_a1.includes(fraceA)) {
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_1').text("");
                $('#pagina_1').css("background-color", "#c7c7c7");
            }
            if(pagina_a2.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_2').text("");
                $('#pagina_2').css("background-color", "#c7c7c7");
            }
            if(pagina_a3.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_3').text("");
                $('#pagina_3').css("background-color", "#c7c7c7");
            }
            if(pagina_a4.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_4').text("");
                $('#pagina_4').css("background-color", "#c7c7c7");
            }
            if(pagina_a5.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_5').text("");
                $('#pagina_5').css("background-color", "#c7c7c7");
            }
            if(pagina_a6.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_6').text("");
                $('#pagina_6').css("background-color", "#c7c7c7");
            }
            if(pagina_a7.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_7').text("");
                $('#pagina_7').css("background-color", "#c7c7c7");
            }
            if(pagina_a8.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_8').text("");
                $('#pagina_8').css("background-color", "#c7c7c7");
            }
            if(pagina_a9.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_9').text("");
                $('#pagina_9').css("background-color", "#c7c7c7");
            }
            if ($(".casilla_de_paginas_ocupadas").text() < 0) { // para corregir que tenga balores de -1
                $(".casilla_de_paginas_ocupadas").text(0);                
            }

        }if (eleccion_terminar == "A2") {
            $(".casilla_de_numeros_procesos").text( contador - 1);
            if ($(".casilla_de_numeros_procesos").text() < 0 ) {
                $(".casilla_de_numeros_procesos").text(0);
            }
            if ($('.procesos_activos_a1').text() == "A2") { //para la lista de procesos activos
                $('.procesos_activos_a1').css("color", "#c7c7c7");
                $('.procesos_activos_a1').text("");
                $('.procesos_activos_a1').css("background-color", "#c7c7c7");                
            }if ($('.procesos_activos_a2').text() == "A2") {
                $('.procesos_activos_a2').css("color", "#c7c7c7");
                $('.procesos_activos_a2').text("");
                $('.procesos_activos_a2').css("background-color", "#c7c7c7");
            }if ($('.procesos_activos_a3').text() == "A2") {
                $('.procesos_activos_a3').css("color", "#c7c7c7");
                $('.procesos_activos_a3').text("");
                $('.procesos_activos_a3').css("background-color", "#c7c7c7");
            }if ($('.procesos_activos_a4').text() == "A2") {
                $('.procesos_activos_a4').css("color", "#c7c7c7");
                $('.procesos_activos_a4').text("");
                $('.procesos_activos_a4').css("background-color", "#c7c7c7");
            }if ($('.procesos_activos_a5').text() == "A2") {
                $('.procesos_activos_a5').css("color", "#c7c7c7");
                $('.procesos_activos_a5').text("");
                $('.procesos_activos_a5').css("background-color", "#c7c7c7");
            }
            //para buscar la pagina
            let pagina_a1 = $('#pagina_1').text();
            let pagina_a2 = $('#pagina_2').text();
            let pagina_a3 = $('#pagina_3').text();
            let pagina_a4 = $('#pagina_4').text();
            let pagina_a5 = $('#pagina_5').text();
            let pagina_a6 = $('#pagina_6').text();
            let pagina_a7 = $('#pagina_7').text();
            let pagina_a8 = $('#pagina_8').text();
            let pagina_a9 = $('#pagina_9').text();
            let fraceA = "A2";

            if (pagina_a1.includes(fraceA)) {
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_1').text("");
                $('#pagina_1').css("background-color", "#c7c7c7");
            }
            if(pagina_a2.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_2').text("");
                $('#pagina_2').css("background-color", "#c7c7c7");
            }
            if(pagina_a3.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_3').text("");
                $('#pagina_3').css("background-color", "#c7c7c7");
            }
            if(pagina_a4.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_4').text("");
                $('#pagina_4').css("background-color", "#c7c7c7");
            }
            if(pagina_a5.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_5').text("");
                $('#pagina_5').css("background-color", "#c7c7c7");
            }
            if(pagina_a6.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_6').text("");
                $('#pagina_6').css("background-color", "#c7c7c7");
            }
            if(pagina_a7.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_7').text("");
                $('#pagina_7').css("background-color", "#c7c7c7");
            }
            if(pagina_a8.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_8').text("");
                $('#pagina_8').css("background-color", "#c7c7c7");
            }
            if(pagina_a9.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_9').text("");
                $('#pagina_9').css("background-color", "#c7c7c7");
            }

        }if (eleccion_terminar == "A3") {
            $(".casilla_de_numeros_procesos").text( contador - 1);
            if ($(".casilla_de_numeros_procesos").text() < 0 ) {
                $(".casilla_de_numeros_procesos").text(0);
            }
            if ($('.procesos_activos_a1').text() == "A3") { //para la lista de procesos activos
                $('.procesos_activos_a1').css("color", "#c7c7c7");
                $('.procesos_activos_a1').text("");
                $('.procesos_activos_a1').css("background-color", "#c7c7c7");                
            }if ($('.procesos_activos_a2').text() == "A3") {
                $('.procesos_activos_a2').css("color", "#c7c7c7");
                $('.procesos_activos_a2').text("");
                $('.procesos_activos_a2').css("background-color", "#c7c7c7");
            }if ($('.procesos_activos_a3').text() == "A3") {
                $('.procesos_activos_a3').css("color", "#c7c7c7");
                $('.procesos_activos_a3').text("");
                $('.procesos_activos_a3').css("background-color", "#c7c7c7");
            }if ($('.procesos_activos_a4').text() == "A3") {
                $('.procesos_activos_a4').css("color", "#c7c7c7");
                $('.procesos_activos_a4').text("");
                $('.procesos_activos_a4').css("background-color", "#c7c7c7");
            }if ($('.procesos_activos_a5').text() == "A3") {
                $('.procesos_activos_a5').css("color", "#c7c7c7");
                $('.procesos_activos_a5').text("");
                $('.procesos_activos_a5').css("background-color", "#c7c7c7");
            }
            //para buscar la pagina
            let pagina_a1 = $('#pagina_1').text();
            let pagina_a2 = $('#pagina_2').text();
            let pagina_a3 = $('#pagina_3').text();
            let pagina_a4 = $('#pagina_4').text();
            let pagina_a5 = $('#pagina_5').text();
            let pagina_a6 = $('#pagina_6').text();
            let pagina_a7 = $('#pagina_7').text();
            let pagina_a8 = $('#pagina_8').text();
            let pagina_a9 = $('#pagina_9').text();
            let fraceA = "A3";

            if (pagina_a1.includes(fraceA)) {
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_1').text("");
                $('#pagina_1').css("background-color", "#c7c7c7");
            }
            if(pagina_a2.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_2').text("");
                $('#pagina_2').css("background-color", "#c7c7c7");
            }
            if(pagina_a3.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_3').text("");
                $('#pagina_3').css("background-color", "#c7c7c7");
            }
            if(pagina_a4.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_4').text("");
                $('#pagina_4').css("background-color", "#c7c7c7");
            }
            if(pagina_a5.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_5').text("");
                $('#pagina_5').css("background-color", "#c7c7c7");
            }
            if(pagina_a6.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_6').text("");
                $('#pagina_6').css("background-color", "#c7c7c7");
            }
            if(pagina_a7.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_7').text("");
                $('#pagina_7').css("background-color", "#c7c7c7");
            }
            if(pagina_a8.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_8').text("");
                $('#pagina_8').css("background-color", "#c7c7c7");
            }
            if(pagina_a9.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_9').text("");
                $('#pagina_9').css("background-color", "#c7c7c7");
            }
            if ($(".casilla_de_paginas_ocupadas").text() < 0) { // para corregir que tenga balores de -1
                $(".casilla_de_paginas_ocupadas").text(0);                
            }
        }if (eleccion_terminar == "A4") {
            $(".casilla_de_numeros_procesos").text( contador - 1);
            if ($(".casilla_de_numeros_procesos").text() < 0 ) {
                $(".casilla_de_numeros_procesos").text(0);
            }
            if ($('.procesos_activos_a1').text() == "A4") { //para la lista de procesos activos
                $('.procesos_activos_a1').css("color", "#c7c7c7");
                $('.procesos_activos_a1').text("");
                $('.procesos_activos_a1').css("background-color", "#c7c7c7");                
            }if ($('.procesos_activos_a2').text() == "A4") {
                $('.procesos_activos_a2').css("color", "#c7c7c7");
                $('.procesos_activos_a2').text("");
                $('.procesos_activos_a2').css("background-color", "#c7c7c7");
            }if ($('.procesos_activos_a3').text() == "A4") {
                $('.procesos_activos_a3').css("color", "#c7c7c7");
                $('.procesos_activos_a3').text("");
                $('.procesos_activos_a3').css("background-color", "#c7c7c7");
            }if ($('.procesos_activos_a4').text() == "A4") {
                $('.procesos_activos_a4').css("color", "#c7c7c7");
                $('.procesos_activos_a4').text("");
                $('.procesos_activos_a4').css("background-color", "#c7c7c7");
            }if ($('.procesos_activos_a5').text() == "A4") {
                $('.procesos_activos_a5').css("color", "#c7c7c7");
                $('.procesos_activos_a5').text("");
                $('.procesos_activos_a5').css("background-color", "#c7c7c7");
            }
            //para buscar la pagina
            let pagina_a1 = $('#pagina_1').text();
            let pagina_a2 = $('#pagina_2').text();
            let pagina_a3 = $('#pagina_3').text();
            let pagina_a4 = $('#pagina_4').text();
            let pagina_a5 = $('#pagina_5').text();
            let pagina_a6 = $('#pagina_6').text();
            let pagina_a7 = $('#pagina_7').text();
            let pagina_a8 = $('#pagina_8').text();
            let pagina_a9 = $('#pagina_9').text();
            let fraceA = "A4";

            if (pagina_a1.includes(fraceA)) {
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_1').text("");
                $('#pagina_1').css("background-color", "#c7c7c7");
            }
            if(pagina_a2.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_2').text("");
                $('#pagina_2').css("background-color", "#c7c7c7");
            }
            if(pagina_a3.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_3').text("");
                $('#pagina_3').css("background-color", "#c7c7c7");
            }
            if(pagina_a4.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_4').text("");
                $('#pagina_4').css("background-color", "#c7c7c7");
            }
            if(pagina_a5.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_5').text("");
                $('#pagina_5').css("background-color", "#c7c7c7");
            }
            if(pagina_a6.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_6').text("");
                $('#pagina_6').css("background-color", "#c7c7c7");
            }
            if(pagina_a7.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_7').text("");
                $('#pagina_7').css("background-color", "#c7c7c7");
            }
            if(pagina_a8.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_8').text("");
                $('#pagina_8').css("background-color", "#c7c7c7");
            }
            if(pagina_a9.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_9').text("");
                $('#pagina_9').css("background-color", "#c7c7c7");
            }
            if ($(".casilla_de_paginas_ocupadas").text() < 0) { // para corregir que tenga balores de -1
                $(".casilla_de_paginas_ocupadas").text(0);                
            }
        }if (eleccion_terminar == "A5") {
            $(".casilla_de_numeros_procesos").text( contador - 1);
            if ($(".casilla_de_numeros_procesos").text() < 0 ) {
                $(".casilla_de_numeros_procesos").text(0);
            }
            if ($('.procesos_activos_a1').text() == "A5") { //para la lista de procesos activos
                $('.procesos_activos_a1').css("color", "#c7c7c7");
                $('.procesos_activos_a1').text("");
                $('.procesos_activos_a1').css("background-color", "#c7c7c7");                
            }if ($('.procesos_activos_a2').text() == "A5") {
                $('.procesos_activos_a2').css("color", "#c7c7c7");
                $('.procesos_activos_a2').text("");
                $('.procesos_activos_a2').css("background-color", "#c7c7c7");
            }if ($('.procesos_activos_a3').text() == "A5") {
                $('.procesos_activos_a3').css("color", "#c7c7c7");
                $('.procesos_activos_a3').text("");
                $('.procesos_activos_a3').css("background-color", "#c7c7c7");
            }if ($('.procesos_activos_a4').text() == "A5") {
                $('.procesos_activos_a4').css("color", "#c7c7c7");
                $('.procesos_activos_a4').text("");
                $('.procesos_activos_a4').css("background-color", "#c7c7c7");
            }if ($('.procesos_activos_a5').text() == "A5") {
                $('.procesos_activos_a5').css("color", "#c7c7c7");
                $('.procesos_activos_a5').text("");
                $('.procesos_activos_a5').css("background-color", "#c7c7c7");
            }
        
            //para buscar la pagina
            let pagina_a1 = $('#pagina_1').text();
            let pagina_a2 = $('#pagina_2').text();
            let pagina_a3 = $('#pagina_3').text();
            let pagina_a4 = $('#pagina_4').text();
            let pagina_a5 = $('#pagina_5').text();
            let pagina_a6 = $('#pagina_6').text();
            let pagina_a7 = $('#pagina_7').text();
            let pagina_a8 = $('#pagina_8').text();
            let pagina_a9 = $('#pagina_9').text();
            let fraceA = "A5";

            if (pagina_a1.includes(fraceA)) {
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_1').text("");
                $('#pagina_1').css("background-color", "#c7c7c7");
            }
            if(pagina_a2.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_2').text("");
                $('#pagina_2').css("background-color", "#c7c7c7");
            }
            if(pagina_a3.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_3').text("");
                $('#pagina_3').css("background-color", "#c7c7c7");
            }
            if(pagina_a4.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_4').text("");
                $('#pagina_4').css("background-color", "#c7c7c7");
            }
            if(pagina_a5.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_5').text("");
                $('#pagina_5').css("background-color", "#c7c7c7");
            }
            if(pagina_a6.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_6').text("");
                $('#pagina_6').css("background-color", "#c7c7c7");
            }
            if(pagina_a7.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_7').text("");
                $('#pagina_7').css("background-color", "#c7c7c7");
            }
            if(pagina_a8.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_8').text("");
                $('#pagina_8').css("background-color", "#c7c7c7");
            }
            if(pagina_a9.includes(fraceA)){
                $(".casilla_de_paginas_ocupadas").text( contador - 1);
                $('#pagina_9').text("");
                $('#pagina_9').css("background-color", "#c7c7c7");
            }
            if ($(".casilla_de_paginas_ocupadas").text() < 0) { // para corregir que tenga balores de -1
                $(".casilla_de_paginas_ocupadas").text(0);                
            }
        }
    });































    $('#boton_reiniciar').click(function(){  
        let primerValor = pa_despues_proceso[0];//para jalar el primer valor que esta en el arreglo
        let primerTamano = pa_despues_tamano[0];//para jalar el primer valor que esta en el arreglo

        $('#boton_iniciar').trigger('click', [primerValor, primerTamano]);
        
        
        pa_despues_proceso.shift();//borrar primer valor
        pa_despues_tamano.shift();//borrar primer valor

    });






















    //para que los procesos en espera se pasen a ejecucion
    $('.alerta_sin_espacio').click(function(){
        alert("hola_le acabas de dar click al boton sin espacio")
        /*reseteo de lista de procesos activos*/
        $('.procesos_activos_a1').css("color", "#c7c7c7");
        $('.procesos_activos_a1').css("background-color", "#c7c7c7");

        $('.procesos_activos_a2').css("color", "#c7c7c7");
        $('.procesos_activos_a2').css("background-color", "#c7c7c7");

        $('.procesos_activos_a3').css("color", "#c7c7c7");
        $('.procesos_activos_a3').css("background-color", "#c7c7c7");

        $('.procesos_activos_a4').css("color", "#c7c7c7");
        $('.procesos_activos_a4').css("background-color", "#c7c7c7");

        $('.procesos_activos_a5').css("color", "#c7c7c7");
        $('.procesos_activos_a5').css("background-color", "#c7c7c7");

        /*reseteo de procesos */
        $("#pagina_1").text(" "); 
        $('#pagina_1').css("color", "white")
        $('#pagina_1').css("background-color", "#c7c7c7") 

        $("#pagina_2").text(" "); 
        $('#pagina_2').css("color", "white")
        $('#pagina_2').css("background-color", "#c7c7c7") 

        $("#pagina_3").text(" "); 
        $('#pagina_3').css("color", "white")
        $('#pagina_3').css("background-color", "#c7c7c7") 

        $("#pagina_4").text(" "); 
        $('#pagina_4').css("color", "white")
        $('#pagina_4').css("background-color", "#c7c7c7") 

        $("#pagina_5").text(" "); 
        $('#pagina_5').css("color", "white")
        $('#pagina_5').css("background-color", "#c7c7c7") 

        $("#pagina_6").text(" "); 
        $('#pagina_6').css("color", "white")
        $('#pagina_6').css("background-color", "#c7c7c7") 

        $("#pagina_7").text(" "); 
        $('#pagina_7').css("color", "white")
        $('#pagina_7').css("background-color", "#c7c7c7") 

        $("#pagina_8").text(" "); 
        $('#pagina_8').css("color", "white")
        $('#pagina_8').css("background-color", "#c7c7c7") 

        $("#pagina_9").text(" "); 
        $('#pagina_9').css("color", "white")
        $('#pagina_9').css("background-color", "#c7c7c7") 

        /*reseteo de numero de procesos */
        $(".casilla_de_numeros_procesos").text("0");
        $(".casilla_de_paginas_ocupadas").text("0");


        $('.alerta_sin_espacio').css("background-color", "transparent");
    })

 });

//if (pagina_a1.includes(" 64 ")) {
//    $(".casilla_de_paginas_ocupadas").text(num_ocupadas - 1);//aqui me quede
//}


////para restar en numero de paginas ocupadas
//if (pagina_a1.includes(" 64 ")) {
//    $(".casilla_de_paginas_ocupadas").text(num_ocupadas - 1);//restar a paginas ocupadas de 1
//    return
//}
//if (pagina_a1.includes(" 128 ")) {
//    $(".casilla_de_paginas_ocupadas").text(num_ocupadas - 1);//restar a paginas ocupadas de 1
//    return
//}
//if (pagina_a1.includes(" 256 ")) {
//    $(".casilla_de_paginas_ocupadas").text(num_ocupadas - 2);//restar a paginas ocupadas de 2
//    return
//}
//if (pagina_a1.includes(" 512 ")) {
//    $(".casilla_de_paginas_ocupadas").text(num_ocupadas - 4);//restar a paginas ocupadas de 4
//    return
//}
//if (pagina_a1.includes(" 1024 ")) {
//    $(".casilla_de_paginas_ocupadas").text(num_ocupadas - 8);//restar a paginas ocupadas de 8
//    return
//}